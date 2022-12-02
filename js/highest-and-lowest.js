//// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Examples (Input ==> Output):
// "1 2 3 4 5" -> "5 1"
// "1 2 -3 4 5" -> "5 -3"
// "1 9 3 4 -5" -> "9 -5"

function highAndLow(numbers){
    let nums = numbers.split(' ');
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}