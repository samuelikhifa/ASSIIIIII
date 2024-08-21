// develop a function that can generate  stars in the output field .
//  the stars should have a maximum number which should be at the bottom. 
//  it will start generating from 1 star  to the maximum number of stars


function generateStars(maxStars) {
    let result = '';

    // Loop to generate each line of stars
    for (let i = 1; i <= maxStars; i++) {
        result += '*'.repeat(i) + '\n';
    }

    return result;
}

// Example usage:
let maxStars = 5; // Replace with the maximum number of stars you want
let starPattern = generateStars(maxStars);

console.log(starPattern);

