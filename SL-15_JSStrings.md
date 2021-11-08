# JS strings and more

## What Matters In This Section
- Crucial!
    - String basics
    - Indices and Length
    - Undefined & null
    - String methods
    - String template literals

- Important
    - random numbers and math object
- Nice to have

## String Intro, Indices and Lengths
```
let firstName = "Tom";
let firstName = 'Tom'; //work but be consistent

"ab" + "cd" //return "abcd";
let firstName = "ab";
let lastName = "cd";
let fullName = firstName + "  " + lastName

1 + "hi" //return "1hi" not error
```

## String Methods
- methods are built in actions we can perform with individual strings
- [more methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- example
```
let msg = "good"

msg.toUpperCase() //present in upper case but the original msg doesn't change
msg.length() 

let greeting = '  good   '
greeting.trim() //return 'good', remove spaces in the beginning and end
```

- String method with arguments, example:
```
"abcdefg".searchFor('a')
```

```
let tvShow = 'catdog';

tvShow.indexOf('cat'); //0
tvShow.indexOf('dog'); //3
tvShow.indexOf('z'); //-1 not found

tvShow.slice(5,7) //slice the beginning and the end of the index

tvShow.replace("cat" to "keit")
```
## Template literals

```
`hello ${1+2+9}`; \\ return hello 12
'hello ${1+2+9}'; \\ return hello ${1+2+9}

```

## Undefined and Null
- Null: "Intentional absence of any value" Must be assigned

- Undefined: Variables that do not have an assigned value are undefined

## Math method
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

```
Math.random(); //generate random method 0 < num < 1
```