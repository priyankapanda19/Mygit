const express = require('express')
const router = express.Router()
let allController = require("../controllers/allController")

router.get('/getName', allController.getMe)


module.exports = router

