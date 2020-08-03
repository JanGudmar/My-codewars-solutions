// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd - kata description.

function filter_list(l) {
    return l.filter(function (areThereAnyNums) {
        return typeof (areThereAnyNums) == "number"
    })
}