const mongoose = require('mongoose');

const authorSchema123 = new mongoose.Schema( {
    authorName: String,
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model('Author123', authorSchema123)