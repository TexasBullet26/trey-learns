// Example 1:
var params = [ "hello", true, 7 ]
var other = [ 1, 2 ].concat(params) // [ 1, 2, "hello", true, 7 ]

// Example 2:
function f(x, y) {
  var a = Array.prototype.slice.call(arguments, 2)
  return (x + y) * a.length
}
f.apply(undefined, [ 1, 2 ].concat(params)) === 9 // true

// Example 3:
var str = "foo"
var chars = str.split("") // [ "f", "o", "o" ]
