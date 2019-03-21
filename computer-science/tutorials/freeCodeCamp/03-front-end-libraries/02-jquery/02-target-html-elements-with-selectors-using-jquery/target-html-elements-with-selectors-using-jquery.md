# jQuery: 02 - Target HTML Elements with Selectors Using jQuery

Now we have a `document ready function`.

Now let's write our first jQuery statement. **All jQuery functions start with a `$`**, usually referred to as a `dollar sign operator`, or as `bling`.

jQuery often selects an HTML element with a `selector`, then does something to that element.

For example, let's make all of our `button` elements bounce. Just add this code inside your document ready function:

`$("button").addClass("animated bounce");`

Note that in order to add this, we have to include both the jQuery library and the Animate.css library. We are using jQuery to apply the Animate.css `bounce` class to our `button` elements.

Example:

```html
<script>
    $(document).ready(function() {
        $('button').addClass('animated bounce');
    });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
        </div>
        <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
        </div>
    </div>
</div>
```
