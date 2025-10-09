function multiply(a , b = 1){
    return a * b;
}

function rollADice(numberOfSides = 6){
    return Math.floor(Math.random() * numberOfSides) + 1;
}

// without default keyword
// function rollADice(numberOfSides){
//     if(numberOfSides == undefined){
//         numberOfSides = 6;
//     }
//     return Math.floor(Math.random() * numberOfSides) + 1;
// }