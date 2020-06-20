const { isValid } = require("./");

const users = [
  {
    username: "Diane",
  },
  {
    username: "Brandon",
    password: "hello",
  },
  {
    password: "wtf",
  },
];

describe("isValid()", () => {
  it("should return false if a user object is invalid", () => {
    expect(isValid(users[0])).toBe(false);
    expect(isValid(users[1])).toBe(true);
    expect(isValid(users[2])).toBe(false);
  });
});
