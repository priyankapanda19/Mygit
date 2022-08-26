
const userModel= require("../models/userModule")

const createUser1=async function(req,res){
    let data=req.body
    
     
    let saveData=await userModel.create(data)
    res.send({msg:saveData})
    
    
    }
   
    
   



    module.exports.createUser1= createUser1

