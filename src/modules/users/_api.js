const express = require("express");
const {
  getUsers,
  getUser,
  patchUser,
  postUser,
  deleteUser,
  loginUser,
} = require("./_controllers");

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.get("/users/:id", patchUser);
router.get("/users", postUser);
router.get("/users:id", deleteUser);
router.get("/users/login", loginUser);

module.exports = router;
