// // Basic TypeScript Example
// let age: number = 20;
// let age: "Twenty";
// console.log(age);

// // Data Types 

// // 1. String 
// let username: string = "Abhi"; 
// console.log(username); 

// // 2. Number
// let age: number = 22; 
// console.log(age); 

// // 3. Boolean 
// let isThatTrue: boolean = false; 
// console.log(isThatTrue); 

// //4. Arrays 
// let cars: string[] = ["Audi", "BMW", "Mercedes"];
// let marks: number[] = [90, 80, 70];
// console.log(cars);


// // 5. Union Types :- allows user to hold more than one variable 
// let usedId: number | string; 
// // usedId = 102; 
// usedId = "Abhi"; // It causes error because we have already assigned a number to the variable usedId.
// console.log(usedId);

// // Functions in TypeScript
// function greet(name: string): string { 
//     return `Hello, ${name}!`;
// }
// console.log(greet("Abhi"));

// // Functions with multiple parameters 
// function calculateTotal(price: number, quantity: number): number { 
//     return price * quantity; 
// }
// const total = calculateTotal(10, 5);
// console.log(`Total: ${total}`);

// // Arrow functions in TypeScript
// const greet = (name: string): string => { 
//     return `Hello, ${name}!`;
// }
// console.log(greet("Abhi"));

// Objects in TypeScript
const user = { 
    name: "Abhi",
    age: 22,
    isStudent: true,
    email: "khatiwadaabhi@gmail.com"
};

// If we want to define exactly what information an object should contain? 
// Thats where interfaces come in.
// Understanding interfaces in TypeScript