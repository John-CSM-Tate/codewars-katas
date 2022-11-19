//// DESCRIPTION:
// Your task is to make two functions ( max and min, or maximum and minimum, 
// etc., depending on the language ) that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// [42, 54, 65, 87, 0]             -> min = 0, max = 87
// [5]                             -> min = 5, max = 5

//First attempt (forgot about Math.min() and Math.max())
// var min = (list) => Math.min(...list)
// var max = (list) => Math.max(...list)
var min = function(list){
    if (list.length === 1) return list[0];
    let minVal = list[0]
    for (let i = 1; i < list.length; i++){
        if (minVal > list[i]) minVal = list[i];
    }
    return minVal
}

var max = function(list){
    if (list.length === 1) return list[0];
    else {
        let maxVal = list[0]
        for (let i = 1; i < list.length; i++){
            if (maxVal < list[i]) maxVal = list[i];
        }
        return maxVal
    }
}

