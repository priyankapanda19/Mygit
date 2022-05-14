// let arr = [1,2,3,4,5]

// arr.fill(9)
// let num = arr.fill()

// console.log(arr);
// console.log(num);

// [9,9,9,9,9]
// [9,9,9,9,9]

// ========================= 

// let arr = [1,2,3,4,5]

// arr.fill(9, 1, 3) // 3rd index is not included

// console.log(arr);

// [1,9,9,4,5]


// how to print numbers using fill 
// taking example to print 1 to 10

function fillInNumber(n) {
    
    return Array(n).fill(0).map((value, index) => index+1)
    
}

console.log(fillInNumber(10));

// here first we are creating array of 10 indexes and then we are filling its all indexes with 0 value 
// then we are creating a .map where we are adding index+1 