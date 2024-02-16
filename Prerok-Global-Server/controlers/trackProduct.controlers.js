const Address = require("../models/address.model");
const Payment = require("../models/payment.model");

// controlers to get tracking details by TrackingID
exports.getTrackingById = async (req, res) => {
  try {
    const bookingID = req.params.trackingId;

    const result = await Payment.findOne({ bookingID });
    // console.log(result);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
