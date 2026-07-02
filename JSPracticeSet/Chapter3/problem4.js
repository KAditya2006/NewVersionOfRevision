//Write a function to find the mean of 5 numbers.
function findMean(a, b, c, d, e) {
    let sum = a + b + c + d + e;
    let mean = sum / 5;
    return mean;
}
const mean = findMean(10, 20, 30, 40, 50);
console.log(`The mean of the numbers is: ${mean}`);