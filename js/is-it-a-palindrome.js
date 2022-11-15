//// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// EXAMPLES (Input ==> Output):
// "aba" => true
// "hello" => false

function isPalindrome(x) {
    return x.toLowerCase() === x.split("").reverse().join("").toLowerCase()
}