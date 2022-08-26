const orderModule = require("../models/orderModule")



const middleWare1= function(req,res,next){
    const  user=req.headers.isfreeappuser
     
     
     if(!user){
       return  res.send({msg:"The request is missing a mandatory header"})
     }
 
         req.body["isFreeAppUser"]=user
         next()
     
    } 

 module.exports.middleWare1=middleWare1

 
   