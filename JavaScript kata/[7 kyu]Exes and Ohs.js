// https://www.codewars.com/kata/55908aad6620c066bc00002a - kata description.

function XO(str) {
    let X = str.match(/x/gi);
    let O = str.match(/o/gi);

    return (X && X.length) === (O && O.length);
}