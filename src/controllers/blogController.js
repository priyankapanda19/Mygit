const blogModel = require("../models/blogModel");
const authorModel = require("../models/authorModel");
const mongoose = require('mongoose')



const isValidObjectId = function (value) {            //for validating object id
    return mongoose.Types.ObjectId.isValid(value) //returns boolean values
}


// --------------------------------------- POST /blogs --------------------------------------

const createBlog = async function (req, res) {
    try {
        let blog = req.body
 let Blog =await blogModel.create(blog)
        let author=req.body.authorId
        let checkauthor = await authorModel.findById({_id:author})
        if(!checkauthor){
            res.status(400).send({status:false,msg:"authorId is not valid"})
        }
        res.status(201).send({status:true,msg:Blog})    

    } catch (error) {
        res.status(500).send({ status: false, Error: error.message })
    }
}

// --------------------------------------- GET /blogs --------------------------------------

const getBlog= async function (req, res) {

    try {

        const data = req.query

        //Validating data is empty or not
        if (Object.keys(data).length == 0) {
            const blog = await blogModel.find({ isPublished: true, isDeleted: false })
            if (blog.length == 0) {
                return res.status(404).send({ status: false, msg: "Blog doesn't Exists, field is required." })
            }
            res.status(200).send({ status: true, data: blog })

        }

        //get data by query param

        if (Object.keys(data).length != 0) {
            // data.isPublished = true
            data.isDeleted = false
            console.log(data)
            let getBlog = await blogModel.find(data).populate("authorId")
            if (getBlog.length == 0) {
                return res.status(404).send({ status: false, msg: "No such blog exist, Please provide correct data." })
            }
            res.status(200).send({ status: true, data: getBlog })
        }


    } catch (error) {
        res.status(500).send({ status: false, Error: error.message })
    }
}

// --------------------------------------- PUT /blogs/:blogId --------------------------------------


const updateBlog=async function (req,res){
    try{
    let blogId =req.params.blogId
    let blog=await blogModel.findById(blogId)
    if(!blog){
        return res.status(404).send({status:false,msg:"No such blog exists"})
    }

    let blogdata=req.body;
    let Updateblog =await blogModel.findOneAndUpdate({ _id:blogId },blogdata)
    res.status(201).send({status:true,data:Updateblog})
}catch(err){
    res.status(400).send({error:err.message})
}
}

// --------------------------------------- DELETE /blogs/:blogId --------------------------------------


const deleteBlog = async function (req, res) {
    try {
        let blogId = req.params.blogId
        
        let blog = await blogModel.findById(blogId)
        if (blog.isDeleted === true) {
            return res.status(404).send({ status: false, message: "No such blogId exists" })
        }
        //.send({status: true, msg: deletedBlog})
        let deletedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, { isDeleted: true, deletedAt: new Date() })
        res.status(200).send({ status: true, msg: "Data is successfully deleted" })
    } catch (error) {
        res.status(500).send({ status: false, Error: error.message })
    }
}

// --------------------------------------- DELETE /blogs?QueryParam -----------------------------------

const deleteQueryParams = async function (req, res) {
    try {
        const data = req.query
        const filterQuery = { isDeleted: false, deletedAt: null } // base condtion
       //console.log(data)

        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, msg: "No such Blog Exist, Please provide filters" })
        }

        let { authorId, category, subcategory, tags, isPublished } = data    // destructuring data
        if (isValid(authorId) && isValidObjectId(authorId)) {              // use for validating, base => new keys and values are assigned
            filterQuery["authorId"] = authorId
        }
        if (isValid(category)) {
            filterQuery["category"] = category
        }
        if (isValid(subcategory)) {
            filterQuery["subcategory"] = subcategory
        }
        if (isValid(tags)) {
            filterQuery["tags"] = tags
        }
        if (isValid(isPublished)) {
            filterQuery["isPublished"] = isPublished
        }

        //console.log(filterQuery)

        const deletedBlogs = await blogModel.find(filterQuery)          
        if (deletedBlogs.length === 0) {
            return res.status(404).send({ status: false, error: "Blog is empty" })
        }
        const blogAuth = deletedBlogs.filter((blog) => {                         // authorisation using filter
            if (blog.authorId == req.loggedInAuthorId)
                return blog._id
                 else 
               return res.status(404).send({status: false, msg: "User is not authorised to do changes"})
        })


        const deletedBlogs1 = await blogModel.updateMany({ _id: { $in: deletedBlogs } }, { $set: { isDeleted: true, deletedAt: new Date() } })

       // console.log(deletedBlogs1)


        return res.status(200).send({ status: true, msg: "Blogs Deleted Successfully"})

    

        } catch (err) {
            res.status(500).send({ status: false, msg: err.message });
        }
    }


   

//-------------------------------- exporting Modules --------------------------------------------- 

module.exports.createBlog = createBlog;
module.exports.getBlog = getBlog
module.exports.updateBlog = updateBlog
module.exports.deleteBlog = deleteBlog
module.exports.deleteQueryParams = deleteQueryParams

