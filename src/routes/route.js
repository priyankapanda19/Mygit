const express = require('express');
// const abc = require('../introduction/intro');
// const { call1 } = require('../logger/logger');
// const { call4 } = require('../util/helper');
// const { call2 } = require('../validator/formatter');
 const router = express.Router();
 const movie=['Don','Devdas','Mela','Sanam Teri Kasam','Dangal','zid']
router.get('/movie', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    // call1.welCome()
    // call2.greeting()
    // call3.date()
    // call4.nameOfMonth()
    // res.send('My second ever api!')

    
    res.send(movie)
});

router.get('/movie/:indexNumber', function (req, res) {

   let i=req.params.indexNumber
   let j=i-1
   if(i<=movie.length){
    res.send(movie[j])
   } else{res.send("Invalid Index")}
    
});

router.get('/films', function (req, res) {
   const films=[{
     id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
}]
    res.send(films)

   })

   router.get('/films/:filmId', function (req, res) {
    const films=[{
      id: 1,
     name: "The Shining"
    }, {
     id: 2,
     name: "Incendies"
    }, {
     id: 3,
     name: "Rang de Basanti"
    }, {
     id: 4,
     name: "Finding Nemo"
 }]

 let filmId=req.params.filmId
 for(let i=0;i<films.length;i++){

let films=films[i]
if(films.id==films){
    return res.sendStatus(films)
}

}
    res.send("invalid") 
 
    })
   





router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason