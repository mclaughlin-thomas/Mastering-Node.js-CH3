//defining and using functions
function writeValue(val: string | null) {
    console.log(`Value: ${val ?? "Fallback value"}`)
}
writeValue("London");
writeValue(null);

// let count: number | undefined | null = 100;
// if (count != null && count != undefined) {
//     let result1: string = count.toFixed(2);
//     console.log(`Result 1: ${result1}`);
// }
// //we have to guard against undefined and null in ts

// // we can use the ? (optional chiahning operator to simplify the guarding process)
// let count2: number | undefined | null = 100;
// let result2: string | undefined = count2?.toFixed(2);
// console.log(`Result 2: ${result2}`);


// using the null coalescing operator
// allows for fallback value to be used in place of null or undefined
// let val1: string | undefined;
// let val2: string | undefined = "London"; // can be either string or undefined. If not undefined, it will equal "london"

// let coalesced1 = val1 || "fallback value"; //  righthand side returned because it is undefined
// let coalesced2 = val2 || "fallback value"; //  lefthand side returned because it has been asssigned a string

// console.log(`result 1: ${coalesced1}`)
// console.log(`result 2: ${coalesced2}`)
// console.log(`${typeof coalesced2}`) // outputs string

//can produce unexpected results
// let val3: number | undefined = 0;
// let coalesced3 = val3 || 100; // chooses right side because 0 evaluatres as falsy like undefined or null
// console.log(`result 3: ${coalesced3}`)
// console.log(`${typeof coalesced3}`) // number

// to fix, we can use nullishing coalescing operator (??), this addresses the issue
// by returning the right hand operator in line 15 only if the left hand operator is null or undefined, less restrictive than
// than ||
// coalesced3 = val3 ?? 100; // chooses right side because 0 evaluatres as falsy like undefined or null
// console.log(`result 3: ${coalesced3}`)
// console.log(`${typeof coalesced3}`) // number
// now desirable results!

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
