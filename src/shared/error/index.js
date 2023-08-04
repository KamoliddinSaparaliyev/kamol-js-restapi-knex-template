const errorMiddlewareFunc = (err, req, res, next) => {
  let status = 500;

  if (err instanceof NotFoundError) {
    status = 404;
  } else if (err instanceof BadRequestError) {
    status = 400;
  } else if (err instanceof UnauthorizedError) {
    status: 401;
  } else if (err instanceof ForbiddenError) {
    status: 403;
  }

  res.status(status).json({
    error: err.message,
  });
};

class UnauthorizedError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ForbiddenError);
    }
  }
}

class ForbiddenError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ForbiddenError);
    }
  }
}

class BadRequestError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

class NotFoundError extends Error {
  constructor(msg) {
    super(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }
  }
}

module.exports = {
  errorMiddlewareFunc,
  UnauthorizedError,
  ForbiddenError,
  BadRequestError,
  NotFoundError,
};
