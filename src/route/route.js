const express = require('express');
const router = express.Router();
const author = require("../controllers/authorController");
const blog = require("../controllers/blogController")
const Middleware = require("../middleware/auth");

//---------------------- CREATE and GET Author ------------------------------------------

router.post("/authors", author.createAuthor)
router.get("/authors", author.getAuthor)


//---------------------- CREATE and GET Blog using JWT ----------------------------------

router.post("/blogs", blog.createBlog)
router.get("/blogs",Middleware.authentication,Middleware.authorisation,blog.getBlog)

//---------------------- UPDATE Blog using JWT ------------------------------------------

router.put("/blogs/:blogId",Middleware.authentication,Middleware.authorisation,blog.updateBlog)


//---------------------- Delete blog using JWT ------------------------------------------

router.delete("/blogs/:blogId",Middleware.authentication,Middleware.authorisation,blog.deleteBlog)
router.delete("/blogs", Middleware.authentication,Middleware.authorisation,blog.deleteQueryParams)

module.exports = router;