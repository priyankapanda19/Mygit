const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const memeController= require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


/////for second assignment london weather//////

router.get("/cowin/getWeather", WeatherController.getWeather)
router.get("/cowin/getCity", WeatherController.getCity)


/////first assignment cowin appp///////////

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getDistrictsId", CowinController.getDistrictsId)


//////third api for memes controler/////////

router.get("/memes/getMemes", memeController.getMemes)
router.post("/memes/memesHandler", memeController.memesHandler)




module.exports = router;