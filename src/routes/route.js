const express = require('express');
const router = express.Router();

const authorController123= require("../controllers/authorController123")
const bookController123= require("../controllers/bookController123")
const publisherController123= require("../controllers/publisherControler123")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor123", authorController123.createAuthor123  )

//router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getAuthor123", authorController123.getAuthor123)

 router.post("/createBook123", bookController123.createBook123  )
 router.post("/createPublisher123", publisherController123.createPublisher123  )

 router.get("/fetchBook", bookController123.fetchBook)
 router.put("/booksPut", bookController123.booksPut)
 router.put("/authorRating", bookController123.authorRating)


// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;