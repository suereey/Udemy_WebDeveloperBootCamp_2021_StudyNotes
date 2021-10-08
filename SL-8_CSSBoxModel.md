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
    - ![10](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/10.PNG)
    - properties:
        ![11](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/11.PNG)

        ```
        padding-right: 50px;
        ```

    - shorthand property:
        ![12](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/12.PNG)

        ```
        button{
            padding: 10px 20px 30px 40px;
        }
        ```
- Margin:
    - ![13](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/13.PNG)
    - properties
        ![14](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/14.PNG)
    - shorthand properties
        ![15](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/15.PNG)

## The Display Property
- property
![16](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/16.PNG)

```
display: inline
```

## CSS Units Revisited
- Two types:
    ![17](https://github.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/blob/main/screenshot/17.PNG)
    - In absolute unite: px most commonly used.![18](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/18.PNG)
    - In reletive:
        - Percentage
        ![19](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/19.PNG)
        - em
        ![20](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/20.PNG)
        - rem
        ![21](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/21.PNG)
        - vw & vh
        ![22](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/22.PNG)


- ems
- rems