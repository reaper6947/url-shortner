const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

const cacheSave = (req, res, next) => {
  const origin = req.headers.origin;
  cache.set(`${req.id}`, `${req.body.url}`);
  res.render("index", { err: "shortlink created", id: origin + "/" + req.id });
  next();
};

module.exports = { cacheSave };
