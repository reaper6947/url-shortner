const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

const cacheCheck = (req, res, next) => {
  const { id } = req.params;

  if (id.length < 8) {
    res.render("404", { err: "url id can not be less than 8" });
  } else if (cache.has(id) && id >= 8) {
    res.redirect(`${cache.get(id)}`);
  } else {
    next();
  }
};

module.exports = { cacheCheck };
