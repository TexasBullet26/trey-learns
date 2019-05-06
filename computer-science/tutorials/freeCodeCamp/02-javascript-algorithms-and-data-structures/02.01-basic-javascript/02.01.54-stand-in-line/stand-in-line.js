/**
 * In Computer Science a *queue* is an abstract *Data Structure* where items
 * are kept in order. New items can be added at the back of the `queue` and
 * old items are taken off from the front of the `queue`.
 */

// Write a function `nextInLine` which takes an array (`arr`) and a number (`item`) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The `nextInLine` function should then return the element that was removed.
function nextInLine(arr, item) {
    // push `item` at the end of `arr`:
    arr.push(item);
    // Call the `shift()` method on `arr` to get the first item and store it in `removed`:
    var removed = arr.shift();
    // Return `removed`:
    return removed;
}

// Test Setup:
var testArr = [1, 2, 3, 4, 5];

// Display Code:
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log('After: ' + JSON.stringify(testArr));

// Example Run:
//------------------------------------------------------------
console.log(nextInLine([2, 1]));
// 1) Test `nextInLine([2, 1]);` runs.
// 2) The `nextInLine` function is called. `arr` becomes `[2]`. `item` becomes `1`.
// 3) `arr.push(item);` pushes `1` to `[2]`. So `arr` is now `[2, 1]`.
// 4) `var removed = arr.shift(); removes the first element. So `arr` is now `[1]`. `2` has been removed and is stored in `removed`.
// 5) `return removed;` `2` is returned.

// NOTE: You don't actually need the variable `removed`. The element removed can be returned directly using `return arr.shift();`.
