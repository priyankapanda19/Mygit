const express = require('express');
const router = express.Router();


const controllerProduct= require("../controllers/productController.js")
const userCreate= require("../controllers/userControler.js")
const middleWare= require("../middleware/middleWare.js")
const orderCreate= require("../controllers/orderController.js")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createProduct", controllerProduct.createProduct)
router.post("/createUser1",middleWare.middleWare1, userCreate.createUser1)
router.post("/orderPurchase",middleWare.middleWare1 ,orderCreate.orderPurchase)


module.exports = router;