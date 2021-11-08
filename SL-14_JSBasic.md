# JavaScirpt Basics!

## What Matters In This Section
- Crucial!
    - Understanding the role of JS
    - JS numbers
    - Variables & Let
    - Const
    - Booleans
    - Variable naming

- Important
- Nice to have

## JS primitives and console
- 5 main primitive types:
    - Number
    - String
    - Boolean
    - Null
    - Undefined
## JS numers 
- js has 1 number type (unlike some languates has integers, float...)
- Postiive and negtive numbers
- whole and decimal numbers
- **NaN**: a numeric value that represents sth that is not a number. For example:
    - 0/0 //NaN
    - 1+ Nan //NaN

## Variables & Let
- Syntax of JS: 
```
let someName = value;
let year = 1985;

let num1 = 2;
let num2 = 4;
let sumnum = num1 + num2;

num1 = num1 + 5;
num1 += 5;
num1 -= 5;
```

- **CONST**: stand for constant. **const work just like let, except **you cannot change the value**
```
const num1 = 4;.
num1 = 20; //ERROR!

const age = 17;
age = age +2; //ERROR!
```

## Booleans

```
let isLoggedIn = false;
```

## Variable naming and conventions
- Use camel cases:
```
let currentDate = 2;
let userInputNumber = 2;
```