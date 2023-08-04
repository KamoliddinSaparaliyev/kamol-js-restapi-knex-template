const Joi = require("joi");
const { BadRequestError } = require("../error");

/**
 *
 * @param {Joi.Schema} schema
 * @returns
 */
module.exports = function genValidator(schema) {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      let validateData;
      if (req.body.data) {
        validateData = JSON.parse(req.body.data);
      } else {
        validateData = req.body;
      }
      await schema.validateAsync(validateData);

      next();
    } catch (error) {
      console.log(error.details[0].message);
      throw new BadRequestError({ error: error.details[0].message });
    }
  };
};
