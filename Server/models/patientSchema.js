const express = require("express")
const mongoose = require('mongoose');


const PatientSchema = new mongoose.Schema({
    fname:{
        type: String,
        required : true
    },
    lname:{
        type: String,
        required : true
    },
    dob:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: true    
    },
    phone:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    state:{
        type: String,
        required : true
    },
    postcode:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
})

const Patient = mongoose.model('patient', PatientSchema);

module.exports = Patient;