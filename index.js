"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//js primative types: string number boolean undefined and null
//template strings allow data values to be specified in line with static content
// ' not same as `
let place2;
console.log(`Place Value: ${place2} Type: ${typeof (place2)}`);
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
