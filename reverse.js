// just some random testing 

// let arr = [1,2,3,4,5]

// let hello = arr.concat(1)

// console.log(arr);
// console.log(hello);

// now comes the use of reverse 
let number = [1,2,3,4,5]

let newNum = number.concat().reverse() // in video saying doing shallow copy here using concat
// let newNum1 = [...number].reverse() // in video saying doing shallow copy here using spread operator

console.log(number);
console.log(newNum);
// console.log(newNum1);


// another way of copying 

// let number = [1,2,3,4,5]

// let newNum = [...number].reverse() // in video saying doing shallow copy here using spread operator

// console.log(newNum);
// console.log(number);
// this above one will not change the original array 

// ============= how would you reverse a string ? ===================

// let string = "coding is fun!"

// let newString = string.split("").reverse().join("")

// console.log(newString);

// !nuf si gnidoc

/* abhi dekh me btata hu kya hora hai yaha par sabse pele to apn ne ek string leli in line number 30 then ek naya variable liya newString karke this yaha tak 

abhi line no. 32 me `.split("")` use kar rahe hai and focus inside paranthesis "" ye hai bina space ke to ye kya karega ki sub string bna dega characters ke (puri string ke words ke character ki sub string of array bna dega) 
and agar aap "" ki jagar per space deke " " ese likho to words ka substring bnayega 

phr apn un characters ko reverse kar de rahe hai using .reverse()

phr .join() use kar rahe hai and focus inside paranthesis "" ya hai bina space ke to ye kya karega ki bina space ke jod dega pure characters of sub string ke array ko jo ki reversed hai abhi 
and agar aap "" ki jagah par space deke " " ese likho to characters me space aayega ya "-" to yehi - ayega characters ke bich ya words hoge to words ke bich 

and ye .join() ki vajah se array ke brackets hat jare hai 

to I hope ab sab clear hoga pele split kiya in characters then reverse kiya un characters ko then join kar diya phr se and we are getting the output */