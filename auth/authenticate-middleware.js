/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/constants");

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (token) {
    jwt.verify(token, jwt_secret, (err, decodedToken) => {
      if (err)
        res.status(401).json({ message: "Credentials are expired or invalid" });
      else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "You must be logged in to do that" });
  }
};
