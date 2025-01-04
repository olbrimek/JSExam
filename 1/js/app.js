function biggestSumOfTwoElements(array) {
    if (array.length === 0) {
        return false; // Return false if the array is empty
    }
    if (array.length === 1) {
        return array[0]; // Return the single element if the array has only one
    }

    // Sort the array
    const sortedArray = array.sort((a, b) => b - a);

    // Return the sum of two largest elements
    return sortedArray[0] + sortedArray[1];


}

console.log(biggestSumOfTwoElements([1,2,3,4]));
console.log(biggestSumOfTwoElements([]));
console.log(biggestSumOfTwoElements([76]));
console.log(biggestSumOfTwoElements([23,45,17,12]));
console.log(biggestSumOfTwoElements([]));
