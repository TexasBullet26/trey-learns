/**************************************************************************************
 *  You can iterate over `generators`, i.e. functions generating an iterable object:  *
 **************************************************************************************/
function* fibonacci() {
    let [previous, current] = [0, 1];
    while (true) {
        [previous, current] = [current, previous + current];
        yield current;
    }
}

for (let n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
        break;
    }
}
