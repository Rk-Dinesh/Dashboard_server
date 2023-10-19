const express = require("express")
const mongoose = require('mongoose');


const sfSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true,
        
    },
    sf1:{
        type: String,
        required : true
    },
    sf2:{
        type: String,
        required : true
    },
    sf3:{
        type: String,
        required : true
    },
    sf4:{
        type: String,
        required : true
    },
    sf5:{
        type: String,
        required : true,
        
    },
    sf6:{
        type: String,
        required : true
    },
    sf7:{
        type: String,
        required : true
    },
    sf8:{
        type: String,
        required : true
    },
    sf9:{
        type: String,
        required : true
    },
    sf10:{
        type: String,
        required : true
    },
    sf11:{
        type: String,
        required : true
    },
    sf12:{
        type: String,
        required : true
    },
    
});

const SF_36= mongoose.model('SF',sfSchema);

module.exports = SF_36;

