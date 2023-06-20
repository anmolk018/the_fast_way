const express = require("express");
const router = express.Router();
const { coingeckoApiToDb } = require("../controllers/controller");

// routes
router.get("/coinecko", coingeckoApiToDb);

module.exports = router;
