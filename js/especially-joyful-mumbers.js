////DESCRIPTION:
// Positive integers that are divisible exactly by the sum of their 
// digits are called Harshad numbers. The first few Harshad numbers 
// are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its 
// digit sum s and s with the digits reversed, gives the original 
// number n. For example consider number 1729:

// Examples (Input ==> Output):
// 1729 -> False

function numberJoy(n) {
    const s = n.toString().split('').reduce((a, c) => a + Number(c), 0);
    const revS = Number(s.toString().split('').reverse().join(''));
    return s * revS === n;
}