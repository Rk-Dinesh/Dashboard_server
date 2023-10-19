const express = require("express")
const mongoose = require('mongoose');


const DoctorSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },


});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;

