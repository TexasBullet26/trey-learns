## Ownership and Borrowing in Rust

---

**Memory Management**

- `Stack` vs. `Heap` memory at runtime

  - `Stack` is more for array like data structures and always goes Last In Last Out (LIFO). Pushing onto the stack and popping off the stack. The memory is connected. Is faster because the CPU never has to look-up new data or a place to get the data from because the place is always at the top of the stack.

    - In Rust, `Integers`, `Booleans`, and `Slice of Strings` are stored on the stack.

  - `Heap`: for more complicated data. This is where `pointers` and `references` come in handy. Think of a `Heap` as like a pile of memory. We have a big pile of memory and a bunch of `pointers` that point to various memory locations. The heap is a little bit slower than the stack because the CPU has to follow a pointer down to where the actual data is being stored.

  - Languages like C++ and C use pointers and references for manual memory management. There is danger in this. If you have two pointers that point to the same piece of data and then you dereference both of those pointers, it could cause `memory corruption`. So higher level languages like Java, Python, C#, and Ruby have garbage collection. A garbage collector is basically an algorithm that moves around, finds all the free memory, and then releases it automatically. _In Rust we have something called `ownership`_.

**Ownership**

- Ownership follows three rules:

  - Each variable has a value and a variable itself is called an owner. Example:

```rust
fn main() {
    let x = 1; // We can say that 'x owns 1'. Since 1 is a literal, it is stored on the stack.
}
```

- Each piece of data can only have one owner at a time. When the owner goes out of scope, the value will be dropped. Example:

```rust
fn main() {
    let x = 1;
    let y = x;
    {
      let a = 10
    }

    x + a; // ERROR
}
```

Let's look at this example:

```rust
fn main() {
    let s = String::from("String"); // s owns a String at this point.
    let y = s; // Now we want to bind s to y.

    println!("{}", s); // Error because we are moving the reference.

}
```

**Only one reference can own one piece of data at a time**. To fix the error above, we can use what is called `borrowing`. "A reference".

```rust
fn main() {
    let s = String::from("String");
    let y = &s; // "We want y to borrow s for a moment".

    println!("{}", s);
}
```
