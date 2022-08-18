const BookModel= require("../models/book1Model")

 const create1Book= async function (req, res) {
     let data= req.body
     let savedData= await BookModel.create(data)
     res.send({msg: savedData})
 }
// ///////booklist by authorname and bookname///////////
  const getBooksData1= async function (req, res) {
      let allBook= await BookModel.find().select( { bookName: 1, authorName: 1,_id:0})
      res.send({msg: allBook})
  }

// ///////alll book list////////////////
 const bookList=async function(req, res) {
     let data = req.body
     let allBook = await BookModel.find(data)
    res.send({ msg: allBook })
 }

// //////book by year///////////
  const bookYear= async function (req, res) {
     let data= req.params
     let savedData= await BookModel.find(data)
     res.send({msg: savedData})}

//     /////////////price return by indian rupee///////////
     const bookPrice= async function (req, res) {
         let allBook= await BookModel.find({"price.indianRupee": {$in:[100,200,500]}})
         res.send({msg: allBook})}

// ///////////get random books///////////
 const randomBooks= async function (req, res) {
    //let data= req.body
     let allBook= await BookModel.find({$or:[{stockAvailable:300},{totalPages:{$gt:500}}]})
     res.send({msg: allBook})}

  ////////get particular book////

  const inputBooks= async function (req, res) {
    let data= req.body
    
    
  let savedData= await BookModel.find(data)
    res.send({msg: savedData})}

    

 
    module.exports.inputBooks= inputBooks

module.exports.create1Book= create1Book
module.exports.getBooksData1= getBooksData1
module.exports.bookYear= bookYear
module.exports.bookList= bookList
module.exports.bookPrice= bookPrice
module.exports.randomBooks= randomBooks
