const router = require("express").Router();
const apiController = require("../../controllers/apiController");

// matches with "/api/giphy"
router.route("/").get(apiController.getGiphy);

module.exports = router;
