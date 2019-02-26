/************************************
 *  Iterating over an Array object  *
 ************************************/

 // Declare and assign an array literal to `iterable` variable:
 let iterable = [10, 20, 30];

/*********************************************
 *  Declare a local variable named `value`   *
 *  and iterate over the `iterate` array,    *
 *  assigning `value` to each iteration + 1: *
 *********************************************/
for (let value of iterable) {
    value += 1;
    console.log(value);
}
/* LOGS: */
// 11
// 21
// 31

/**********************************************
 *  You can use `const` too if you don't      *
 *  reassign the variable inside the block:   *
 **********************************************/

// Declare and assign an array literal to `constIterable` variable:
 let constIterable = [10, 20, 30];

for (const value of constIterable) {
    console.log(value);
}
/* LOGS: */
// 10
// 20
// 30
