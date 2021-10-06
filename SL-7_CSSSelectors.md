# The World of CSS Selectors
## What Matters In This Section
- Crucial:
    - Element Selector
    - Class Selector
    - ID Selector
    - Descendent Selector
    - **CSS Specificity**

- Important:
    - Adjacent Selector
    - Direct Descendent Selector
    - Attribute Selector
    - Pseudo Elements 
    - Pseudo Classes

- Reminder of CSS rules:
```
selector{
    property: value;
}
```
    - simple example:
    ```
    h1{
        color: purple;
    }
    ```
    - complex exmaple: select every other text input and give it a red border
    ```
    input[type = "text"]:nth-of-type(2n){
        border:2px solid red;
    }
    ```
## Universal & Element Selectors
- Universal selector: select all element
    ```
    * {
    color: green;
    }

    * {
    background-color: green;
    }
    ```
- Element selector:
    - Example: select all imgage
        ```
        img{
            width: 100px;
            height: 200px;
        }

        button{
            font-size:80px;
        }
        ```
- Selector list (use , to combine selector as a list)
    ```
    h1,h2{
        color: red;
    }
    ```
## ID selector
- select element with id 
```
#demo {
  border: red 2px solid;
}
```
## Class selector
- select element with class of xxx (for exmaple, class of complete)
```
.complete{
    color: green;
}
```
## Descendent selector and adjacent & direct descendent
- Descendenant selector example: select all <a>'s that are nested inside a <li>.
```
li a {
    color: red;
}
```
- Adjacent selector: change the A that right after B
select only the paragraphs that are immediately preceded by an <h1>
```
h1 + p{
    color: red;
}
```
- Direct child: select only the <li>'s that are direct children of a <div> element
```
div > li {
    color: red;
}
```
## Attribute selector
- Select element based upon some attribute
- Example: select all input elements where the type attribute is set to "text"
```
input[type = "text"] {
    width: 300px;
    color: yellow;
}
```

## Pseudo Classes
- Keyword added to a selector that specifies a special state of the selected elements
- Example: hover, active, check, nth-of-type
```
/*hover*/
button:hover{
    backgorund-color: red;
    color: white;
}
/*click*/
button:active{
    backgorund-color: black;
}
```
## Pseudo Elements 
- Keywrod added to a selector that lets you style a aprticular part of selected element(s)
- For example: ::after; ::before; :: selection
```
hs::first-letter{
    font-size: 50px;
}
```
## CSS Cascade 
- CSS Cascade: the order you styles are declared and linked to matters!
    - order matter
- WTF is specified
## TIP: Chrome Development Tools & CSS