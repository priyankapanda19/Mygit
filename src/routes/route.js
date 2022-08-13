const express = require("express");
const myHelper = require("../util/helper");
const underscore = require("underscore");
const { result } = require("underscore");

const router = express.Router();

router.get("/test-me", function (req, res) {
  myHelper.printDate();
  myHelper.getCurrentMonth();
  myHelper.getCohortData();
  let firstElement = underscore.first(["Sabiha", "Akash", "Pritesh"]);
  console.log(
    "The first element received from underscope function is " + firstElement
  );
  res.send("My first ever api!");
});

router.get("/movies/:indexNumber", function (req, res) {
  const movies = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];
  console.log(req.params.indexNumber);
  let movieIndex = req.params.indexNumber;
  //check index value. less than 0 or greater than array (length - 1) are not valid
  if (movieIndex < 0 || movieIndex >= movies.length) {
    //if the index is invalid send an error message
    return res.send("The index value is not correct, Please check the it");
  }

  //if the index was valid send the movie at that index in response
  let requiredMovie = movies[movieIndex];
  res.send(requiredMovie);
});

router.get("/shoes", function (req, res) {
  let queryParams = req.query;
  let brand = queryParams.brand;
  res.send("dummy response");
});

// uses query params
router.get("/candidates", function (req, res) {
  console.log(
    "Query paramters for this request are " + JSON.stringify(req.query)
  );
  let gender = req.query.gender;
  let state = req.query.state;
  let district = req.query.district;
  console.log("State is " + state);
  console.log("Gender is " + gender);
  console.log("District is " + district);
  let candidates = ["Akash", "Suman"];
  res.send(candidates);
});

// use path param
router.get("/candidates/:canidatesName", function (req, res) {
  console.log("The request objects is " + JSON.stringify(req.params));
  console.log("Candidates name is " + req.params.canidatesName);
  res.send("Done");
});

router.get("/films", function (req, res) {
  const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];
  //send all the films
  res.send(films);
});

router.get("/films/:filmId", function (req, res) {
  const films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  let filmId = req.params.filmId;

  //iterate all the films
  //search for a film whose id matches with the id recevied in request
  for (let i = 0; i < films.length; i++) {
    let film = films[i];
    if (film.id == filmId) {
      //if there is a match return the response from here
      return res.send(film);
    }
  }

  //if there is no match give an error response
  res.send("The film id doesn't match any movie");
});

module.exports = router;
// adding this comment for no reason

//// 9-aug-assignment-prblm-1 /////////////

router.get("/sol1", function (req, res) {
  let arr = [1, 2, 3, 5, 6, 7];

  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    let length1 = arr.length;
  }
  let lastDigit = arr.pop();
  let consecutiveSum = (lastDigit * (lastDigit + 1)) / 2;
  let missingNumber = consecutiveSum - sum;

  res.send({ data: missingNumber });
});

//// problm 2//////////

router.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let length1 = arr.length;
  total = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    total += arr[i];
  }
  let fstNum = arr[0];
  let lstNum = arr.pop();
  let conSum = ((length1 + 1) * (fstNum + lstNum)) / 2;
  let missingNumber = conSum - total;
  res.send({ data: missingNumber });
});

/////////10-aug-assighment/////////

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  let playerName = req.body;
  //let newPlayerName = playerName.name;
  // let playerDob=req.body.dob

  //let playerGender=req.body.gender

  //  let playerCity=req.body.city

  //  let playerSports=req.body.sports
  // let newPlayers={name:playerName,dob:playerDob,gender:playerGender,city:playerCity,sports:playerSports}

  for (let i = 0; i < players.length; i++) {
   // let index = players[i];

    if (players[i].name === playerName.name) {
      return res.send("This is dublicate data,give another data plz");
    } 
} 
      players.push(playerName);
    

    res.send({ data: players, status: true });

});
//////////////////////voting age assighment///////////////////////////

let person = [
  {
    name: "priyanka",
    age: 15,
    votingStatus: false,
  },
  {
    name: "amrita",
    age: 10,
    votingStatus: false,
  },

  {
    name: "sumita",
    age: 35,
    votingStatus: false,
  },
  {
    name: "rakhi",
    age: 55,
    votingStatus: false,
  },
];

 router.post("/voter-2", function (req,res) {
 let voteingAge=req.body
 let newVotingAge=voteingAge.age

   let avalableVoters=[]
  //let flag=false
  for(i=0;i<person.length;i++){
  // let id=persons[i]
  if(newVotingAge<=person[i].age){
  //id.votingStatus=true
  (person[i].votingStatus=true ) 
     avalableVoters.push(person[i])
 }
}
 res.send(avalableVoters)
  
 
 });

module.exports = router;
////////////////second approach/////////////////////
// router.post('/voter-3', function (req, res) {
//   let votingAge=req.body.age
//   let eligibleVoters=[]
  
//       for (i=0;i<person.length;i++){
//       if (person[i].age>votingAge){
//       person[i].votingStatus= true
//       eligibleVoters.push(person[i])
//     }
//     else{"you r bby  nw"}
//  }
//   res.send({eligibleVoters})
// })