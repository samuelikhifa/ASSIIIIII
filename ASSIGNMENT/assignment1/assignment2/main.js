// develop a function that calculates numbers of characters in
//  a string and tell the length of different character types.
//  it should indicate numbers of digits, alphabets and symbols

function analyzeString(str) {
    let length = str.length;
    let digits = 0;
    let alphabets = 0;
    let symbols = 0;

    for (let i = 0; i < length; i++) {
        let char = str[i];

        if (char >= '0' && char <= '9') {
            digits++;
        } else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            alphabets++;
        } else {
            symbols++;
        }
    }

    return {
        totalLength: length,
        digitsCount: digits,
        alphabetsCount: alphabets,
        symbolsCount: symbols
    };
}

// Example usage:
let inputString = "Hello World! 123 @#";
let result = analyzeString(inputString);

console.log(`Total Length: ${result.totalLength}`);
console.log(`Number of Alphabets: ${result.alphabetsCount}`);
console.log(`Number of Digits: ${result.digitsCount}`);
console.log(`Number of Symbols: ${result.symbolsCount}`);
