//// DESCRIPTION:
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// Examples (Input ==> Output):
// 3 => [3, 28, 29]

function petYears(humanYears){
    let catY = 0;
    let dogY = 0;
    if (humanYears === 1){
        catY = 15;
        dogY = 15;
    } else if (humanYears === 2){
        catY = 24;
        dogY = 24;
    } else if (humanYears >= 3) {
        catY = 4 * (humanYears - 2) + 24;
        dogY = 5 * (humanYears - 2) + 24;
    }
    return [humanYears, catY, dogY]; 
}