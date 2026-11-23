// // Basic TypeScript Example
// let age: number = 20;
// let age: "Twenty";
// console.log(age);

// Data Types 

// 1. String 
let username: string = "Abhi"; 
console.log(username); 

// 2. Number
let age: number = 22; 
console.log(age); 

// 3. Boolean 
let isThatTrue: boolean = false; 
console.log(isThatTrue); 

//4. Arrays 
let cars: string[] = ["Audi", "BMW", "Mercedes"];
let marks: number[] = [90, 80, 70];
console.log(cars);


// 5. Union Types :- allows user to hold more than one variable 
let usedId: number | string; 
usedId = 102; 
usedId = "Abhi"; // It causes error because we have already assigned a number to the variable usedId.
console.log(usedId);