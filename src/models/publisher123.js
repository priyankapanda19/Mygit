const mongoose = require('mongoose');

const publisherSchema123 = new mongoose.Schema( {
    
    name: String,
    
    HeadQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('Publisher123', publisherSchema123)