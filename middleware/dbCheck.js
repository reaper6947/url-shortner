const url = require("../model/urlSchema");
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });


const dbCheck = async (req, res, next) => {
  try {
    console.log(req.params.length)
      const { id } = req.params;
      
      const idcheck = await url.findOne({ id: id });
      if (idCheck === null) {
          res.render("404");
      } else {
          cache.set(`${id}`, `${idCheck.url}`);
          res.redirect(`${idcheck.url}`);
      }
  } catch (err) {
    console.log(err);
  }
};


module.exports = { dbCheck };