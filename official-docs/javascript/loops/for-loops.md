## for loop

The `for` statement creates a loop that consists of three optional expressions, enclosed in parenthesis and separated by semicolons, followed by one or more statements that will be executed in the loop.

**Basic Syntax**

```javascript
for (initialization; condition; finalExpression) {
    statement(s);
}
```

**Components**

-   `initialization`: An expression or variable declaration that is typically used to initialize a counter variable.

-   `condition`: This is the _termination condition_, which is an expression that's evaluated before each pass through the loop. If this expression evaluates to true, then `statement` is executed. If the expression evaluates to false, execution jumps to the first line of code after the end of the loop. If this statement is omitted, then `condition` always evaluates to true.

-   `finalExpression`: An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`.

-   `statement`: The statement (or statements) that is executed each time `condition` evaluates to true.

_**Important Notes**_

-   The `initialization`, `condition`, and `finalExpression` in the head of the `for` loop are _optional_, but are generally always used.

-   The head of a `for` loop typically looks like `for (var i = 0; i < maxValue; i++)`, where `maxValue` is the maximum value you wish to iterate until.

### Examples

Print all the integers in the range from 1 to some number given as input:

```javascript
process.stdin.on('data', function(data) {
    main(+data);
});

function main(input) {
    for (var i = 1; i <= input; i++) {
        process.stdout.write(i + ' ');
    }
}
```

**Initialize**

In this example, we omit the `initialization` expression and instead initialize the variable used in `condition` and `finalExpression` before our loop:

```javascript
function main(input) {
    var i = 1;

    for (; i <= input; i++) {
        process.stdout.write(i + ' ');
    }
}
```

**Condition**

In this example, we omit the `condition` expression and instead add an `if` statement inside the loop that terminates the loop once a condition `i > input` is satisfied:

```javascript
function main(input) {
    for (var i = 1; ; i++) {
        if (i > input) {
            break;
        }

        process.stdout.write(i + ' ');
    }
}
```

**Infinite Loop**

If we omit all three blocks, our loop will run infinitely or until such a time as we call `break;` form inside the loop. In this example, we do just that:

```javascript
function main(input) {
    var i = 1;

    for (;;) {
        if (i > input) {
            break;
        }

        process.stdout.write(i + ' ');
        i++;
    }
}
```
