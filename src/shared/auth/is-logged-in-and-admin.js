const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { UnauthorizedError, ForbiddenError } = require("../error");

/**
 * Login qilganligini tekshirish uchun
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isLoggedInAndAdminAndAdmin = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new UnauthorizedError("Login qilmagansiz");
    }

    const decoded = jwt.verify(token, config.jwt.secret);

    if (!decoded.role == "admin") {
      throw new ForbiddenError("Ruhsat yo'q");
    }

    req.user = { id: decoded.id, role: decoded.role };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isLoggedInAndAdminAndAdmin;
