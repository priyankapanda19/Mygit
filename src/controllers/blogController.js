const blogModel = require("../models/blogModel");
const authorModel = require("../models/authorModel");
//const mongoose = require('mongoose')
const moment=require('moment')

//--------------------//---------------------------
const validate = function (value) {

    if (typeof value == "number" || typeof value == "undefined" || typeof value.length == null) {
        return false
    }
    if (typeof value == "string" && value.trim().length == 0) { return false }




    return true
}
// --------------------------------------- POST /blogs --------------------------------------

const createBlog = async function (req, res) {
    try {
        let blog = req.body
        let author=req.body.authorId
        let { title, authorId, category, subcategory, body, tags } = blog

        if (!(title && authorId && category && body && tags)) return res.status(400).send({ status: false, msg: "Please fill the Mandatory Fields." });
        if (!validate(title))
            return res.status(400).send({ status: false, message: "Please enter Blog Title." });

        if (!validate(category))
            return res.status(400).send({ status: false, message: "Please enter Blog category." });

        if (!validate(body))
            return res.status(400).send({ status: false, message: "Please enter  Blog body." });

        if (!validate(tags))
            return res.status(400).send({ status: false, message: "Please enter Blog Tags." });

        if (!validate(subcategory))
            return res.status(400).send({ status: false, message: "Please enter subcategory." });


        let checkauthor = await authorModel.findById({ _id: author})
        if (!checkauthor) {
            res.status(400).send({ status: false, msg: "authorId is not valid" })
        }

        let Blog = await blogModel.create(blog)
        res.status(201).send({ status: true, msg: Blog })

    } catch (error) {
        res.status(500).send({ status: false, Error: error.message })
    }
}

// --------------------------------------- GET /blogs --------------------------------------

const getBlog = async function (req, res) {

    try {

        const data = req.query

        if (Object.keys(data).length == 0) {
            const blog = await blogModel.find({ isPublished: true, isDeleted: false })
            if (blog.length == 0) {
                return res.status(404).send({ status: false, msg: "Blog doesn't Exists, field is required." })
            }
            res.status(200).send({ status: true, data: blog })

        }


        if (Object.keys(data).length != 0) {
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
}// --------------------------------------- PUT /blogs/:blogId --------------------------------------


const updateBlog = async function (req, res) {
    try {
        let blogData = req.body
        const{ title,body,tags,subcategory }=blogData
        let date=moment().format()
        let blogId = req.params.blogId
        

        let blog = await blogModel.findById(blogId)
          if (!blog) {return res.status(404).send({ status: false, msg: "Please input valid blog Id" }) }



        if(!blog.isDeleted){
            if(blog.isPublished==true){
                let specificBlog=await blogModel.findByIdAndUpdate(blogId,{$set:{title:title,body:body},$push:{"subcategory":subcategory,"tags":tags}})
                res.status(201).send({data:{specificBlog}})
            }else if(!blog.isPublished==false){
                let specificBlog2=await blogModel.findByIdAndUpdate(blogId,{$set:{title:title,body:body,isPublished:true,publishedAt:date}})
                res.status(201).send({data:{specificBlog2}})
            }
        }
        else{
 return res.status(400).send({ status: false, msg: "Blog is already deleted" })
        }
    }
        catch(error){
        
        return res.status(500).send({ status: false, Error: error.message })
    }

}

// --------------------------------------- DELETE /blogs/:blogId --------------------------------------


const deleteBlog = async function (req, res) {
    try {
        let blogId = req.params.blogId


        let deletedBlog = await blogModel.findOneAndUpdate({ _id: blogId, isDeleted: false }, { isDeleted: true, deletedAt: new Date() }, { new: true })
        if (!deletedBlog) { return res.status(404).send({ status: false, message: "No such blogId exists" }) }


        res.status(200).send({ status: true, msg: "Data is successfully deleted" })
    } catch (error) {
        res.status(500).send({ status: false, Error: error.message })
    }
}

// --------------------------------------- DELETE /blogs?QueryParam -----------------------------------

const deleteQueryParams = async function (req, res) {
    try {
        const data = req.query
        let { authorId, category, subcategory, tags, isPublished } = data    

        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, msg: "No such Blog Exist, Please provide filters" })
        }

        const filterQuery = { isDeleted: false } 

        if (authorId) {          
            filterQuery["authorId"] = authorId
        }
        if (category) {
            filterQuery["category"] = category
        }
        if (subcategory) {
            filterQuery["subcategory"] = subcategory
        }
        if (tags) {
            filterQuery["tags"] = tags
        }
        if (isPublished) {
            filterQuery["isPublished"] = isPublished
        }
    
        const deletedBlogs1 = await blogModel.updateMany({ ...filterQuery }, { $set: { isDeleted: true, deletedAt: new Date() } })
        

        if (deletedBlogs1.modifiedCount == 0 || deletedBlogs1.matchedCount == 0) { return res.status(404).send({ status: false, msg: "Blog is not exist." }) }

        return res.status(200).send({ status: true, msg: "Blogs Deleted Successfully" })

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





