const { getTrackingById } = require("../controlers/trackProduct.controlers");
const router = require("express").Router();
// route for get all addresses by userID
router.get("/get-tracking-details/:trackingId", getTrackingById);

module.exports = router;
