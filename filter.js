// =====================================filter array for even numbers only========================
// let numbers = [1,2,3,4,5]

// let newNumbers = numbers.filter(even)

// function even (item) {
//     return item % 2 === 0
// }

// console.log(newNumbers);

// ====================================as per arrow function =======================================

// let numbers = [1,2,3,4,5]

// let newNumbers = numbers.filter(item => item % 2 === 0)

// console.log(newNumbers);
// ==================================new use case = filter adults =========================

// let person = [{
//     name: "john",
//     age: 10
// }, 
// {
//     name: "harry",
//     age: 20
// },
// {
//     name: "larry",
//     age: 40
// }]

// let adults = person.filter(person => person.age>= 18)

// console.log(adults);

// ========================================new use case = non duplicated numbers ====================

// let numbers = [1,2,3,2,4,4,3,5,6,7,3,5,6,7]

// let nums = numbers.filter((value, index, arr) => {
//     return arr.indexOf(value) === index
// })

// console.log(nums);