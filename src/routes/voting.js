/*you will be given an array of person (i.e an array of object )each person will have a {name:string,age:number,votingstatus:true/false(boolean)}
take input in query as voting age...and for all the people above that age change votingStatus  as true also return an array consisting 
of only the person that can vote*/

const { Router } = require("express");

//write a post API to the above take this as a sample for array of persons

let persons = [
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

Router.post("/voter-1", function () {});
