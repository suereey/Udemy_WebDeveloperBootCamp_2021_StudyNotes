# HTML: Next Steps &Semantics
## What Matters In This Section
- Crucial:
    - Understanding what HTML5 actually is
    - Block vs. line elements
    - < span > and < div > element
    - Semantic elements

- Nice to have
    ```
    - VSCode tip: Emmet
    - <sub> elements
    - <hr> elements
    - <sup> elements
    - <br> elements
    ```

## HTML5
- HTML5 is the latest evolution of the standard that defins HTML. It includes new elements & features for browsers to implement
- [HTML **standard** (how it should work)](https://html.spec.whatwg.org/#is-this-html5?)

## Block and inline elements
- Terms refer to how a given element actually fits in with the flow of content in a document
- **Block elemnt**: paragraph, heading (h1, h2)
    - **div**: a container that group things together. Helpful when using css.
    ```
    <div class="warning">
    <img src="/media/examples/leopard.jpg"
         alt="An intimidating leopard.">
    <p>Beware of the leopard</p>
    </div>
    ```
- **inline element**: anchor tag
    - **span**:  group elements for styling purposes

    ![02_span](https://raw.githubusercontent.com/suereey/Udemy_WebDeveloperBootCamp_2021_StudyNotes/main/screenshot/2_span.PNG)
## An Odd Assortment of Elements: HR, BR, Sup, & Sub
- HR: the horizontal rule element.
```
<hr>
```
<hr>
-BR: line break

```
write a peom <br>
write a peom <br>
write a peom <br>
```

write a peom <br>
write a peom <br>
write a peom <br>
- Sup and Sub: 
```
<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>

<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>
```
<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>

<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>


## HTML Entity code
- [All entity code](https://dev.w3.org/html5/html-author/charref)
- When you use it, google (x HTML entity). Common problem symbol: <, >, & ...
- Example: 
```
1 &le; 6
```
1 &le; 6


## Intro to Semantic Markup
- Some examples:
    - main:  the dominant content of the body, such as side bars, site log, site forums
    ```
    <main>
    ```
    - nav: present anything on the page with navigation link
    - section: a section of website
    - article
    - aside
    - time
    - figure

        ...

## Recommend using Emmet for VScode
- [Emmet Documentation](https://docs.emmet.io/)