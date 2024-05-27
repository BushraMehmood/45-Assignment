// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "subaru";
console.log("\n----> 5 tests evaluates t True: ");
//Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');
//Test 2
console.log("Is car == 'Toyota'? I predict True.");
console.log(car !== 'subaru');
//Test 3
console.log("Is the length of car > 4? I predict True.");
console.log(car.length > 4);
//Test 4
console.log("Is the length of car <= 6? I predict True.");
console.log(car.length <= 6);
//Test5
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith("s"));
