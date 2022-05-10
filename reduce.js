// ============================= sum of array using reduce ===============================
// let numbers = [1,2,3,4,5,6]


// let total = numbers.reduce(sum);

// function sum (accumulator, value) {
//     return accumulator + value
// }

// console.log(total);

// ============================= max number in array ===========================
// let numbers = [1,2,3,4,5,6]

// let max = numbers.reduce(callback,0);

// function callback (accumulator, value) {

// if (accumulator> value){
//     return accumulator
// } else {
//     return value
// }
// }
// console.log(max);

// =============================== another use case ==================

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

// totalValueStore = products.reduce ((acc, item) => acc + item.price*item.count, 0)

// console.log(totalValueStore);