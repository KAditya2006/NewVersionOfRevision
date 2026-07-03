//Extract the amount of this string "Please give me RS 1000"

let str = "Please give me RS 1000";


let amount = str.match(/\d+/)?.[0];

console.log(amount); 

//output: 1000