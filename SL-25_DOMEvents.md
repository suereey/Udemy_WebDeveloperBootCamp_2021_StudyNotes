# DOM Events

## Inline event
- Example html code: not recommanded!
```
<h1>Events</h1>
<button onclick="alert('you clicked me!'); alert('stop clicking')">Click Me!</button>

<button id="v2">Click Me (2nd version)</button>

<button id="v3">Click Me (3rd version)</button>

<button id="tas">Twist & Shout</button>

<script src="app.js"></script>
```

## Onclick Property
- Example:
    - link html to js throught the script in above code. 
    - Then set up in js file in below code.
```
const btn = document.querySelector('#v2'); //select the button v2

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
```

- [Other similar properties as onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)


Hard to have same functions for the same event. Hence, use below addEventListener is better!
## addEventListener (recommanded method!)
- Example:
```
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})
```

```
function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// Onclick Will not work here:
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// addEventListener Will work here:
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
```

## Events & The Keyword This
- Example: 
    - select all buttons, change each button's style
    - select all h1, change their style
```
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}
```
Do this in a generic way:
```
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

```