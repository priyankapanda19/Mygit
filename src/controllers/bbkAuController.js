const BookModel= require("../models/modelBook")
const AuthorModel= require("../models/authorModel")


////////creating book db and nt accpting without author_id n dublicate value//////////
const bookCreate= async function (req, res) {
    let data= req.body
    let author_id=data.author_id
    if(!author_id){
        return res.send({status:false,msg:"Author id is dublicate"})
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

////////creating author db and nt accpting without author_id n dublicate value//////////


const authorCreate= async function (req, res) {
    let data= req.body
    let author_id=data.author_id
    if(!author_id){
        return res.send({status:false,msg:"Author id is dublicate"})
    }
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}


////////updating status///////

const findBook=async function(req,res){
    let bookPrice=await BookModel.findOneAndUpdate({name:"Two State"},{$set:{price:100}},{new:true})
    let updateprice=await BookModel.findOne({name:"Two State"}).select({price:1, _id:0})
    let authorupdate=await AuthorModel.findOne({author_id:{$eq:bookPrice.author_id}}).select({author_name:1,_id:0})
    res.send([authorupdate,updateprice])
}


///////checking given price inbtwn ///////////

const bookrange=async function(req,res){

    let range=await BookModel.find({price:{$gte:50,$lte:100}})
    let a=range.map(x=>x.author_id)
    let newrange=await AuthorModel.find({author_id:a}).select({author_name:1,_id:0})
    res.send(newrange)
}

/////////find chetan bhagat id dn compare with bookdb///////////////

const entryBook = async function(req, res) {
    const findAuthor = await AuthorModel.findOne({author_name: "Chetan Bhagat"}).select({author_id:1,_id:0}) 
   // console.log(findAuthor)
    const findBook= await BookModel.find({author_id:{$eq: findAuthor.author_id}}).select({name:1,_id:0})
    res.send( {msg:findBook})
}




module.exports.bookCreate= bookCreate
module.exports.authorCreate= authorCreate
module.exports.entryBook= entryBook
module.exports.findBook= findBook
module.exports.bookrange= bookrange