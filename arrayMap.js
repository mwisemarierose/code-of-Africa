
function findSubarray(array, target) {
    let sum = 0;
    let start = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        while (sum > target) {
            sum -= array[start];
            start++;
        }
        if (sum === target) {
            return true;
        }

    }
    return false;

}
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(findSubarray(arr, target)); // Output: true

const arr2 = [1, 2, 3, 4, 5];
const target2 = 10;
console.log(findSubarray(arr2, target2)); 