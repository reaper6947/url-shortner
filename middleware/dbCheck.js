const {Urls} = require("../model/urlSchema");
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

const dbCheck = async (req, res, next) => {
  try {
    const { id } = req.params;

    const idCheck = await Urls.findOne({ id: id });
    
    if (idCheck === null) {
      res.render("404",{err :"id doesnt exist" , id:""});
    } else {
      cache.set(`${id}`, `${idCheck.url}`);
      res.redirect(`${idCheck.url}`);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { dbCheck };
