// https://www.codewars.com/kata/554b4ac871d6813a03000035 - kata description.

function highAndLow(numbers) {
    let numbersArr = numbers.split(" ");
    let bigNum = Math.max(...numbersArr);
    let smallNum = Math.min(...numbersArr);

    return `${bigNum}` + " " + `${smallNum}`;
}