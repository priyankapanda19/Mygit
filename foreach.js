// ============================for each in arrays ======================================================================

let numbers = [1,2,3,4,5]




// here a is the value at that index for ex numbers[0] = 1 so a is 1(value)
// b is the index number itself 
// c prints the whole array

// numbers.forEach(number)

// function number (a,b,c) {
//     console.log("numbers[" +b + '] = ' + a );
// }

// method - 2 using loop 
// for (i=0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let sum = 0;
// numbers.forEach( a => {
//     sum +=  a
// })

// console.log(sum);

// let sum = 0;
// numbers.forEach(number)

// function number (a,b,c) {
//     sum = sum + a
// }
// console.log(sum);

// =================================== awesome use case below =========================================

// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'a', 'd', 'e', 'd', 'a', 'c' ] 

// let count = {};
// letters.forEach(item => {
//     if (count[item]) {
//         count[item] = count[item] + 1;
//     } else {
//         count[item] = 1
//     }
// })

// console.log(count);

// my explaination :- what do you think item is returning ? = a, b, c, d, e, f, a, b, c, a, d, e, d, a, c
// what do you think count[item] is doing and do consider that count is an empty object as we declared above? = 
/* count [item] = count [a] and similarly 
count [b]
count [c]
and so on........... so we know that there is no value in them right and generally this is how we access the value of an object // console.log(person['age'])  OR // console.log(person.age) only difference is here we are passing the parameter "item" which has all the properties // yes a, b, c, d is a property/key which has no value

so in the line 44 we are checking if there is any property or not in the object, if there is then proceed to the statement else proceed to the (line 46 and 47)else statement and using "=" assignment operator we are assigning it value "1"

now "a" has been assigned value = 1 and now next time when loop comes back to 'a' in the array then this time line number 44 will execute because condition satisfies this time as there is a property in the object as "a"
so condition satisfies and statement will execute which simply adds +1 to its value (whatever the value is it will add +1)

*/

// So in the video in the if else, it first checks to see if the count empty object has the letter ‘a’ as a property,  so count[‘a’] (first-loop) is undefined and it goes to the else condition then gives it that property with a value of 1.  So we now have count{a:1} 
// The second time it runs across the letter ‘a’ in the loop, it now exists with the value 1 so it tells it to 


// ==================================object testing ==============================================
// let person = {
//     name : "john",
//     age : 33,
//     location : "jaipur"
// }

// // console.log(person['age'])
// // console.log(person.age)
// person['address'] = "raiwada"
// console.log(person);

// chaahe function (not inside a variable ) ho ya chaahe varible ho dono ko hi phase-1 ke execution me memory alot ho jata hai 

// function getName () {
//     console.log("hello sir");
// }

// undefined
// let abc 
// console.log(abc);

