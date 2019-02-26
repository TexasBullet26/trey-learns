/***************************************************************************************************************************
 *  The following example shows the difference between a `for...of` loop and a `for...in` loop when used with an `Array`.  *
 ***************************************************************************************************************************/
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

/***************************************************************************************************
 *  Every object will inherit the `objCustom` property and every object that is an `Array` will    *
 *  inherit the `arrCustom` property since these properties have been added to `Object.prototype`  *
 *  and `Array.prototype`, respectively. The object `iterable` inherits the properties             *
 *  `objCustom` and `arrCustom` because of `inheritance and the prototype chain`.                  *
 ***************************************************************************************************/

let iterable = [3, 5, 7];
iterable.foo = 'hello';

/************************************************************************************************************
 *  This loop logs only `enumerable properties` of the `iterable` object, in original insertion order.      *
 *  It doesn't log array elements `3`, `5`, `7` or `hello` because those are not enumerable properties, in  *
 *  fact they are not properties at all, they are values. It logs array indexes as well as `arrCustom`      *
 *  and `objCustom`, which are. If you're not sure why these properties are iterated over, there's a        *
 *  more thorough explanation of how `array iteration and for...in` work.                                   *
 ************************************************************************************************************/

for (let i in iterable) {
    console.log(i); // LOGS: 0, 1, 2, "foo", "arrCustom", "objCustom"
}

/******************************************************************************************************************
 *  This loop is similar to the first one, but it uses `hasOwnProperty()` to check if the found enumerable        *
 *  property is the object's own, i.e. not inherited. If it is, the property is logged. Properties `0`, `1`, `2`  *
 *  and `foo` are logged because they are own properties (not inherited). Properties `arrCustom` and `objCustom`  *
 *  are not logged because they are inherited.                                                                    *
 ******************************************************************************************************************/

for (let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i); // LOGS: 0, 1, 2, "foo"
    }
}

/*******************************************************************************
 *  This loop iterates and logs values that `iterable`, as an `iterable        *
 *  object`, defines to be iterated over. The object's elements `3`, `5`, `7`  *
 *  are shown, but none of the object's properties.                            *
 *******************************************************************************/

for (let i of iterable) {
    console.log(i); // LOGS: 3, 5, 7
}
