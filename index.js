"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using the null coalescing operator
// allows for fallback value to be used in place of null or undefined
let val1;
let val2 = "London";
let coalesced1 = val1 || "fallback value"; //  righthand side returned because it is undefined
let coalesced2 = val2 || "fallback value"; //  lefthand side returned because it has been asssigned a string
console.log(`result 1: ${coalesced1}`);
console.log(`result 2: ${coalesced2}`);
console.log(`${typeof coalesced2}`); // outputs string
// the equality operator (==) attempts to coerce operands to the same type to asses equality
// In essence, the equality operator tests that values are the same, irrespective of their type
// any = 5 and any = "5" will evaluate as true with ==
// if you want to ensure the values and types are the same, you need to use identity operator: ===
// any = 5 and any = "5" will evaluate as false with ===
//js primative types: string number boolean undefined and null
//template strings allow data values to be specified in line with static content
// ' not same as `
// let place2: string | undefined | null;
// console.log(`Place Value: ${place2} Type: ${typeof(place2)}`)
// null and undefined have no features like properties or methods
// let person3 = "alice"; // assumed to be string
// let person4: string | undefined = "bobby"; // can be undefined but not null as it was not included in type union
//-----------
//run with npm run use_ts
// let defines variables
// // const for constants...
// Weakly typed
// let condition = true;
// let person = "bob";
// const age = 40;
// More informed
// let condition1: boolean = true;
// let person1: string = "bob";
// const age1: number = 40;
// let place = null;
// null value is object
// ----------------
// function sum(first: number, second: number | string){
//     if (typeof second == "string"){
//         return first+Number.parseInt(second);
//     }
//     else{
//         return first+second;
//     }
// }
// let result = sum(10,10);
// console.log('Result value: ' + result+ ' , Result type: ' + (typeof result));
// result = sum(10, "10");
// console.log('Result value: ' + result+ ' , Result type: ' + (typeof result));
