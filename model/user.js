const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        default : "NOT_SPECIFIED"
    },
    age : {
        type : Number,
    }
})

const userModel = mongoose.model('article', articleSchema)
module.exports = userModel