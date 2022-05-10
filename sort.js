// let numbers = [1,5,3,6,8,7]

// numbers.sort()
// console.log(numbers);

// NOTE :- here we are testing upon single digit numbers 
// default is ascending 
// it changes the original array 
// output :- [ 1, 3, 5, 6, 7, 8 ]

// ===================================== sort array of strings ======================================

// let participants = ["ramu", "monu", "sonu", "bhuru", "mangu"]

// participants.sort ()
// console.log(participants);

// default is alphabetically 
// it changes the original array 
// output :- [ 'bhuru', 'mangu', 'monu', 'ramu', 'sonu' ]

// ============================ sorting array of numbers (two digits) ====================

// let numbers = [23,45,67,98,110]

// numbers.sort()
// console.log(numbers);

// output :- [ 110, 23, 45, 67, 98 ]
// you see how js is working here ?
// it is 11, 12, 13 then 2, 21, 22, 23 then 3, 32, 35

// ======solved below ==========

let numbers = [23,72,67,150,110]

numbers.sort(compareNumbers)

function compareNumbers (a,b) {
    //1. < 0  ....a comes first 
    //2. 0  .....nothing will be changed
    //3. >0 .....b comes first 
// console.log(a); 
// console.log(b);
    return a-b;
}

console.log(numbers);

// =============== sort on array of object ===========================

// let products = [{
//     name : "laptop",
//     price : 100,
//     count : 2
// },
// {
//     name : "desktop",
//     price : 500,
//     count : 5
// },
// {
//     name : "phone",
//     price : 1000,
//     count : 3
// }
// ]

// products.sort((a,b) => a.price - b.price)

// console.log(products);
