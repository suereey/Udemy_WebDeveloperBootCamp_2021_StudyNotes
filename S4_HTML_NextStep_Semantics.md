# HTML: Next Steps &Semantics
## What Matters In This Section
- Crucial:
    - Understanding what HTML5 actually is
    - Block vs. line elements
    - <span> and <div> element
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
    
    ![02_span]()