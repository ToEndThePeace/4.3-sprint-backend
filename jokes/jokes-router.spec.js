const server = require("../api/server");
const request = require("supertest");

describe("/api/jokes", () => {
  it("should be using the testing environment", () => {
    expect(process.env.DB_ENV).toEqual("testing");
  });
  describe("GET /", () => {});
});
