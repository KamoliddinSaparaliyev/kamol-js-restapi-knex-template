const db = require("../../db/index");
const { NotFoundError } = require("../../shared/error/index");

module.exports.removeUser = async ({ id }) => {
  const user = await db("users").where({ id, is_deleted: false }).first();
  if (!user) throw new NotFoundError("User not found");

  return await db("users")
    .where({ id, is_deleted: false })
    .update({ is_deleted: true })
    .returning("*")
    .first();
};
