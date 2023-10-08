import {myPromise} from "./custom_promise.mjs";

// demonstration example 1
let prom = new Promise((resolve, reject) => {
    console.log("in promise");
    resolve("in setTime");
});
console.log("second line");
prom.then(resolve_val => console.log("1st listener",resolve_val)) 
console.log("last line");

// output:
// in promise
// second line
// last line
// 1st listener in setTime


