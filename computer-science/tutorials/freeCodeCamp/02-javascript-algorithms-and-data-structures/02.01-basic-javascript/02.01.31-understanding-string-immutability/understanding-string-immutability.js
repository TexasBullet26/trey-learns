/**
 * In JavaScript, `String` values are *immutable*, which means
 * that they cannot be altered once created.
 *
 * NOTE: Just the individual characters of a *string literal* cannot be changed.
 * The only way to change a `String` would be to assign it with a new string.
 */

// Setup:
var myStr = 'Jello World';

// myStr[0] = 'H'; // Fix Me

// Correct the assignment to `myStr` so it contains the string value of `Hello World`:
myStr = 'Hello World';

console.log(myStr); // Hello World
