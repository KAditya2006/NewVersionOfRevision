//Write a javascript program to find wether a number is divisible by 2 or 3.

let num = 24;

if(num % 2 === 0 && num % 3 ===0){
    console.log("The number is divisible by both 2 and 3");
} else if(num % 2 === 0){
    console.log("The number is divisible by 2");
} else if(num % 3 === 0){
    console.log("The number is divisible by 3");
} else {
    console.log("The number is not divisible by either 2 or 3");
}


//output: The number is divisible by both 2 and 3