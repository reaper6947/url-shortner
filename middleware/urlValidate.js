const Joi = require("joi");

const urlValidate = async (req, res, next) => {
  const urlSchema = Joi.object({
    url: Joi.string().required().uri().max(600),
  });

  try {
    const { err, value } = await urlSchema.validateAsync(req.body);
    if (error == undefined) {
      next();
    }
  } catch (err) {
    console.log(err.details[0].message);
    res.render("404");
  }
};

module.exports = { urlValidate };
