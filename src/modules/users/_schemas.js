const Joi = require("joi");

// JOI schema for the UserFilter
const userFilterSchema = Joi.object({
  query: Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(1).optional(),
    offset: Joi.number().integer().min(0).optional(),
    sort_by: Joi.string().optional(),
    sort_order: Joi.string().valid("asc", "desc").optional(),
    is_deleted: Joi.boolean().optional(),
  }),
});

const removeUserSchema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
});

const showUserSchema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
});

// JOI schema for the CreateUser
const createUserSchema = Joi.object({
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

// JOI schema for the UpdateUser
const updateUserSchema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
  body: Joi.object({
    first_name: Joi.string().optional(),
    last_name: Joi.string().optional(),
    username: Joi.string().optional(),
    password: Joi.string().optional(),
  }),
});

// JOI schema for the Login
const loginSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  userFilterSchema,
  createUserSchema,
  updateUserSchema,
  removeUserSchema,
  showUserSchema,
  loginSchema,
};
