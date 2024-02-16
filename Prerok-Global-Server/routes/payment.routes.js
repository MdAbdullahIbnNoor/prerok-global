const { createPaymentIntent, savePaymentInfo, getAllPaymentHistory } = require('../controlers/payment.controlers');

const router = require('express').Router();

// route for generate client secret for payment  
router.post('/create-payment-intent', createPaymentIntent);


// route for save the payment information  
router.post('/payment-info', savePaymentInfo)


// route for get all payment history  
router.get('/all-payment-history', getAllPaymentHistory)



module.exports = router;