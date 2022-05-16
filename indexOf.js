// we will discuss indexOf and lastIndexOf 

let names = ["lora", "florin", "martha"]
let idx = names.indexOf("florin")
names[idx] = "jay"
console.log(names);

// why would you use something like that ?
// lets say you want to swap value then you need to know the index then you will be able to change it 

// problem : what if there are two names in array 
// ans - it will return the first one 
// and this is why we have lastIndexOf because that will return last se first index 

// so it simply gives the index so that you can swap whatever you want on that index 