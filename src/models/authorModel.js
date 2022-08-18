const mongoose = require('mongoose');



const authors = new mongoose.Schema( {
    author_name: String,
    author_id: Number,
    
    age: Number,
    adress:String,
    
}, 
{ timestamps: true });


module.exports = mongoose.model('Author1', authors)//authors1

