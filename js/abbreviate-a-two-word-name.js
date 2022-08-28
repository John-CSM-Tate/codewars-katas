//// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Examples (Input ==> Output):
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
    const names = name.split(" ")
    const initials = names.map(initial => initial.charAt(0))
    return initials.join(".").toUpperCase()
}

//// psudo code
// convert name to array
// loop through the names and create new array using the first character of each name
// return: initials joining them together with "." between and change to uppercase