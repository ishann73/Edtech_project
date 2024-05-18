// razorpay.js
const Razorpay = require('razorpay');

// Your Razorpay API key and secret
const key_id = process.env.key_id;
const key_secret = process.env.key_secret;

// Create and export a new instance of the Razorpay class
const razorpay = new Razorpay({
  key_id: key_id,
  key_secret: key_secret,
});

module.exports = razorpay;
