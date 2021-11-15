# JS Loops

## Intro of Loops
- Loops allow us to repeat code

"Print 'hello' 10 times

Sum all numbers in an array

There are multiple types:

    - for loop

    - while loop

    - for...of loop

    - for...in loop

- Syntax and Example

```
for (let i = 1; i <=10; i++) {
    console.log(i);
}

// Loop an array
const animlas = ['elephant', 'monkey', 'cat'];

for (let i = 0; i < animals.length; i++>) {
    console.log(i, animals[i]);
}
```

- Nested loop
![24]()

- While loop

```
let num = 0;
while (num < 10>) {
    console.log(num);
    num++;
}
```
- important keywords for while loop: break

- For of loop

```
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

for (let i = 0; i < subreddits,length; i++>) {
    console.log('visit reddit.com/r/${subreddits[i]}')
}

for (let sub of subreddits){
    console.log(sub)
    conosle.log('visit reddit.com/r/${sub}')
}
```


