# Intro to DOM
## Intro to DOM
Document Object Model (DOM)

The DOM is a JavaScript representation of a webpage. 

It's your JS "window" into the contents of a webpage

It's just a bunch of objects that you can interact with via JS.

## Document Object
The  document object is our entry point into the world of the DOM. It contains representations of all the content on a page, plus tons of useful methods and properties

![30](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/30.PNG)

## Select Element
### getElementById
Select elements. For example: make all links blue

getElementById

getElementsByTagName

getElementsByClassName

```
document.getElementById('chicken') 
// if no this id, return null
// if there is a id, return the id


const toc = document.getElementById('toc')
console.dir(toc)
```

### Query Selector
- Select one
```
//Finds first h1 element:
document.querySelector('h1');

//First element with ID of red
document.querySelector('#red');

// Finds first element with class of big
document.querySelector('.big');

// Select attribute
document.querySelector('a[title = "Java"]') // a is the anchor tag
```

- Select ALL

```
document.querySelectorAll('p')

//select all the anchlor tag inside the paragraph
document.querySelectorAll('p a')
```

## Manipulate
- Important ones
![31](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/31.PNG)

    - innerText
    - textContent (slightly different from innerText): Show EVERYTHING; when content set as not displya, textContent still show, but innerText doesn't
    - innerHTML: different from innerText (only contian text), innerHTML contain HTML element as well. textContent shows these element as space, inner HTML shows the actual element.

```
document.quereySelector('h1').innerHTML
```

## Attribute
- change id: 
```
//change the banner's id
//<img id = "banner" src ="the link to the image" alt>

document.quereySelector('#banner').id //return banner

document.quereySelector('#banner').id = 'whoops' //the id banner changed into whoops
```

- change link:
```
document.querySelector('a').title //return "ABCD"

const firstLink = document.quereySelector('a')
firstLink.href //return the link in a form of "file:///wiki/Link"

firstLink.getAttribute('href') //return in a form of "/wiki.Link"

firstLink.setAttribute('href', 'http://google.com")  //change the the link to google .com
```

```
const input = document.querySelector('input[type='text']')

input.type //return text

input.type = 'password' //the input type chaged to password
```

## Set css properties using DOM
- Only in=line stype property shows in DOM. but CSS property can be changed by DOM.

```
h1.stype.color = 'green';

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.color = red;
}
```

- get computed style
```
window.getComputedStyle(h1);

window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;
```

## css class

- Exmaple, change the style of the 1st h2.
purple is a class in css that tyle the content in color purple.
```
const h2 = document.querySelector('h2');
h2.getAttribute('class') //retun null
h2.setAttribute('class', 'purple') //return purple

//set 2 classes, for example, 1 color + 1 font

h2.setAttribute('class', 'color font')

//Or you can add one by one as:
h2.classList.add('color');
h2.classList.add('font');

h2.classList.remove('font');

h2.classList.contains('color'); //return true
h2.classList.contains('font'); //return false

h2.classList.toggle('font') //switch between on/off
```

## parent and child element

```
xxx.parentElement
xxx.parentElement.parentElement

xxx.childElementCount //return how many child elements there are
xxx.children //return the children
xxx.children[0] //return the 1st child

A.children[0].parentElement //return A
```

## create element in DOM
- [create element](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) : Document.createElement()
- [append element](https://developer.mozilla.org/en-US/docs/Web/API/Element/append): Element.append()

## remove element
- [remove child](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)