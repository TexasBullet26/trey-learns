/*
 *  Spread Operator: Spreading of elements of an iterable collection 
 *  (like an array or even a string) into both literal elements and 
 *  individual function parameters.
 */

// Example 1:
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

// Example 2:
function f(x, y, ...a) {
  return (x + y) * a.length
}
f(1, 2, ...params) === 9 // true

// Example 3:
var str = "money"
var chars = [ ...str ] // [ "m", "o", "n", "e", "y" ]
