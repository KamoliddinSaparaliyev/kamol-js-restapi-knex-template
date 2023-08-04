const db = require("../../db/index");
const bcryptjs = require("bcryptjs");
const { NotFoundError } = require("../../shared/error");

module.exports.editUser = async ({ id, ...changes }) => {
  const user = await db("users").where({ id, is_deleted: false }).first();

  if (!user) throw new NotFoundError("User not found");

  let hashPassword = {};
  if (changes.password)
    hashPassword.password = await bcryptjs.hash(changes.password, 10);

  return (
    await db("users")
      .where({ id })
      .update({ ...changes, ...hashPassword })
      .returning("*")
  )[0];
};
