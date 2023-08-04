const db = require("../../db/index");
const { NotFoundError } = require("../../shared/error/index");

module.exports.showUser = async ({ id }) => {
  const user = await db("users").where({ id, is_deleted: false }).first();
  if (!user) throw new NotFoundError("User not Found");

  return user;
};
