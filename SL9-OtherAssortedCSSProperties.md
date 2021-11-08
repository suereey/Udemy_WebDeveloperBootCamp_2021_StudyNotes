# Other Assorted Useful CSS Properties
- Crucial
    - Transitions
    - Position property
- Important
    - Opacity & Alpha Channel
    - Google fonts
    - Background property

- Nice to have
    - Transforms

## Opacity & The Alpha Channel
- rgba(0, 209, 112, 0.5) 
/corresponding to red, green, blue, alpha (transparent)*/
- opacity: entire elements, unlike rgba only 1 element

```
opacity: 0.5;
```

## The position property
- [position domentation](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- Static, relative, absolute, fixed
## CSS Transitions and Transforms
- what you can spcify in transition
    - property name that we want to animate
    - duration
    - [timing function](https://easings.net/) 
    - delay

## Fancy Button Hover Effect

```
body{
    font-family:'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: 100 vh;
    background-color: #151b29;
}

button{
    background: none;
    color: #ffa260;
    border: 2px solid;
    padding: 1em 2em;
    font-size: 1em;
    transition: all 0.5s;
}

butoon:hoever{
    border-color: yellow;
    color: white;
    box-shadow: 0 0.5em 0.5em -0.4em #f1ff5c;
    transform: translateY(-0.25em);

}
```

## Background
- [background photo resource](https://unsplash.com/)
## Google font (free)
https://fonts.google.com/