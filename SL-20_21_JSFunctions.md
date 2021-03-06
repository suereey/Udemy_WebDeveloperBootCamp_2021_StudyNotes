# JS Functions
## Intro of function
- FUNCTIONS are Reusable procedures

- Functions allow us to write reusable, modular code

- We define a "chunk" of code that we can then execute at a later point.

- Example
```
function singSong(){
    console.log("Do");
    console.log("Re");
    console.log("Mi");
}

//run
singSong(); 
//run again
singSong(); 
```
## Arguments
Write functions that accept input

```
function greet(person){
    console.log('Hi, ${person}!');
}

great("tom") //Hi, tom!
```
## Return
```
function add (x,y) {
    return x + y;
}

const sum = add(10, 19);
sun; //26
```

## Function expression
```
function add (x,y) {
    return x + y;
}

const add = function(x,y) {
    return x + y;
}

add(3,4); //return the same thing for the 2 above forms
```

## Higher order function
Functions that operate on/with other functions.  They can:

Accept other functions as arguments

Return a function

```
function callTwice(another_function){
    another_function();
    another_function();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);
```

## Returning a function

```
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("congrats")
            console.log("you win")
        }
    }else{
            return function() {
                alart("Nono");
            }
        }
}

const mystery = makeMysteryFunc() 
```

## Methods
We can add functions as properties on objects.

We call them methods!
```
const myMath = {
    PI: 3.14159,
    square: function(num){
        return num*num;
    },
    cube: function(num){
        return num**3;
    }
}

myMath.PI;
myMath.square(2);

//shorthand
const myMath = {
    PI: 3.14159,
    square(num){
        return num*num;
    },
    cube(num){
        return num**3;
    }
}
```

## **This** keyword in JS
Use the keyword this to access other properties on the same object.

The value of this depends on the invocation context of the function it is used in.

```
const cat = {
    name: "blue steele",
    color: "gray",
    break: "fold",
    meow(){
        console.log("meow, meow, meow")
    }
}

cat.meow() //print "meow, meow, meow"

const cat = {
    name: "blue steele",
    color: "gray",
    break: "fold",
    meow(){
        console.log("${this.name} says meow")
    }
}
```

## try and catch

```
try {
    hello.toUpperCase();
}catch{
    console.log("Error")
}
```