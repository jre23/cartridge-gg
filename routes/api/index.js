const router = require("express").Router();
const giphyRoute = require("./giphy");

// giphy route
router.use("/giphy", giphyRoute);

module.exports = router;
