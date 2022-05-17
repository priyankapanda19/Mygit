// // ye string => array of number me directly convert kar dega 

// let str = "123456"
// // what we want is [1,2,3,4,5,6]

// let res = Array.from(str, Number)
// // let res = Array.from(str, x => Number(x)) // ye bhi chalega 
// // let res = Array.from(str).map(Number) // ye bhi chalega
// console.log(res);

// =====================another use case ==========================
// use case to remove duplicate numbers from array 

let numbers = [1,2,3,4,5,6,2,3,4,5,7,8,5,7,8]

// let res = new Set(numbers) // ye set kardega but array nahi dega 
let res = Array.from(new Set(numbers)) // now we will get the array 

console.log(res);

// the same will work on strings also it will remove all duplicate strings 