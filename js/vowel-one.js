//// DESCRIPTION:
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's 
// and non-vowels become 0's.
// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// EXAMPLES (Input ==> Output):
// "abceios" => "1001110"
// "aeiou, abc" => "1111100100"

function vowelOne(s){
    let output = ""
    let regex = /[aeiou]/i
    for (let i = 0; i < s.length; i++){
        regex.test(s[i]) ? output += "1" : output += "0"
    }
    return output
}