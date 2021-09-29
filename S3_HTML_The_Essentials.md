# HTML: The Essentials
## What Matters In This Section
- Crucial:
    - Paragraph elements
    - HTML Headings
    - HTML Lists
    - HTML Anchor Tags
    - HTML Images
    - HTML Boilerplate
- Important:
    - Using MDN as a resource
    - The Chrome inspector
- Nice to have: VSCode formating on save

## Intro to HTML
- HTML(hypertext markup language): HTML is a markup language
- **HTML Element**: To write HTML, we pick from a set of standard Elements that all browsers recognize. Common Elements include:
    - *<p>* element - represents a paragraph of text
    - *<h1>* element - represents the main header on a page
    - *<img>* element - embeds an image
    - *<form>* element - represents a form
- Define the Element in a form with opening an dclosing tag:
    ```
    <p> I am a paragraph </p>
    ```

## What do HTML/CSS/JS do?
- HTML: the content of the page
- CSS: describes that structure and how it should look
- JS: building the acutal logic, the action, the verbs of the webpage
- Calculator example:
    - Only HTML: the number key, the reset key
    - HTML + CSS: KEY + format (looks better but no calculation)

- Resources for developers: TIP: Mozilla Developer Network
    - [resourcefordeveloper](https://developer.mozilla.org/en-US/)
    - [elemetns](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## Paragraph Element
- add the < p > and the ending tag to start and end a paragraph
## Heading Element
![1_headings](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/1_HTML_Headings.PNG)

## HTML Boilerplate (HTML Skeleton)
```
<!DOCTYPE html>
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```
- title: not show up on page. But 1) show on the tab, and 2) google use it to show the link (what shows up when you google it)
- One head one body
- In vscode, input "!", then press tab, it will give you the skeleton!.
- Also, vscode can help you format the document! You can set auto format as well.

## List element
- OL (ordered list): numbers
- UL (unordered list): bullet points
```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
- Example of nested list:
```
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

## Anchor tags
- Anchlor tags: creates a hyperlink to web pages, files, email addresses...

```
<p>You can reach Michael at:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
```

## Image element
```
<img src="location of your image">
```

## Comment
```
<!-- Comment section -->
```
