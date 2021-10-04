# HTML: Forms & Tables
## What Matters In This Section
- Crucial:
    - Table Basics: <table>, <tr>, <td>, and <th>
    - Form Element Basics
    - Button Elment
    - Labels
    - Common input type

- Important
    - Table Sections: <thread>, <tfoot>, <tbody>
    - Range & Text Areas
    - Form Valication
- Nice to have:
    - Table coispan and Rowspan

## HTML Table: TR, TD, and TH Elements || Thead, Tbody, and Tfoot
- Example of Table element:
![03](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/3_TableElement.PNG)
- td: cell of a table that contains data.
- tr: row
- th: header

```
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

## Tables: Colspan & Rowspan
- Example
```
<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
</head>
<body>

<h2>Cell that spans two columns</h2>
<p>To make a cell span more than one column, use the colspan attribute.</p>

<table style="width:100%">
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>
</body>
</html>
```
![04](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/4_Table.PNG)

## HTML Form, input, label, button
- Form: represents a document section containing interactive controls for submitting information.
- Elements in form:
    - [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
    - [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
    ```
    <div class="preference">
        <label for="cheese">Do you like cheese?</label>
        <input type="checkbox" name="cheese" id="cheese">
    </div>

    <div class="preference">
        <label for="peas">Do you like peas?</label>
        <input type="checkbox" name="peas" id="peas">
    </div>
    ```
    <div class="preference">
        <label for="cheese">Do you like cheese?</label>
        <input type="checkbox" name="cheese" id="cheese">
    </div>

    <div class="preference">
        <label for="peas">Do you like peas?</label>
        <input type="checkbox" name="peas" id="peas">
    </div>

    ![05](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/5_Form.PNG)
    
    - button: If you have a button in a form, the default action will be submit the form.
    - name
    - validations

