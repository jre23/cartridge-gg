const router = require("express").Router();
const giphyRoute = require("./giphy");

// giphy route
router.usee("/giphy", giphyRoute);

module.exports = router;
