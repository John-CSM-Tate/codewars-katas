//// DESCRIPTION:
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// EXAMPLES (Input ==> Output):
// (10,2) => true
// (9,2) => false


function checkForFactor (base, factor) {
    return base % factor === 0 ? true : false;
}