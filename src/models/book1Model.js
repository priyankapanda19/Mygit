const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required: true
    },
    price:{
        indianRupee:Number,
        europeanEuro:Number
    },
    
    year: {
       type: Number,
       default:2021
    },
    authorName:String,
    totalPages:Number,
    stockAvailable:{
        type:Number,
        required:true
    }
    
    
    
}, 
{ timestamps: true });

module.exports = mongoose.model('BookCollection', bookSchema) //books



