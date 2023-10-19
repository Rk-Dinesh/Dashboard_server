const express = require("express")
const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true
    },
    comment:{
        type: String,
        required : true
    },
    painrange:{
        type: String,
        required : true
    },
    img:{
        type: String,
        default:""
    },


});

const Doctor = mongoose.model('imageAns', imageSchema);

module.exports = Doctor;

