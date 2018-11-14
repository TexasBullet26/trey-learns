## Formatted Print

In Rust printing is handled by a series of `macros` defined in `std::fmt` some of which include:

- `format!`: write formatted text to `String`
- `print!`: same as `format!` but the text is printed to the console (io::stdout)
- `println!`: same as `print!` but a newline is appended
- `eprint!`: same as `format!` but the text is printed to the standard error (io::stderr)
- `eprintln!`: same as `eprint!` but a newline is appended

All of these parse text in the same way. Formatting correctness will be checked at compile time.

```rust
fn main() {

    /* The `{}` will be automatically replaced with any arguments. These will be stringified. */
    println!("{} days", 31);

    /* There are various optional patterns this works with. Positional argument: */
    println!("{0}, this is {1}. {1}, this is {0}", "Alice", "Bob");

    /* Named arguments: */
    println!("{subject} {verb} {object}",
             object="the lazy dog",
             subject="the quick brown fox",
             verb="jumps over");

    /* Special formatting can be specified after a `:`. */
    println!("{} of {:b} people know binary, the other half doesn't", 1, 2);
}
```
