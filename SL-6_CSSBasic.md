# CSS: The Very Basics
## What Matters In This Section
- Crucial:
    - Conceptual overview of CSS
    - Basic CSS Syntax
    - Including styles correctly
    - Color system: RGB, Hex, etc
    - Font-family property
- Important:
    - Common text properties


## CSS (Cascading Style Sheets)
- Basic pattern: select sth, set a style.
    - For example:
    ```
    selector{
        property: value;
    }
    ```
- 3 ways to change style:
    - Inline style (bad)
        ```
        <h1 style="color:blue;">A Blue Heading</h1>
        <p style="color:red;">A red paragraph.</p>
        ```

    - Style element
        ```
        <html>
        <head>
        <style>
        h1 {color:red;}
        p {color:blue;}
        </style>
        </head>
        <body>

        <h1>A heading</h1>
        <p>A paragraph.</p>

        </body>
        </html>
        ```
    - External Stylesheet
        - another file: anyname.css
        - in another file:
            ``` 
            h2{
                color: red;
            }
            ```
        - **link element**
            ```
            <head>
            <link rel="stylesheet" href="anyname.css">
            </head>
            ```
## CSS Color, Background color, Font
- Color (text color and backgorund color) exmaple:
    ``` 
    h2{
        color: red;
        background-color: olive;
    }
    ```
- Find Color:
    - [Colors picker](https://htmlcolorcodes.com/color-picker/)
    - [Named Colors](https://htmlcolorcodes.com/color-names/)
    - Color: Find RGB
        - red: rgb(255, 0, 0,)
        - blue: rgb(0, 0, 255)
        - balck: rgb(0, 0, 0)
        - Hexadecimal
    
## Common Text Properties
- text align (within element)
- font weight: 100-900 define the font weight. 400 is the same as normal, and 700 is the same as bold
- text decoration (underline, overline, line through)
- line height

- [font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size): 
    - **px**: by far th emost commonly used absolute unit
- [font family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family): font mostly depends on the system. some font may not be supported by some system. To view more about font vs system: [https://www.cssfontstack.com/0](https://www.cssfontstack.com/)
- Example:
```
h1{
    text-align: center;
    font-weight: normal;
    text-decoration: blue underline wavy;
    letter-spacing: 15px;
    font-size: 100px;
    font-family: sans-serif; // you can put A, B, C as a backup. Or put a general one like sans-serif
}
p{
    text-align: right;
    font-weight: 400;
    text-decoration: line-through;
    line-height: 2; //double space
}

// remove text decoration (if originally has it.)
// a is the anchor tag, need to put anchor in html file
a{
    text-decoration: none
}
```