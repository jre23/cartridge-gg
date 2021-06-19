const router = require("express").Router();
const apiController = require("../../contollers/apiController");

// matches with "/api/giphy/:query"
router.route("/:query").get(apiController.getGiphy);

module.exports = router;
