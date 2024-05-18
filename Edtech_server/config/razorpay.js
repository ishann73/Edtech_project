// razorpay.js
const Razorpay = require('razorpay');

// Your Razorpay API key and secret
const key_id = 'rzp_test_qv0O4IufUzaLbB';
const key_secret = 'WckjpE0VZs7xBjnCuhjfN7SG';

// Create and export a new instance of the Razorpay class
const razorpay = new Razorpay({
  key_id: key_id,
  key_secret: key_secret,
});

module.exports = razorpay;
