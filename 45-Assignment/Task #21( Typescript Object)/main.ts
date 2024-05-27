//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface type {
    Name:string, Age:Number, Profession:string
}

let Object:type = {Name:"Bushra Mehmood", Age:23, Profession: "Developer"};

console.log(`My Name is ${Object.Name}`);
console.log(`My Age is ${Object.Age} years old`);
console.log(`My Profession is ${Object.Profession}`);

