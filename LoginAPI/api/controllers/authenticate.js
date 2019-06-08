'use strict';
const util = require('util');
const messageService = require('../utils/sendMessage');

let OTP;

const authenticate = (req, res) => {
  const mobileNumber = JSON.parse(req.body).mobileNumber;
  OTP = Math.ceil(Math.random()*10000);
  const message = `This is a message from ShareJoy, Your OTP is ${OTP}. Please Ignore this message if you are not trying to log in to your account`;
  console.log(`Mobile Number: ${mobileNumber}, message: ${message}`);
  if(messageService.sendMessage(mobileNumber, message)) {
    res.status(200).json({ 'message': 'Send OTP successfully', 'OTP': OTP });
  } else {
    res.status(500).json({ 'message': 'Something went wrong please try again later'})
  }
};

module.exports = {
  authenticate: authenticate
};
