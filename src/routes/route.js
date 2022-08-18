const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController.js")
const BookModel= require("../models/bookModel.js")
const Book1Controller= require("../controllers/book1Controller.js")

const BookModel1= require("../models/modelBook.js")
const controllerBook= require("../controllers/bbkAuController.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/createBook", BookController.createBook )
router.get("/getBooksData", BookController.getBooksData  )

router.post("/create1Book", Book1Controller.create1Book )
router.get("/getBooksData1", Book1Controller.getBooksData1  )
router.get("/bookList", Book1Controller.bookList  )
router.post("/bookYear/:year", Book1Controller.bookYear )
router.get("/bookPrice", Book1Controller.bookPrice  )
router.get("/randomBooks", Book1Controller.randomBooks  )
router.post("/inputBooks", Book1Controller.inputBooks)

router.post("/bookCreate", controllerBook.bookCreate)
router.post("/authorCreate", controllerBook.authorCreate)
router.get("/entryBook", controllerBook.entryBook)
router.get("/findBook", controllerBook.findBook)
router.get("/bookrange", controllerBook.bookrange)




module.exports = router;