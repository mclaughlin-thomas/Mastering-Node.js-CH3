// function sum(first: number, second: number | string){
//     if (typeof second == "string"){
//         return first+Number.parseInt(second);
//     }
//     else{
//         return first+second;
//     }
// }

//run with npm run use_ts
// let defines variables
// // const for constants...
// Weakly typed
let condition = true;
let person = "bob";
const age = 40;

// More informed
let condition1: boolean = true;
let person1: string = "bob";
const age1: number = 40;

// let result = sum(10,10);
// console.log('Result value: ' + result+ ' , Result type: ' + (typeof result));
// result = sum(10, "10");
// console.log('Result value: ' + result+ ' , Result type: ' + (typeof result));
