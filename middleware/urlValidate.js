const Joi = require("joi");

const urlValidate = async (req, res, next) => {
  const urlSchema = Joi.object({
    url: Joi.string().required().uri().max(600),
  });

  try {
    
    const { error, value } = await urlSchema.validateAsync(req.body);
    if (error === undefined) {
      next();
    }
  } catch (err) {
    res.render("index", { err: err.details[0].message ,id:""});
  }
};

module.exports = { urlValidate };
