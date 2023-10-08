import {myPromise} from "./custom_promise.mjs";

// demonstration example 1 here pomise executor does not have async code and .then

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


// demonstration example 2 here promise executor have async code and .then 

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


// demonstration example 3 here pomise executor have async code and .then applied on same
//  level to promise after some interval of time

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


// demonstration example 4 here pomise executor have async code and .then applied on same
//  level to promise after synchronously

let prom4 = new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
        console.log("inside setTime before resolve")
        resolve("resolve arg");
        console.log("inside setTime after resolve")
    }, 0)
});
console.log("second line");
prom4.then(resolve_val => console.log("1st listener",resolve_val))
prom4.then(resolve_val => console.log("2nd listener",resolve_val))
console.log("last line");

// output
// in promise
// second line
// last line
// inside setTime before resolve
// inside setTime after resolve
// 1st listener resolve arg
// 2nd listener resolve arg

// demonstration example 5 here we can note then chaining giving correct result

let prom5 = new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
        console.log("inside setTime before resolve")
        resolve("resolve arg");
        console.log("inside setTime after resolve")
    }, 0)
});
console.log("second line");
prom5.then(resolve_val => {
    console.log("1st listener",resolve_val)
    return 2
})
.then(resolve_val => console.log("2nd listener",resolve_val))
.then(resolve_val => console.log("3rd listener",resolve_val))
console.log("last line");

// output
// in promise
// second line
// last line
// inside setTime before resolve
// inside setTime after resolve
// 1st listener resolve arg
// 2nd listener 2
// 3rd listener undefined