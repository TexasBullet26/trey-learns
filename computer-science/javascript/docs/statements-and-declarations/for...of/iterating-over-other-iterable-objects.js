/*********************************************************************************************
 *  You can also iterate over an object that explicitly implements the `iterable` protocol:  *
 *********************************************************************************************/
var iterable = {
    [Symbol.iterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return { value: this.i++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (var value of iterable) {
    console.log(value);
}
// LOGS:
// 0
// 1
// 2
