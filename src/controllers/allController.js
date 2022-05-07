let myFunction = require("../validators/allValidator")


let getMe = async function (req, res) {
    let okName = req.query.name
    let finalName = myFunction.myName(okName)
    return res.status(200).send({status : true , message : finalName})
}


module.exports.getMe = getMe