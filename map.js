// let numbers = [1,2,3,4,5]

// numbers.map(double)

// function double (x) {
//     return x*2    
// }

// console.log(numbers);

// it won't work as .map always creates a new array 

// so we store it in new variable and then it will work 

// let numbers = [1,2,3,4,5]

// let newNumbers = numbers.map(double)

// function double (x) {
//     console.log(x);
//   return x*2    
// }

// console.log(newNumbers);


// ===================as per arrow function =======================

// let numbers = [1,2,3,4,5]

// let newNumbers = numbers.map(value => value*2)

// console.log(newNumbers);

// =====================================================new use case =========================

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

// let productsValue = products.map(item => ({
//     name : item.name,
//     totalValue : item.price*item.count
// }))
// console.log(productsValue);

// ==================================another use case ===========================================
// let strings = ['1', '2', '3', '4', '5']
// let numbers = strings.map(item => Number(item)) // let numbers = strings.map(Number)
// console.log(numbers);


