const express = require('express')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName : {
        type : String, 
        required : true
    },
    lastName : {
        type : String ,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},
    {timestamps : true}
);

module.exports = User = mongoose.model('User' , userSchema)