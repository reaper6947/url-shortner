const express = require("express");
const router = express.Router();
const {cacheCheck} = require("../middleware/cacheCheck");
const { dbCheck } = require("../middleware/dbCheck");
//router.get("/", (req, res) => { res.render("index")});
const {homePage} = require("../middleware/homePage")

router.route("/").get( homePage,cacheCheck, dbCheck, (req, res) => {});

module.exports = router;
