// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9 - kata description.

function findShort(s) {
    s = s.split(" ");
    let shortestWord = s[0];

    for (let i = 0; i < s.length; i++) {
        if (shortestWord.length > s[i].length) {
            shortestWord = s[i];
        }
    }

    return shortestWord.length;
}