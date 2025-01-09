const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    publishedAt : {
        type : Date,
        default: ()=>{return new Date()}
    },
    content : {
        type :  String
    }
})

const artModel = mongoose.model('article', articleSchema)
module.exports = artModel