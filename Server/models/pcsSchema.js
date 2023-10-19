const express = require("express")
const mongoose = require('mongoose');


const PCSSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true,
        
    },
    S1:{
        type: Number,
        required : true
    },
    S2:{
        type: Number,
        required : true
    },
    S3:{
        type: Number,
        required : true
    },
    S4:{
        type: Number,
        required : true
    },
    S5:{
        type: Number,
        required : true
    },
    S6:{
        type: Number,
        required : true
    },
    S7:{
        type: Number,
        required : true
    },
    S8:{
        type: Number,
        required : true
    },
    S9:{
        type: Number,
        required : true
    },
    S10:{
        type: Number,
        required : true
    },
    S11:{
        type: Number,
        required : true
    },
    S12:{
        type: Number,
        required : true
    },
    S13:{
        type: Number,
        required : true
    },

});

const PCS = mongoose.model('PCS', PCSSchema);

module.exports = PCS;

