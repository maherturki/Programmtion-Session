const Joi = require("joi");


const validateSignup = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("admin", "user").required(),
  });


  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.body = value;

  next();
};

module.exports = validateSignup;
