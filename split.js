// var num = 123456;
// var digits = num.toString().split(" ");
// var realDigits = digits.map(Number)
// console.log(realDigits);
// console.log(digits);




// jab string me convert ho jaye uske baad 
//3. if ()     :- sirf paranthesis par jo input hai uska array bna dega 
//1. if ("")   :- agar space nahi diya to character+space ki substring bnayega 
//2. if (" ")  :- agar space diya to words ki substring bnayega

/* example :- let text = "hello how are you"
1. [ 'hello how are you' ]
2. ['h', 'e', 'l', 'l', 'o',' ', 'h', 'o', 'w', ' ','a', 'r', 'e', ' ', 'y','o', 'u']
3. [ 'hello', 'how', 'are', 'you' ]
*/

let text = 849548
let nimbu = text.toString()
let newText = nimbu.split(" ")

console.log(nimbu);
console.log(newText);


// conclusion :- number ko pele string me convert karna padega tab phr uspr string ke methods apply kar skte hai 
// which is a split methods jo string ka method hai