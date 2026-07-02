// write a program to print the mark of a student in an object using for loop.

let marks = {
    math: 90,
    science: 85,
    english: 88,
    history: 92
}

const subjects = Object.keys(marks);

for(let i=0;i<subjects.length;i++){
    let subject = subjects[i];
    console.log(`The mark of ${subject} is ${marks[subject]}`);
}

/* output:
The mark of math is 90
The mark of science is 85
The mark of english is 88
The mark of history is 92
*/