/* Rest Parameter: Aggregation of remaining arguments into single parameter of variadic functions. */
function f (x, y, ...a) {
  return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9 // true
