// // Basic TypeScript Example
// let age: number = 20;
// let age: "Twenty";
// console.log(age);

// // Data Types 

// // 1. String 
// let username: string = "R10N1X"; 
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
// usedId = "R10N1X"; // It causes error because we have already assigned a number to the variable usedId.
// console.log(usedId);

// // Functions in TypeScript
// function greet(name: string): string { 
//     return `Hello, ${name}!`;
// }
// console.log(greet("R10N1X"));

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
// console.log(greet("R10N1X"));

// // Objects in TypeScript
// const user = { 
//     name: "R10N1X",
//     age: 22,
//     isStudent: true,
//     email: "R10N1X@gmail.com"
// };

// // If we want to define exactly what information an object should contain? 
// // Thats where interfaces come in.
// // Understanding interfaces in TypeScript

// interface User { 
//     name: string; 
//     age: number;
//     email: string;
// }

// const user1: User = { 
//     name: "R10N1X",
//     age: 22, 
//     email: "R10N1X@gmail.com"
// }
// console.log(user1);

//Interface defines the structure of the user object. 
// Imagine building a social media application where every user should have a name, age, and email. 
// Instead of defining these properties repeatedly, you can use the same interface

//Optional Property 
//Use ? when property is optional or isn't mandatory.

// interface User { 
//     name: string; 
//     age: number; 
//     email?: string;
// }

// Now you can create a user without an email 

//Type alias in TypeScript

// type Product = { 
//     name: string; 
//     price: number; 
//     inStock: boolean;
// };

// const Product1: Product = { 
//     name: "Shampoo",
//     price: 500, 
//     inStock: true
// };

// console.log(Product1);

// //Generics 
// function identity<T>(value: T): T {
//     return value; 
// } 

// const name = identity<string>("R10N1X");

// const age = identity<number>(22);

// console.log(name);
// console.log(age);

// Here T is a placeholder for a type
// You can also let typescript infer the type automatically
// const name = identity("R10N1X"); // TypeScript infers that name is of type string
// const age = identity(22); // TypeScript infers that age is of type number

