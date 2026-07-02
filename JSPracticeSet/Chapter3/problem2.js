//write the program in question 1 using for in loop.

let marks = {
    math: 90,
    science: 85,
    english: 88,
    history: 92
}

for(let subject in marks){
    console.log(`The mark of ${subject} is ${marks[subject]}`);
}

/* output:
The mark of math is 90
The mark of science is 85
The mark of english is 88
The mark of history is 92
*/