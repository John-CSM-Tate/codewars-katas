// DESCRIPTION:
// Find the mean(average) of a list of numbers in an array.

var findAverage = function (nums) {
    return nums.reduce((acc, val) => acc + val, 0) / nums.length
}