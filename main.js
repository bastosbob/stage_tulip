const prompt = require('prompt-sync')();

var n = prompt("enter number of lists: ")

if (n % 3 === 0 && n % 5 === 0)
    console.log("GarconFille")
 else if (n % 3 === 0)
     console.log("Garcon")
else if (n % 5 === 0)
    console.log("Fille")
else
    console.log(n)