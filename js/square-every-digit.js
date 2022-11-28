//// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// Examples (Input ==> Output):
// 9119 -> 811181

function squareDigits(num){
    return parseInt(num.toString().split('').map(n => parseInt(n) ** 2).join(''));
}
