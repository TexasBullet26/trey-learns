## A Beginner's Guide to Big O Notation

---

> The term `Big O notation` is used to describe the performance or complexity of an algorithm.

`Big O` itself describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

Below are some common orders of growth along with descriptions and examples where possible:

### `O(1)`

> `O(1)` describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.

```c
bool IsFirstElementNull(IList<string> elements)
{
  return elements[0] == null;
}
```

### `O(N)`

> `O(N)` describes an algorithm whose performance will grow _linearly_ and in direct proportion to the size of the input data set.

The example below also demonstrates how Big O favors the worst-case performance scenario; a matching string could be found during any iteration of the `for` loop and the function would return early, but Big O notation will always assume the upper limit where the algorithms will perform the maximum number of iterations:

```js
bool ContainsValue(IList<string> elements, string value)
{
  foreach (var element in elements)
  {
    if (element == value) return true;
  }

  return false;
}
```

```js
function sumOfMultiples(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
```

### `O(N^2)`

> `O(N^2)` represents an algorithm whose performance is directly proportional to the square of the size of the input data set.

This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N^3), O(N^4) etc.

```js
bool ContainsDuplicates(IList<string> elements)
{
  for (var outer = 0; outer < elements.Count; outer++)
  {
    for (var inner = 0; inner < elements.Count; inner++)
    {
      // Don't compare with self
      if (outer == inner) continue;

      if (elements[outer] == elements[inner]) return true;
    }
  }

  return false;
}
```

### `O(2^N)`

> `O(2^N)` denotes an algorithm whose growth doubles with each addition to the input data set.

The growth curve of an `O(2^N)` function is exponential - starting off very shallow, then rising meteorically. An example of an `O(2^N)` function is the recursive calculation of Fibonacci numbers:

```js
int Fibonacci(int number)
{
  if (number <= 1) return number;

  return Fibonacci(number - 2) + Fibonacci(number - 1);
}
```

## Logarithms

---

`Logarithms` are slightly trickier to explain, so a common example will be shown:

[`Binary search`](http://en.wikipedia.org/wiki/Binary_search) is a technique used to search sorted data sets.

It works by selecting the middle element of the data set, essentially the median, and compares it against a target value. If the values match it return successful. If the target value is higher than the value of the probe element it will take the upper half of the data set and perform the same operation against it. Likewise, if the target value is lower than the value of the probe element it will perform the operation against the lower half. It will continue to halve the data set with each iteration until it can no longer split the data set.

This type of algorithm is described as **O(log N)**. The iterative halving of data sets described in the binary search example produces a growth curve that peaks at the beginning and slowly flattens out as the size of the data sets increase e.g. an input data set containing 10 items takes one second to complete, a data set containing 100 items takes two seconds, and a data set containing 1000 items will take three seconds. Doubling the size of the input data set has little effect on its growth as after a single iteration of the algorithm the data set will be halved and therefore on a par with an input data set half the size. This makes algorithms like _binary search_ extremely efficient when dealing with large data sets.

**More Information:**

- Usually people get stuck understanding and relating Mathematical Notations Functions and Complex Equations with Code.
- `O(log N)` is the theoretical limit for searching a data set.
- `O(log N)` is log base 2.
- Instead of saying, "Big O specifically describes the worst-case scenario". Big-O notation just describes asymptotic bounds, so it is correct to say something like: "Quicksort is in O(n!)," even though Quicksort's actual worst-case running time will never exceed O(n^2). All Big-O is saying is "for an input of size `n`, there is a value of `n` after which quicksort will always take less than `n!` steps to complete." It does not say "Quicksort will take `n!` steps in the worst case."

The graph below compares the running times of various algorithms:

- `Linear` -- `O(n)`
- `Quadratic` -- `O(n^2)`
- `Cubic` -- `O(n^3)`
- `Logarithmic` -- `O(log n)`
- `Exponential` -- `O(2^n)`
- `Square root` -- `O(sqrt n)`

![](http://science.slc.edu/~jmarshall/courses/2002/spring/cs50/BigO/running-times.gif)

Comparison of algorithms in terms of the maximum problem size they can handle:

| Algorithm Complexity | Running time `T(n)` (measured in seconds on an Apple Delicious computer) | Maximum problem size given 1000 seconds on an Apple Delicious | Computer Speed x 10 (Maximum problem size given 1000 seconds on a Power Delicious(or 10,000 seconds on a classic Delicious)) |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `O(n)`               | `100n`                                                                   | `n = 10`                                                      | `n = 100` (x10 increase)                                                                                                     |
| `O(n^2)`             | `5n^2`                                                                   | `n = 14`                                                      | `n = 45` (x3)                                                                                                                |
| `O(n^3)`             | `1/2 n^3`                                                                | `n = 12`                                                      | `n = 27` (x2)                                                                                                                |
| `O(2^n)`             | `2^n`                                                                    | `n = 10`                                                      | `n = 13` (x1.3)                                                                                                              |
| `O(sqrt n)`          | `400 sqrt(n)`                                                            | `n = 6`                                                       | `n = 625` (x100)                                                                                                             |
| `O(log n)`           | `400 log(n)`                                                             | `n = 12`                                                      | `n = 72 billion` (x6 billion)                                                                                                |

MORAL: Cheaper, faster computers mean bigger problems to solve.
Bigger problems to solve mean efficiency is _more_ important.

For more in depth information on Big O and Logarithms, take a look at their respective _Wikipedia entries: [Big O Notation](http://en.wikipedia.org/wiki/Big_O_notation) and [Logarithms](http://en.wikipedia.org/wiki/Logarithm)_
