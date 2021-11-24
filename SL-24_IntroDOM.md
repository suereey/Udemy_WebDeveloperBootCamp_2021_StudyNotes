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
    - innerHTML
