const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

const cacheSave = (req, res, next) => {
  cache.set(`${req.id}`, `${req.body.url}`);

  res.redirect("/");

  next();
};

module.exports = { cacheSave };
