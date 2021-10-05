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

