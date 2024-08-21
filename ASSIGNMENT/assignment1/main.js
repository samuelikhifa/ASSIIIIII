function generateMultiplicationTable(n) {
    let table = '<table><tr><th></th>';
    
    // Create header row (1 to n)
    for (let i = 1; i <= n; i++) {
        table += `<th>${i}</th>`;
    }
    table += '</tr>';
    
    // Create the multiplication table
    for (let i = 1; i <= n; i++) {
        table += `<tr><th>${i}</th>`; // First column with the current multiplier
        for (let j = 1; j <= n; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += '</tr>';
    }
    
    table += '</table>';
    return table;
}


let number = 10; // Replace this with any number you want
document.getElementById('multiplicationTable').innerHTML = generateMultiplicationTable(number);