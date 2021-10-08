# The CSS Box Model
## What Matters In This Section
- Crucial:
    - Width and Height
    - Border
    - Padding
    - Margin
    - Display Property
    - Units-percentages, EMS, & REMS
- Important:
- Nice to have:
    - Border Redius

## Box Model width and hieght; Borer and Border-radius; and Pratice
- CSS
![07](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/7.PNG)
- Inner content content box:
    ![08](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/8.PNG)
    - [Widte](width)
    - Height

- Borer and Border-radius:
    ![09](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/9.PNG)
    - Example
    ```
    #selectid{
        border-width: 5px; /*border size = box + 5 (left) and + 5 (right)*/
        box-sizing: border-box /*border size = box size*/
        border-color: black;
        border-style: solid;
    }
    ```
    ```
    border-radius: 10px;
    ```

## Box Model: Padding and Margin
- Padding:
    - ![10]()
    - properties:
        ![11]()

        ```
        padding-right: 50px;
        ```

    - shorthand property:
        ![12]()

        ```
        button{
            padding: 10px 20px 30px 40px;
        }
        ```
- Margin:
    - ![12]()
    - properties

## The Display Property