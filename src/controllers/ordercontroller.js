
const orderModule=require("../models/orderModule")
const usersModule=require("../models/userModule")
const productModule=require("../models/productModule")


const orderPurchase= async function(req,res){
    let oD=req.body
    let prId=oD.productId
    let uId=oD.userId
    let user=await usersModule.findById(uId)
    let product=await productModule.findById(prId)

    if(!product || !user){
      return res.send({msg:"UserId and ProductId must be present"})
    }
    if(!req.isFreeAppUser && user.balance>=product.price){
      userbalance=user.balance-product.price
      await user.save()
      oD.amount=product.price
      oD.isFreeAppUser=false
    
    let orderCreated = await orderModule.create(oD)
       return res.send({data: orderCreated,status:true})
    }
       else if(!req.isFreeAppUser){
        return res.send({msg:"Order not created because of insufficient balance"}) 
       }
       else {
        
        let orderCreate=await orderModule.create(oD)
        res.send({status:true,data:orderCreate})
       }
    
    
    
     }
     module.exports.orderPurchase=orderPurchase
    


module.exports.orderPurchase=orderPurchase