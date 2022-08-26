const UserModel= require("../models/productModule")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}



module.exports.createProduct=createProduct
