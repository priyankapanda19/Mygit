
const bookModel123= require("../models/book123")
const authorModel123= require("../models/author123")
const publisherModel123= require("../models/publisher123")



 const createBook123= async function (req, res) {
     
    let book = req.body
    
    let authorId = await authorModel123.find().select({_id: 1})
    authorIdArr = authorId.map((obj) => {return obj._id.toString()})

    let publishedId = await publisherModel123.find().select({_id: 1})
    publishedIdArr = publishedId.map((obj) => {return obj._id.toString()})

    if(book.author!= undefined){
        if(authorIdArr.includes(book.author)){
            if(book.publisher != undefined){
                if(publishedIdArr.includes(book.publisher)){
                    let bookCreated = await bookModel123.create(book)
                    return res.send( {data: bookCreated})
                }
                return res.send("Publisher_id not in Database")
            }
            return res.send("Publisher_id is not valid")
        }
        return res.send("Author_id not found in Database")
    }
    return res.send("Author_id is not valid")

    
}
/////////////get all book along with authors////////

const fetchBook= async function(req,res){
    
        let authors = await bookModel123.find().populate([{path:'author'},{path:'publisher'}])
        res.send({data: authors})
    }

//////////problem 5(a)//////////
const booksPut = async function(req, res){
    let pub_id1 = '62ffb28313438236b6dc26ad'
   // let pub_id2 = '62ffb2b813438236b6dc26b1'

    let book1 = await bookModel123.findByIdAndUpdate({pub_id1}, {$set: isHardCover == true}, {$new : true})
    res.send({data: book1})
}
/////////problem 5(b)//////////
const authorRating = async function(req, res){
    let data = await authorModel123.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    idArry = data.map((obj) => { return obj._id.toString() })
    let up = await bookModel123.updateMany({ author_id: idArry  }, { $inc: { price: +10 } })
    res.send({ data: up })
}





module.exports.fetchBook=fetchBook
module.exports.booksPut=booksPut
module.exports.authorRating=authorRating
  module.exports.createBook123= createBook123