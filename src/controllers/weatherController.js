let axios = require("axios")


const getWeather = async function(req, res){
try{
    let place = req.query.q
    let appId = req.query.appid

    var options = { 
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appId}`
    }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({City: place, Temperature: data})

}
catch(error){
    res.status(500).send({error: error.msg})
}
}

const getCity = async function(req, res){
    try {
        let City =  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArray = []

        for(i=0; i<City.length; i++){
            let obj = {city: City[i] }
            let options = {
                method: "get",
                url : `http://api.openweathermap.org/data/2.5/weather?q=${City[i]}&appid=f05f68e88d73982e28b7360ebee59ee6`
            }
            let result = await axios(options)
            obj.temp= result.data.main.temp
            cityArray.push(obj)
        }
        let sortData = cityArray.sort(function(a,b) {return a.temp - b.temp})
        res.status(200).send({Data : sortData})

    }catch(error){
        res.status(500).send({error: error.message})
    }
}


module.exports.getWeather = getWeather
module.exports.getCity = getCity