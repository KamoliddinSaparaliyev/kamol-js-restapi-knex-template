const express = require("express");
const {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
} = require(".");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @param {express.ErrorRequestHandler} err
 */
const errorMiddlewareFunc = (err, req, res, next) => {
  let status = 500;
  let errorMessage = "Interval server error";

  if (err instanceof BadRequestError)
    (status = 400), (err.message = errorMessage);
  if (err instanceof UnauthorizedError)
    (status = 401), (err.message = errorMessage);
  if (err instanceof ForbiddenError)
    (status = 403), (err.message = errorMessage);
  if (err instanceof NotFoundError)
    (status = 404), (err.message = errorMessage);

  console.error("Error: " + errorMessage);

  return res.status(status).json({ error: errorMessage });
};
module.exports = errorMiddlewareFunc;
