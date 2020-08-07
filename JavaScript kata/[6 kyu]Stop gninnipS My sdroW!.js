// https://www.codewars.com/kata/5264d2b162488dc400000001 - kata description.

function spinWords(str) {
    let wordsFromStr = str.split(" ");
    let word;

    const reverseString = (string) => {
        return string.split("").reverse().join("");
    }

    for (let i = 0; i < wordsFromStr.length; i++) {

        if (wordsFromStr[i].length >= 5) {
            word = wordsFromStr[i];
            wordsFromStr[i] = reverseString(word);
        }
    }

    return wordsFromStr.join(" ");
}