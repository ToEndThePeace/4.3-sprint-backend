const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/constants");
module.exports = {
  createToken,
  isValid,
};
function createToken(user) {
  const { id, username } = user;
  const payload = { id, username };
  const options = { expiresIn: "1d" };
  return jwt.sign(payload, jwt_secret, options);
}

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}
