/**
 * obj:write a function to give me the sum of all numbers in an array
 * 
 */

function add(numbers){
    // const sum = array + sum;
    // return sum;
    let sum = 0;
    for(const number of numbers){
        console.log(number);
    sum = sum + number;
    }
    return sum;
}
const numbs = [54,62,12,6];
const sum = add(numbs);
console.log(sum);


