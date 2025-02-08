
//js primative types: string number boolean undefined and null
//template strings allow data values to be specified in line with static content
// ' not same as `
let place2: string | undefined | null;
console.log(`Place Value: ${place2} Type: ${typeof(place2)}`)

// null and undefined have no features like properties or methods
let person3 = "alice"; // assumed to be string
let person4: string | undefined = "bobby"; // can be undefined but not null as it was not included in type union



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
