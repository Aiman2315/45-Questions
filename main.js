"use strict";
// Q2:Ans:
// let name: string = "Eric";
// let message: string = `Hello ${name}, would you like to learn some Python today?`;
// console.log(message);
Object.defineProperty(exports, "__esModule", { value: true });
// Q3:Ans:
// let name: string = "Ahmed";
// Lowercase
// let lowerCaseName: string = name.toLowerCase();
// console.log(lowerCaseName);
// Uppercase
// let upperCaseName: string = name.toUpperCase();
// console.log(upperCaseName);
// Titlecase
// let titleCaseName: string = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// console.log(titleCaseName);
// Q4:Ans:
// let author: string = "Nelson Mandela";
// let quote: string = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
// console.log(`${author} once said, “${quote}”`);
// Q5:Ans:
// let famous_person: string = "Nelson Mandela";
// let quote: string = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
// let message: string = `${famous_person} once said, “${quote}”`;
// console.log(message);
// Q6:Ans:
// let nameWithWhitespace: string = "\t John Doe \n";
// console.log(nameWithWhitespace);
// let strippedName: string = nameWithWhitespace.trim();
// console.log(strippedName);
// Q7:Ans:
// console.log(5 + 3); //Addition
// console.log(10 - 2); // Subtraction
// console.log(4 * 2);  // Multiplication
// console.log(16 / 2); // Division
// Q8:Ans:
// console.log(5 + 3);  // 8
// console.log(10 - 2); // 8
// console.log(4 * 2);  // 8
// console.log(16 / 2); // 8
// Q9:Ans:
// let favoriteNumber = 9;
// let message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);
// Q10:Ans:
// console.log(10 + 2);  // 12
// console.log(20 - 8);  // 12
// console.log(3 * 4);   // 12
// console.log(24 / 2);  // 12
// let favoriteNumber = 9;
// let message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);
// Q11:Ans:
// let names: string[] = ["Fatima", "Mahrukh", "Zoya", "Iqra"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// Q12:Ans:
// let names: string[] = ["Fatima", "Mahrukh", "Zoya", "Iqra"];
// console.log(`Hello, ${names[0]}! How are you today?`);
// console.log(`Hello, ${names[1]}! How are you today?`);
// console.log(`Hello, ${names[2]}! How are you today?`);
// console.log(`Hello, ${names[3]}! How are you today?`);
// Q13:Ans:
// let favoriteVehicles: string[] = ["Civic", "Electric scooter", "Helicopter", "Submarine"];
// for (let i = 0; i < favoriteVehicles.length; i++) {
//     console.log(`I would like to own a ${favoriteVehicles[i]}.`);
// }
// Q14:Ans:
// let guests: string[] = ["Mahrukh", "Ali", "Ahmed"];
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, I would be honored to have you as a guest at my dinner.`);
// });
// Q15:Ans:
// let guests: string[] = ["Mahrukh", "Ali", "Ahmed"];
// guests[2] = "Sara";
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, I would be honored to have you as a guest at my dinner.`);
// });
// Q16:Ans:
// let guests = ["Mahrukh", "Fatima", "Sara"]; // Step 1
// console.log(`Dear ${guests[0]}, you are invited to dinner.`);
// console.log(`Dear ${guests[1]}, you are invited to dinner.`);
// console.log(`Dear ${guests[2]}, you are invited to dinner.`);
// // Step 2:
// const guestWhoCantMakeIt = "Fatima";
// console.log(`${guestWhoCantMakeIt} can't make it.`);
// // Step 3:
// guests[1] = "Ali";
// // Step 4:
// console.log(`Dear ${guests[0]}, you are still invited to dinner.`);
// console.log(`Dear ${guests[1]}, you are still invited to dinner.`);
// console.log(`Dear ${guests[2]}, you are still invited to dinner.`);
// Q17:Ans:
// let guests = ["Ali", "Ahmed", "Hassan"]; // Step 1:
// guests.unshift("Raza"); // Step 2:
// guests.splice(2, 0, "Fatima"); // Step 3:
// guests.push("Sara"); //Step 4:
// //Step 5:
// console.log(`Dear ${guests[0]}, you are invited to dinner.`);
// console.log(`Dear ${guests[1]}, you are invited to dinner.`);
// console.log(`Dear ${guests[2]}, you are invited to dinner.`);
// console.log(`Dear ${guests[3]}, you are invited to dinner.`);
// console.log(`Dear ${guests[4]}, you are invited to dinner.`);
// console.log(`Dear ${guests[5]}, you are invited to dinner.`);
// Q18:Ans:
let guests = ["Ali", "Ahmed", "Sara", "Alina", "Raza", "Hasan"];
console.log("Sorry, we can only invite two people to dinner."); //Step 1:
//Step 2:
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Step 3:
console.log(`Dear ${guests[0]}, you are still invited to dinner.`);
console.log(`Dear ${guests[1]}, you are still invited to dinner.`);
// Step 4:
guests.pop();
guests.pop();
console.log("Final guest list:", guests);
