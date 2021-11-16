# JS Callbacks and Array methods
## Goals:
Use the new arrow function syntax. Understand and use these methods:
- forEach

- map

- filter

- find

- reduce

- some

- every

## forEach method
Accepts a callback function. Calls the function once per element in the array.
```
const numbers = [1,2,3,5,6,5,8,7,8,10,11,12]

function print(element){
    console.log(element)
}

print(numbers[0]) //1
print(numbers[1]) //2

numbers.forEach(print) //uncommon way to do it

//common way to do it
numbers.forEach(function(el){
    if (e %2 === 0) {
        console.log(el)
    }
    console.log(el)
})
```

## Mep method
Creates a new array with the results of calling a callback on every element in the array

```
const numbers = [1,2,3,5,6,5,8,7,8,10,11,12]

const doubles = numbers.map(function(num) {
    return num*2;
})
```

## Arrow function

```
const add = function(x,y) {
    return x + y;
}

const add = (x,y) =>{
    return x + y
}

add(2,3) //return same thing for the above 2 forms.

const square = (x) => {
    return x*x
}

// change {} to (), return the thing inside () without return keyword. only works in arrow function
const square = (x) => (
    x*x
)

//even simpler
const add = (a,b) => a+b
```

## setTimeout and setInterval

```
// 3000 means 3 seconds
console.log("Hello!...")

setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("goodbuy")


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id);
```
## Filter method
Creates a new array with all elements that pass the test implemented by the provided function.
```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

## Every and Some
- EVERY
    - tests whether all elements in the array pass the provided function. It returns a Boolean value.
- SOME
    - Similar to every, but returns true if ANY of the array elements pass the test function

```
const exams = [80, 79, 90, 92, 95, 97, 82, 70]

exams.every(score => score >= 75) //return false, because there is a 70


exams.some(score => score >= 75)

```

## Reduce
Executes a reducer function on each element of the array, resulting in a single value

Example
![25]()
```
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)

```
