# New JS Features
## Default parameter
```
function rollDie(numSides) {
    return Math.floor(Math.random()*numSides) + 1;
}

rollDie() //return NaN

function rollDie(numSides = 6) {
    return Math.floor(Math.random()*numSides) + 1;
}

rollDie() //set a default value to 6


```
## Spread with function call & aRRAY lITERALS & oBJECTS
Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- Spread function calls: Expands an iterable (array, string, etc.) into a list of arguments .
    - Example 1:
    ```
    const nums = [9, 3, 2, 8];

    Math.max(9, 3, 2, 8); //return 9
    Math.max(nums); //return NaN
    Math.max(...nums) //return 9. the ... is spreading
    ```

    - Example 2:
    ```
    console.log("hello"); //print hello
    console.log(..."hello"); //print h e l l o. this is the same as:
    console.log("h", "e", "l", "l", "o");
    ```

- Spread Array literals: Create a new array using an existing array. Spreads the elements from one array into a new array.
    - Example 1:
    ```
    const cats = ["a", "b", "c"]
    const dogs = ["AAA", "BB"]

    const allPets = [...cats] //copy the cats array

    //change allPets does not change cats
    allPets.push("dddd") //allPets = ["a", "b", "c", "dddd"]; cats = ["a", "b", "c"]

    //combine cats and dogs
    const allPets = [...cats, ...dogs]
    const allPets = [...cats, ...dogs, "add another thing"]
    ```
    
- Spread Objects: Copies properties from one object into another object literal

## Rest Parameter
Collects all remaining arguments into an actual array

![26]()

## Destructuring array and object
- Destructuring array: A short, clean syntax to 'unpack': Values from arrays Properties from objects Into distinct variables.
    - Example
    ![27]()
