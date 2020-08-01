const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

const cacheCheck = (req, res, next) => {
  const { id } = req.params;

  if (cache.has(id)) {
    res.redirect(`${cache.get(id)}`);
  } else {
    next();
  }
};

module.exports = { cacheCheck };
