const AuthorModel123= require("../models/author123")


const createAuthor123= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel123.create(author)
    res.send({data: authorCreated})
}

const getAuthor123= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel123.create(author)
    res.send({data: authorCreated})
}




module.exports.createAuthor123= createAuthor123
module.exports.getAuthor123= getAuthor123