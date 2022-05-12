// const numbers = [1,2,3,4,5]

// let newNumbers= numbers.slice(1,4)

// console.log(numbers);
// console.log(newNumbers);


/* 
index 0 = 1
index 1 = 2
index 2 = 3
index 3 = 4
index 4 = 5
*/

// here in slice you can clearly see we are writing slice(1,4) 
// so here 1 is index 1 whose value is 2
// and 4 is index 4 whose value is 5
// NOTE : index 4 is not included here 
// so it will slice the array from index 1 to index 4 (where index 4 is not included whose value is 5)
// original array is not modified or changed it remains as it is 
// output :- [2,3,4]

// ===================================== new way of using ===================================

// const numbers = [1,2,3,4,5]

// let newNumbers= numbers.slice(-3)

// console.log(newNumbers);

// so here you can clearly see that when you write numbers.slice(-1) it prints only 5
// so here you can clearly see that when you write numbers.slice(-2) it prints only 4,5
// so here you can clearly see that when you write numbers.slice(-3) it prints only 3,4,5
// so (-2) is just like I want to have only last two numbers and it will have that or whatever number you want to have

// =============================== another new way ======================================

// let numbers = [1,2,3,4,5]

// let newNumbers= numbers.slice(1)

// console.log(newNumbers);

// here you can clearly see that when you write numbers.slice(1) which is index 1/value 2 so it will include all the rest of the numbers from there (from index 1 including index 1)
// output :- 2,3,4,5

// ============================== another use case ===========================================

// let participants = ["ramu", "monu", "sonu", "bhuru", "mangu"]

// let winners = participants.slice(0,3) // will print index 0,1,2 
// console.log(winners);

// ================= my testing ==================

// let number = [1,2,3,4,5,6]

// let newNumber = number.slice(2,4)

// console.log(newNumber);

// will print what you have given as index inside parantheses 