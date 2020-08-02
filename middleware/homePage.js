const homePage = (req, res) => {
  res.render("index", { err: "enter a link to shorten and click create",id:"" });
};
module.exports = { homePage };
