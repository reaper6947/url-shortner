const url = require("../model/urlSchema");
const { nanoid } = require("nanoid");


const dbSave = async (req, res, next) => {

  try {
    const { url } = req.body;
    const urlExists = await url.exists({ url: url });
    if (urlExists) {
      res.render(404);
    } else {
      const newUrl = new url({ url: url, id: nanoid(8) });
      req.id = newUrl.id
      newUrl.save();
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
 module.exports = {dbSave}