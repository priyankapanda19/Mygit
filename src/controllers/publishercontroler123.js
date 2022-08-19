
const publisherModel123= require("../models/publisher123")


const getPublisher123= async function (req, res) {
     let publisher = req.body
     let publisherCreated = await publisherModel123.create(publisher)
    res.send({data: publisherCreated})}

const createPublisher123= async function (req, res) {
    let publisher = req.body

    let publisherCreated = await publisherModel123.create(publisher)
    res.send({data: publisherCreated})}





    module.exports.createPublisher123= createPublisher123
    module.exports.getPublisher123= getPublisher123