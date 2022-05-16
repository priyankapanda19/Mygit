// let numbers = [1, 2, 3, 4, 5]

// // so far what I have understood ki agar condition pure array par true to it will true else false 

// let check = numbers.every(item => item > 0)

// console.log(check);

// // output = true 

// let newNumbers = [-1, 1, 2, 3, 4, 5]

// so far what I have understood ki agar condition pure array par true to it will true else false 

// let newCheck = newNumbers.every(item => item > 0)

// console.log(newCheck);

// output - false 

// ==================== practical use ===============================

// question = we have array of object and we want to check if all of object have certain property or not 

// let person = [
//     {
//         name: "florin"
//     },
//     {
//         name: "Ivan"
//     },
//     {
//         name: "laura"
//     },
//     {
//         lname: "mike"
//     }
// ]

// let checkPerson = person.every(person => person.name !== undefined)

// console.log(checkPerson);
// will check agar koi "key" same nahi hai to false return karega 

// ================= new example =============================

let arrays = [[1,2,3],, [4,5,6], "[7,8,9]"]

let result = arrays.every(arrays => Array.isArray(arrays))

console.log(result);

// ye check karra hai ki sab array hai ya nahi agar hai to true nahi to false 