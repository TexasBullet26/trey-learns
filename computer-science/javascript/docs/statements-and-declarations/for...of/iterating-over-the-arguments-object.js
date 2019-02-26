/*************************************************
 *  You can iterate over the `arguments` object  *
 *  to examine all of the parameters passed      *
 *  into a JavaScript function:                  *
 *************************************************/
(function() {
    for (let argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);
// LOGS:
// 1
// 2
// 3
