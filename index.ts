function sum(first: number, second: number | string){
    if (typeof second == "string"){
        return first+Number.parseInt(second);
    }
    else{
        return first+second;
    }
}

//run with npm run use_ts
let result = sum(10,10);
console.log('Result value: ' + result+ ' , Result type: ' + (typeof result));
result = sum(10, "10");
console.log('Result value: ' + result+ ' , Result type: ' + (typeof result));
