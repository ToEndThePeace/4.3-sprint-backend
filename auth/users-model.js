const db = require("../database/dbConfig");

module.exports = {
  findBy,
  insert,
};
function findBy(filter) {
  return db("users").where(filter);
}

function insert(credentials) {
  return db("users").insert(credentials);
}
