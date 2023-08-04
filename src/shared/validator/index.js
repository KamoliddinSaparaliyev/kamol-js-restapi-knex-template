const Joi = require("joi");
const { BadRequestError } = require("../error");

/**
 * @param {{ body, params, query }} param0
 * @param {{ body: Joi.Schema, params: Joi.Schema, query: Joi.Schema }} schema
 * @returns
 */

const httpValidator = async ({ body, params, query }, schema) => {
  if (body) {
    const { error } = schema.body.validate(body);

    if (error) throw new BadRequestError(error);
  }
  if (params) {
    const { error } = schema.params.validate(params);

    if (error) throw new BadRequestError(error);
  }
  if (query) {
    const { error } = schema.query.validate(query);

    if (error) throw new BadRequestError(error);
  }
};

module.exports = httpValidator;
