# JS Decision Making
## What Matters In This Section
- Crucial!
    - Comparison Operator
    - Runnign JS from a file
    - Conditionals: If, else-if, and else
    - Truth-y and False-y values
    - Logical and, or, not

## Comparison Operator
- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- Compare the letters and some others: https://www.unicode.org/charts/PDF/U0000.pdf

```
'a' < 'b'; //true
'A' < 'a'; //false
```

- Equal sign
```
1 == 1; // true
1 == '1'; // true, Checks for equality of value, but not equality of type
0 == ''; //true
0 == false; //true
nul == undefined; //true

1 === 1; //true
1 === '1'; // false, check value and type

1 != 2; //true
1 != '2'; //true
1 != '1'; //false

1 !== '1'; //true
```

## Console, alert, and prompt
- **console.log()** prints arguments to the console

```
console.log("Hi")
console.warning("Un Oh warning!") \\show warning
console.error("show error message") 
```

- alart and prompt
```
alart("Hi there!")

promt("Enter your name") \\small window will prompt out for you to fill in
let userInput = promt("Enter your name") 
```

## Conditions
- If statement

```
let rating = 3;
if (rating === 3){
    console.log("this is 3!");
}else if(rating ===2){
    console.log("this is 2!");
}else if(rating ===1){
    console.log("this is 1!");
}else{
    console.log("this is nothing");
}
```

## Truth-y and False-y values
- All JS values have an inherent truthyness or falsyness about them
    - Falsy values:
        - false
        - 0
        - "" (empty string)
        - null
        - undefined
        - NaN
        - Everything else is truthy!

## Logical And, Or, Not
- And (&&)
- Or (||)
- Not (!)
```
true && true //true

true && false //false

1===1 && 2 < 7 // true

true || true //true
true||false //true
0||undefined //false

!null //true
!(1===1) //false
!false //true
```

- Swtich (not important):The switch statement is another control-flow statement that can replace multiple if statements.

```
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

```