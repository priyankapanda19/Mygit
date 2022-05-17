// let names = ["florin", "Ivan", "liam"]

// let check = names.find(item => item === "Ivan")

// console.log(check);


let person = [
    {
        name : "florin",
        age : 30
    },
    {
        name : "Ivan",
        age :40
    },
    {
        name : "liam",
        age : 50
    }
]

let result = person.find(item => item.name === "Ivan")
let result1 = person.find(item => item.name === "Ivan").age // this will return the age only from that perticular object 

console.log(result);
console.log(result1);

// so you see now it return the object which satisfies the condition 