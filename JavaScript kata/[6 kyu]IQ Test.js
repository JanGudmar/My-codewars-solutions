// https://www.codewars.com/kata/552c028c030765286c00007d - kata description.

function iqTest(numbers) {
    let numArr = numbers.split(" ");
    let oddPos = [];
    let evenPos = [];

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2) {
            oddPos.push(i + 1);
        } else {
            evenPos.push(i + 1);
        }
    }

    if (oddPos.length === 1) {
        return oddPos[0];
    } else {
        return evenPos[0];
    }
}