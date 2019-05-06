/*--------------------------------------------------------
|                                                        |
|    Basic JavaScript: Manipulate Arrays with push()     |
|                                                        |
--------------------------------------------------------*/

/**
 * An easy way to append data to the end of an array is via the `push()` function.
 * `.push()` takes one or more parameters and "pushes" them onto the end of the array.
 */

// Example:
var ourArray = ['Stimpson', 'J', 'cat'];
ourArray.push(['happy', 'joy']); // `ourArray` now equals `['Stimpson', 'J', 'cat', ['happy', 'joy']]`

// Setup:
var myArray = [['John', 23], ['cat', 2]];
// Push `['dog', 3]` onto the end of the `myArray` variable:
myArray.push(['dog', 3]); // `myArray` now equals `[['John', 23], ['cat', 2], ['dog', 3]]`
