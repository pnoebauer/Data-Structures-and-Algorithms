// function findFactorialRecursive(number) {
//     let currentNumber = number;
//     let result = 1;
//     function recurseFactorial(currentNumber) {
//         console.log('currentNumber', currentNumber);
//         if (currentNumber === 1) {
//             return result;
//         }
//         result *= currentNumber;
//         console.log('result', result);
//         currentNumber--;

//         return recurseFactorial(currentNumber);
//     }

//     return recurseFactorial(currentNumber);
// }

function findFactorialRecursive(number) {
    let result = 1;
    function recurseFactorial(number) {
        // console.log('number', number);
        if (number === 1) {
            return result;
        }
        result *= number;
        // console.log('result', result);
        number--;

        return recurseFactorial(number);
    }

    return recurseFactorial(number);
}

function findFactorialIterative(number) {
    let result = 1;
    while (number >= 1) {
        result *= number;
        number--;
    }

    return result;
}

console.log(findFactorialRecursive(5));

console.log(findFactorialIterative(5));
