const express = require("express");
const router = express.Router();
const { urlValidate } = require("../middleware/urlValidate");
const { dbSave } = require("../middleware/dbSave");
const { cacheSave } = require("../middleware/cacheSave");



router.post("/", urlValidate, dbSave, cacheSave, (req, res) => {});

module.exports = router;
