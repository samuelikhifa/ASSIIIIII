// develop a function that can receive a number and an array of number .
//  it should be able to check all the elements in the array that when added 
//  together, will sum up the first number parameter.:



function findCombinations(target, numbers) {
    let result = [];

    function findSubset(startIndex, subset, currentSum) {
        if (currentSum === target) {
            result.push([...subset]); // Add a copy of the current subset to the result
            return;
        }

        for (let i = startIndex; i < numbers.length; i++) {
            if (currentSum + numbers[i] <= target) {
                subset.push(numbers[i]);
                findSubset(i + 1, subset, currentSum + numbers[i]); // Move to the next element
                subset.pop(); // Backtrack to explore other combinations
            }
        }
    }

    findSubset(0, [], 0);

    return result;
}

// Example usage:
let target = 8;
let numbers = [2, 3, 5, 7];
let combinations = findCombinations(target, numbers);

console.log(combinations);
