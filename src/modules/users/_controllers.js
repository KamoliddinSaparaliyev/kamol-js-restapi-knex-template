const express = require("express");
const httpValidator = require("../../shared/validator");
const { listUsers } = require("./list-users");
const { showUser } = require("./show-user");
const { editUser } = require("./edit-user");
const { removeUser } = require("./remove-user");
const { addUser } = require("./add-user");
const { login } = require("./login-user");
const {
  userFilterSchema,
  showUserSchema,
  updateUserSchema,
  removeUserSchema,
  createUserSchema,
  loginSchema,
} = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUsers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, userFilterSchema);

    const result = await listUsers(req.query);

    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser({ id: req.params.id });

    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, updateUserSchema);

    const result = await editUser(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, removeUserSchema);

    const result = await removeUser(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, createUserSchema);

    const result = await addUser(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const loginUser = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, loginSchema);

    const result = await login(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  getUsers,
  patchUser,
  postUser,
  deleteUser,
  loginUser,
};
