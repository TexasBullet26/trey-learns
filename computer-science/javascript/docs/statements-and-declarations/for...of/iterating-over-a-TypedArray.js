let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
    console.log(value);
}
/* LOGS: */
// 0
// 255
