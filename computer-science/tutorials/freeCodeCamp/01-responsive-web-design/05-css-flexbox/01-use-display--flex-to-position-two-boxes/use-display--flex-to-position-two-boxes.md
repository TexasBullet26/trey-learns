CSS Flexbox: 01 Use display: flex to Position Two Boxes

First will be theory, then practical, finishing with a tweet component that applies the flexbox concept.

Placing the CSS property `display: flex;` on an element allows you to use other flex properties to build a responsive page.

---

Add the CSS property `display` to `#box-container` and set its value to `flex`:

```html
<style>
  #box-container {
    height: 500px;
    display: flex:
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;

  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
