"use strict";
// woirking with js modules
Object.defineProperty(exports, "__esModule", { value: true });
// "JavaScript modules are used to break up an application into separate files. At
// runtime, the dependencies between modules are resolved, the files containing
// the modules are loaded, and the code they contain is executed."
// every ts and js file added to a project is treated as a module
//import keyword is used to declare a dependency on the features that a module provides
// we will use the Name and WeatherLocation classes here, which means I have
// to use the import keyword to declare a dependency on them and the modules they come from
const name_1 = require("./modules/name");
const weather_1 = require("./modules/weather");
let name = new name_1.Name("Adam", "Freeman");
let loc = new weather_1.WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
//checking object types
// when applied to an object, the typeof function will return object
// To determine whether an object has been derived from a class, the instanceof keyword can be used
//Access controls and simplified constructors
//ts provides support for access controls using the public, private, and protected keywords
// public, gives unrestricted access to the properties and methods defined by a class
// meaning they can be accessed by any other part of the application
//private, restricts access to features so they can be accessed only within the class
// that defines them
//protected, restricts access so that features can be accessed within the class or a subclass
// by default, features defined by class are accessible by any part of the application
// as if the public keyword has been applied
//"You won’t see the access control keywords applied to methods and
// properties in this book because access controls are not essential in a web application."
// "allows classes to be simplified by applying the access control keyword to the constructor parameters, as shown"
class Product {
    name;
    price;
    category;
    // adding one of the access control keywords to a constructor parameter has the 
    // effect of creating a property with the same name, type and level access.
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        // this.name = name;
        // this.price = price;
        // this.category = category;
    }
    // name: string
    // price: number
    // category?: string
    printDetails() {
        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, ` + `Category: ${this.category}`);
        }
        else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}
// extends keyword is used to declare the class that will be inherited from, 
// known as the superclass or base class
class DiscountProduct extends Product {
    discount;
    constructor(name, price, discount) {
        super(name, price - discount); // super keyword is used to invoke the superclass's construcor and methods
        this.discount = discount;
    }
}
let hat = new DiscountProduct("Hat", 100, 10); // new keyword used to creaet an object from a class
let boots = new Product("Boots", 100, "Snow Gear");
// function printDetails(product : { name: string, price: number, category?: string}) {
//     if (product.category != undefined) {
//         console.log(`Name: ${product.name}, Price:${product.price}, `+ `Category: ${product.category}`);
//     } else {
//         console.log(`Name: ${product.name}, Price:${product.price}`);
//     }
// }
// hat.printDetails();
// boots.printDetails();
//instanceof keyword is used with an object value and a class
// the expression returns true if the object was created from the class or a superclass
console.log(`Hat is a Product? ${hat instanceof Product}`);
console.log(`Hat is a DiscountProduct? ${hat instanceof DiscountProduct}`);
console.log(`Boots is a Product? ${boots instanceof Product}`);
console.log("Boots is a DiscountProduct? " + (boots instanceof DiscountProduct));
// -----------------
//Working with objects
// let hat = {
//     name: "Hat",
//     price: 100
// };
// let boots = {
//     name: "Boots",
//     price: 100,
//     category: "Snow Gear"
// }
// function printDetails(product : { name: string, price: number,category?: string}) { // type of category is string or undefined
//     if (product.category != undefined) {
//         console.log(`Name: ${product.name}, Price: ${product.price}, `+ `Category: ${product.category}`);
//     } else {
//         console.log(`Name: ${product.name}, Price: ${product.price}`);
//     }
// }
// printDetails(hat);
// printDetails(boots);
// ---------------
//defining and using functions
// function writeValue(val: string | null) {
//     console.log(`Value: ${val ?? "Fallback value"}`)
// }
// writeValue("London");
// writeValue(null);
//functions are defined with the function keyword and are given a name
// write value deines a parameter it will accept string or null values
// by default ts will allow funcitons to be invoked only when the # of args matches the number of paramters the function defines
// in js though a function can be called w any number of arguments
//Optional paramter. The ? is used to denote an optional paramter
// function writeValue2(val?: string) {
//     console.log(`Value: ${val ?? "Fallback value"}`)
// }
// writeValue2("London");
// writeValue2();
// Here the funciton can be invoked with zero or one argument
// Here the parameter type is string or undefined  (string | undefined) because the value will be undefined
// if the function is invoked w/o an argument.
// val?: string NOT SAME AS val: string | undefined
// latter requires an argument, first does not
// default values can be helpful when dealing with undefined values
//default value will be used when fcn is invoked w/o an argument
// this means that the type of the param in the example will always be string, so I dont have to check for undefined values
// function writeValue3(val: string = "default value"){
//     console.log(`Value: ${val}`)
// }
// writeValue3("London");
// writeValue3();
// defining rest parameters
// rest parameters are used to capture any additional arguments when
// a fcn is invoked w additional arguments
//rest parameter must be the last parameter defined by fcn.
//its name must be prefixed with an ellipsis (...)
// the rest parameter is an array to which any extra arguments will be assigned
// function writeValue4(val: string, ...extraInfo: string[]) {
//     console.log(`Value: ${val}, Extras: ${extraInfo}`)
// }
// writeValue4("London", "Raining", "Cold");
// writeValue4("Paris", "Sunny");
// writeValue4("New York");
// // -----------
// console.log("Return")
// function composeString(val: string) : string {
//     return `Composed string: ${val}`;
// }
// function writeValue5(val?: string) {
//     console.log(composeString(val ?? "Fallback value"));
// }
// writeValue5("London");
// writeValue5();
// -------------
// function getUKCapital() : string {
//     return "London";
// }
// function writeCity(f:() => string){ // The writeCity function defines a parameter called f , which is a function that it invokes to get the value to insert into 
//                                     // the string that it writes out.
//     console.log(`City: ${f()}`)
// }
// writeCity(getUKCapital);
// // ---------------
// function getUKCapital2() : string {
//     return "London";
// }
// function writeCity2(f:() => string){ 
//     console.log(`City: ${f()}`)
// }
// writeCity2(getUKCapital2);
// writeCity2(() => "Paris");
// -------------
//Functions can access values that are defined in the surrounding code, using a
//feature called closure, as demonstrated in Listing 3.41.
// console.log ("closure")
// function getUKCapital3() : string {
//     return "London";
// }
// function writeCity3(f: () => string){
//     console.log(`City: ${f()}`)
// }
// writeCity3(getUKCapital3);
// writeCity3(() => "Paris");
// let myCity = "Rome";
// writeCity3(() => myCity);
// -----------
//let myArray = []; // js arrays will resize themselves
// dont have to declare data type it will hold either. Below we have a number, string and a boolean
// myArray[0] = 100;
// myArray[1] = "Adam";
// myArray[2] = true;
// // -- similar
// let myArray2: any[] = [];
// myArray2[0] = 100;
// myArray2[1] = "Adam";
// myArray2[2] = true;
// -------------
// restricting array value types
// let myArray3: (number | string | boolean)[] = [];
// myArray3[0] = 100;
// myArray3[1] = "Adam";
// myArray3[2] = true;
// one-liner to do same thing
// let myArray4: (number | string | boolean)[] = [100,"Adam", true];
// // ------------
// let myArray5: (number | string | boolean)[] = [100,"Adam", true];
// let val = myArray5[0];
// console.log(`Value: ${val}`);
// ------------
// modigying contents of array
// let myArray6: (number | string | boolean)[] = [100,"Adam", true];
// myArray6[0] = "Tuesday";
// let val3 = myArray[0];
// console.log(`Value: ${val3}`);
// ---------
//enumerating contents of an arrray. Enumerate through contents of array using for loop or
// the forEach loop.
// console.log ("enumeration")
// let myArray7: (number | string | boolean)[] = [100,"Adam", true];
// for (let i = 0; i < myArray7.length; i++) {
//     console.log("Index " + i + ": " + myArray7[i]);
// }
// console.log("XXXX");
// myArray7.forEach((value, index) =>
//     console.log("Index " + index + ": " + value));
// // -----------
// console.log("Spread Operator")
//spread operator
// used to expand an array so contents can be used as function arguments or comvined w other arrays
// let myArray10: (number | string | boolean)[] = [100,"Adam", true];
// let otherArray = [...myArray10, 200, "Bob", false];
// spread operator is an ellipsis and it causes the arry to be unpacked
// here, otherArray has all contents of myArray and then 200, bob and false
// for (let i = 0; i < myArray.length; i++) {
//console.log("Index " + i + ": " + myArray10[i]);
// }
// console.log("---");
// otherArray.forEach((value, index) =>
//     console.log("Index " + index + ": " + value));
// -----------------------------------------------------
// () = >
// this is called arrow syntax or fat arrow syntax or lambda expression syntax
// the thing the arrow points to the the function result
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
