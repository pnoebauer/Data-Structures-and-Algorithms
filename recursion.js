let counter = 0;
function inception() {
    debugger;
    if (counter > 3) {
        console.log('done');
        return 'done';
    }
    counter++;
    console.log(counter);
    inception(); // would not return to the outer inception() calling it resulting in undefined return
    // return inception(); // will return to the outer inception() calling it
}

console.log(inception());

// inception(inception(inception(inception(inception('done')))));

// 1. Identify the base case
// 2. Identify the recursive case (here: counter > 3)
// 3. Get closer and closer and return when needed. 
//    Usually 2 returns, one for base case, and one for the recursive case
//    (here: return 'done' for recursive case, and return function result for base case)
