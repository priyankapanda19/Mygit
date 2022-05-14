let names = ["jhon", "jacob", "jimmy", "justin"]

let doesItHave = names.includes("hello")

if (doesItHave) {
    console.log("vuhhu");
} else {
    console.log("!oh no");
}


// so includes simply checks ki does this array includes this ? 
// same works upon objects also 

let person = {
    name : "jhon",
    age : 30,
    location : "jaipur"
}

let hello = person.name.includes("hello")

if (hello) {
    console.log("yes");
} else {
    console.log("no");
}