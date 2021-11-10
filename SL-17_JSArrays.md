# JS Arrays
## What Matters In This Section
- Crucial!
    - Array basic-creating and updating
    - push and pop
    - shift and unshift
- Important
    - Concat, IndexOf
    - Slice & Splice
    - Multi Dimensional Arrays
## Arrays
- Examples

```
// make an empty array
let students = [];

// strings
let colors = ['red', 'yellow', 'blue'];

//numbers
let lottoNum = [1, 2, 3, 5];

// mix array
let stuff = [true, 3, 'cat', null]

// change array or assign new values

let stuff[0] = false
```

- Push and Pop
    - Push - add to end

    - Pop - remove from end

    - Shift - remove from start

    - Unshift - add to start
```
//Push is add an item to the end of an array

let colors = ['red', 'yellow'];
color.push('blue')  //the color list changed! colors = ['red', 'yellow', 'blue']

let cat = "cat";
cat.toUpper() //string cat does not change, unlike the array above. 


// Pop is remove an item from the end of an array
let colors = ['red', 'yellow', 'blue']
colors.pop() // colors = ['red', 'yellow']


let colors = ['red', 'yellow', 'blue']
let oneColor = colors.pop()
//colors = ['red', 'yellow']
//oneColor is 'blue'
```

- More methods 
    - concat - merge arrays

    - includes - look for a value

    - indexOf - just like string.indexOf

    - join - creates a string from an array
    - reverse - reverses an array
    - slice - copies a portion on an array
    - splice - removes/replaces elements
    - sort - sorts an array

Reference types and Equality testing



# JS Object Literals

## Object Intro
Objects are collections of properties.

Properties are a key-value pair

Rather than accessing data using an index, we use custom keys.

## Dictionary
- Using an object (Key-value pair)
![23]()