const db = require("../../db/index");
const { BadRequestError } = require("../../shared/error/index");

module.exports.addUser = async (payload) => {
  const existing = db("users").where({ username: payload.username }).first();

  if (existing) throw new BadRequestError("username already existit");

  return db("users").insert(payload).returning("*");
};
