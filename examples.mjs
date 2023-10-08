import {myPromise} from "./custom_promise.mjs";

// demonstration example 1

let prom = new myPromise((resolve, reject) => {
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


// demonstration example 2

let prom2 = new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
        console.log("inside setTime before resolve")
        resolve("resolve arg");
        console.log("inside setTime after resolve")
    }, 0)
});
console.log("second line");
prom2.then(resolve_val => console.log("1st listener",resolve_val)) 
console.log("last line");

// in promise
// second line
// last line
// inside setTime before resolve
// inside setTime after resolve
// 1st listener resolve arg


// demonstration example 3

let prom3 = new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
        console.log("inside setTime before resolve")
        resolve("resolve arg");
        console.log("inside setTime after resolve")
    }, 0)
});
console.log("second line");
prom3.then(resolve_val => console.log("1st listener",resolve_val))
setTimeout(() => {
    prom3.then(resolve_val => console.log("2nd listener",resolve_val))
}, 0) 
console.log("last line");

// output
// in promise
// second line
// last line
// inside setTime before resolve
// inside setTime after resolve
// 1st listener resolve arg
// 2nd listener resolve arg