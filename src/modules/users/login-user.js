const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config/index");
const db = require("../../db/index");
const {
  NotFoundError,
  UnauthorizedError,
} = require("../../shared/error/index");

module.exports.login = async ({ username, password }) => {
  const existing = await db("users")
    .where({ username, is_deleted: false })
    .first();
  if (!existing) throw new NotFoundError("User not found");

  const match = await bcryptjs.compare(password, existing.password);
  if (!match) throw new UnauthorizedError("Username or password wrong!");

  const payload = { user: { id: existing.id } };
  const token = jwt.sign(payload, config.jwt.secret, { expiresIn: "1h" });

  return { token };
};
