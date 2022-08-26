const mongoose = require('mongoose');

const users = new mongoose.Schema( {
    name: String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
        isFreeAppUser:{
            type: Boolean,
            
        }
    

    
}, 
{ timestamps: true });


module.exports = mongoose.model('Userdb', users) 



