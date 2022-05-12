// let numbers = [1,2,3,4,5]

// numbers.splice(2,3)

// console.log(numbers);

// will print the remaining after what you have given inside the parantheses as index 
// so first number inside () is 2 and second number is 3
// now you can clearly see that 2 is the index 2 whose value is 3 and that is included here (index 2 included)
// and next number is 3 by which we are saying that from index 2 you count next 3 indexes 
// so first index is 2 then 3 then 4 so total it makes 3 indexes starting the count from index 2
// hope it is clear now that (2,3) what is doing what 
// and here you will get the remaining after what you have selected in ()
// output :- [ 1, 2 ] , as we have said (2,3) ki index 2 se leke next 3 ko hata do (including index 2) OR how many items you want to remove 


// if you want to see what is deleted 

// let numbers = [1,2,3,4,5]

// let deleted = numbers.splice(2,3)

// console.log(deleted);
// console.log(numbers);

// ================= if you want to remove some and add more to same array ============================

// let numbers = [1,2,3,4,5]

// let deleted = numbers.splice(2,3,6,8,9)

// console.log(deleted); // will see the deleted ones 
// console.log(numbers); // will see the added ones 

// ========================================

let numbers = [1,2,3,4,5]

let deleted = numbers.splice(2,0,6,8,9)

console.log(deleted); // will see the deleted ones 
console.log(numbers); // will see the added ones 