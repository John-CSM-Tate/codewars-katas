//// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

// Examples (Input ==> Output):
// [1, 2, 2] => 9

function squareSum(numbers) {
    return numbers.reduce((a, v) => a + v**2, 0)
}