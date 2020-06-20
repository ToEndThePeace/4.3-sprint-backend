const server = require("../api/server");
const request = require("supertest");
const db = require("../database/dbConfig");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/constants");

const username = "Brandon";
const password = "myNewPass";
let myToken;

describe("/api/auth", () => {
  beforeAll(async () => {
    await db("users").truncate();
  });
  afterAll(async () => {
    await db("users").truncate();
  })

  it("should be using the testing environment", () => {
    expect(process.env.DB_ENV).toEqual("testing");
  });

  describe("POST /register", () => {
    it("successfully creates a user", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username, password });

      expect(res.body).toEqual({ id: 1 });
      expect(res.status).toBe(201);
    });

    it("hashes a password correctly", async () => {
      const { password: passFromDb } = await db("users").first();
      expect(bc.compareSync(password, passFromDb)).toBeTruthy();
    });
    it("fails when no data is passed in", async () => {
      const res = await request(server).post("/api/auth/register");

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Please provide proper credentials");
    });
    it("will refuse to create a duplicate user", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username, password });

      expect(res.status).toBe(500);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Could not register");
    });
  });

  describe("POST /login", () => {
    it("should successfully log in", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username, password });
      expect(res.body).toHaveProperty("token");
      expect(res.status).toBe(200);
      myToken = res.body.token;
    });
    it("should be a valid token", () => {
      jwt.verify(myToken, jwt_secret, (err, decodedToken) => {
        expect(err).toBeNull();
        expect(decodedToken.username).toBe(username);
      });
    });
    it("sends a 400 if no credentials are passed in", async () => {
      const res = await request(server).post("/api/auth/login");

      expect(res.status).toBe(400);
    });
    it("sends a 401 on passing in invalid credentials", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username, password: "theWrongPass" });

      expect(res.status).toBe(401);
    });
  });

  describe("GET /api/jokes", () => {
    it("should return a list when my token is set", async () => {
      const res = await request(server)
        .get("/api/jokes")
        .set("Authorization", myToken);
      expect(res.body).not.toBeNull();
    });
    it("should restrict access if no authentication is provided", async () => {
      const res = await request(server).get("/api/jokes");
      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("You must be logged in to do that");
    });
  });
});
