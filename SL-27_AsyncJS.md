# Async JavaScript

## The Call Stack
The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions. 

How JS "knows" what function is currently being run and what functions are called from within that function, etc.
## WebAPIs & Single Threaded
At any given point in time, that single JS thread is running at most one line of JS code

This takes time!

- Solution, Example: In the following code, wait 3 seconds will not delay the last message "I am at the end of this file".

```
console.log("sending request to server!")

// wait 3 seconds before print the message
setTimeout(()=> {
    console.log("Here is your data from the server...")
}, 3000)

console.log("I am at the end of this file")
```

- Why? Browser do the work. the **Web APIs** handle the tasks

## Promise
The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

Example of make new promise:
```
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })
```

## Async functions
A newer and cleaner syntax for working with async code! Syntax "makeup" for promises

2 Pieces: Async & Await

- Async
    - Async functions always return a promise.
    - If the function returns a value,  the promise will be resolved with that value
    - If the function throws an exception, the promise will be rejected
- Await
    - We can only use the await keyword inside of functions declared with async.
    - await will pause the execution of the function, waiting for a promise to be resolved