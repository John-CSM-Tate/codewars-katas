//// DESCRIPTION:
// NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)
// Complete the function which get an input number n such that n >= 10 and n < 10000, then:

// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.

// Example (Input -> Output):
// 325 => "apple"

function SubtractSum(n){
    return "apple"
}

// Trick Question.

// After first sum subtraction n is always minus 9, and the number is dividable 9.  
// Leading the output to always be "apple".

// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315
// sum = 3+1+5 = 9
// 315 % 9 = 0

// 1-kiwi
// 2-pear
// 3-kiwi
// 4-banana
// 5-melon
// 6-banana
// 7-melon
// 8-pineapple
// 9-apple
// ...
// 90-apple
// 91-kiwi
// 92-banana
// 93-kiwi
// 94-banana
// 95-melon
// 96-banana
// 97-melon
// 98-pineapple
// 99-apple
// 100-pineapple