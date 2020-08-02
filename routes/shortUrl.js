const express = require("express");
const router = express.Router();
const { cacheCheck } = require("../middleware/cacheCheck");
const { dbCheck } = require("../middleware/dbCheck");
const { homePage } = require("../middleware/homePage");
const { urlValidate } = require("../middleware/urlValidate");
const { dbSave } = require("../middleware/dbSave");
const { cacheSave } = require("../middleware/cacheSave");

router.route("/").get(homePage, (req, res) => {});
router.route("/:id").get(cacheCheck, dbCheck, (req, res) => {});
router.route("/").post(urlValidate, dbSave, cacheSave, (req, res) => {});

module.exports = router;
