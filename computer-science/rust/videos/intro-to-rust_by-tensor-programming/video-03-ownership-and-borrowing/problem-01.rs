fn take(v: Vec<i32>) {
    println!("We took v: {}", v[10] + v[100]);
}
fn main() {
    let mut v = Vec::new(); // Defining a new Vector.
        i32
    for i in 1..1000 {  // Putting
        v.push(i);      // the data
    }                   // in the vector.

    take(v); // Transferring the ownership of the main function to the take function. We never return it back to the main function. This is called `Moving`.
    //println!("{}", v[0]);
    println!("Finished!");
}

`Moving`: moving one resource to the next function.
`Copying`:

Example of Copying:

```rust
fn cop(a: i32, b: i32) {
   println!("{}", a + b);
}

fn main() {
    let a = 32;
    let b = 45;

    cop(a,b);

    println!("we have a: {} and b: {}", a, b);

}
```
