// Write a program to print "try again" until the user  enters the correct number.

let correctNumber = 29;

let userInput;

do {
    userInput = parseInt(prompt("Enter the correct number: "));
    if(userInput !== correctNumber){
        console.log("Try again");
    }
} while(userInput !== correctNumber);

console.log("Congratulations! You entered the correct number.");
