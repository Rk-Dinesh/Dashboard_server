const express = require("express")
const mongoose = require('mongoose');


const moxfqSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true,
        
    },
    m1:{
        type: String,
        required : true
    },
    m2:{
        type: String,
        required : true
    },
    m3:{
        type: String,
        required : true
    },
    m4:{
        type: String,
        required : true
    },
    m5:{
        type: String,
        required : true,
        
    },
    m6:{
        type: String,
        required : true
    },
    m7:{
        type: String,
        required : true
    },
    m8:{
        type: String,
        required : true
    },
    m9:{
        type: String,
        required : true
    },
    m10:{
        type: String,
        required : true
    },
    m11:{
        type: String,
        required : true
    },
    m12:{
        type: String,
        required : true
    },
    m13:{
        type: String,
        required : true
    },
    m14:{
        type: String,
        required : true
    },
    m15:{
        type: String,
        required : true
    },
    m16:{
        type: String,
        required : true
    }

});

const MOXFQ= mongoose.model('MOXFQ', moxfqSchema);

module.exports = MOXFQ;

