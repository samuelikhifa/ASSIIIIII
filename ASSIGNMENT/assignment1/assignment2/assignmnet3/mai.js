// develop a  function that  can sort  an array  in ascending  order.
//  the array of  numbers and should be able to filter out any
//   elements that isnt a number


function sortAndFilterArray(arr) {
    // Filter out non-number elements
    let filteredArray = arr.filter(item => typeof item === 'number' && !isNaN(item));

    // Sort the filtered array in ascending order
    filteredArray.sort((a, b) => a - b);

    return filteredArray;
}

// Example usage:
let array = [5, "hello", 3, 7, "123", 2, null, 10, "world", NaN, 8];
let sortedArray = sortAndFilterArray(array);

console.log(sortedArray); // Output: [2, 3, 5, 7, 8, 10]
