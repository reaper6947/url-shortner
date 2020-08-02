const { Urls } = require("../model/urlSchema");
const { nanoid } = require("nanoid");

const dbSave = async (req, res, next) => {
  try {
    const { url } = req.body;

    const urlExists = await Urls.findOne({ url: url });
    if (urlExists !== null) {
      res.render("index", {
        err: "shortlink for url already exists",
        id: urlExists.id,
      });
    } else {
      const newUrl = new Urls({ url: url, id: nanoid(8) });
      req.id = newUrl.id;
      newUrl.save();
      console.log("saved")
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { dbSave };
