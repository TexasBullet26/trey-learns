let iterable = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (let entry of iterable) {
    console.log(entry);
}
// LOGS:
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
    console.log(value);
}
// LOGS:
// 1
// 2
// 3
