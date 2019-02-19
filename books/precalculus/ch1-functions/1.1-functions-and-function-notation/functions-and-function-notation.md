# 1.1 Function and Function Notation

---

## Summary

In this section, you will:

- Determine whether a relation represents a function.
- Find the value of a function.
- Determine whether a function is one-to-one.
- Use the vertical line test to identify functions.
- Graph the functions listed in the library of functions.

### Determining Whether a Relation Represents a Function

**Relation**: is a set of ordered pairs.
**Domain**: the set of the first components of each **ordered pair**.
**Range**: the set of the second components of each ordered pair.

Consider:

`{(1, 2), (2, 4), (3, 6), (4, 8), (5, 10)}`

Domain is `{1, 2, 3, 4, 5}`.
Range is `{2, 4, 6, 8, 10}`.

- Each value in the domain is also known as an **input** value, or **independent variable**, and often labeled with `x`.
- Each value in the range is also known as an **output** value, or **dependent variable**, and often labeled with `y`.

A function `f` is a relation that assigns a single value in the range to each value in the domain.

_Example 1_: relates the first five **natural numbers** to numbers double their values:

- this relation is a function because each element in the domain, `{1, 2, 3, 4, 5}`, is paired with exactly one element in the range, `{2, 4, 6, 8, 10}`.

_Example 2_: consider the set of ordered pairs that relates the terms "even" and "odd" to the first five natural numbers. It would appear as:

`{(odd, 1), (even, 2), (odd, 3), (even, 4), (odd, 5)}`

`Domain: {even, odd}`

`Range: {1, 2, 3, 4, 5}`

- notice that each element in the domain, `{even, odd}` is _not_ paired with exactly one element in the range, `{1, 2, 3, 4, 5}`. This violates the definition of a function, so this relation is not a function.

Figure 1 below compares relations that are functions and not functions:

![](https://cnx.org/resources/d47bde493af93fa714bfc3dbe2a30008d2b7a5f0/CNX_Precalc_Figure_01_01_001.jpg)

_Figure 1_:

- (a) This relationship is a function because each input is associated with a single output. Input `q` and `r` both give output `n`.
- (b) This relationship is also a function. In this case, each input is associated with a single output.
- (c) This relationship is not a function because input `q` is associated with two different outputs.

---

**Function**: is a relation in which each possible input value leads to exactly one output value. We say "the output is a function of the input".

- The **input** value makes up the **domain**.
- The **output** value makes up the **range**.

---

#### Solve

---

How To:

**Given a relationship between two quantities, determine whether the relationship is a function**.

1. Identify the input values.
2. Identify the output values.
3. If each input value leads to only one output value, classify the relationship as a function. If any input value leads to two or more outputs, do not classify the relationship as a function.

---

---

**Determining if Menu Price Lists are Functions**

The coffee shop menu consists of items and their prices.

- a. Is price a function of the item?
- b. Is the item a function of the price?

-[](https://cnx.org/resources/628598f20aa79562d901ad8842b1a402adfeb5c2/CNX_Precalc_Figure_01_01_004.jpg)

**Solution**

1. Input values (`x`): **Item** - `Plain Donut`, `Jelly Donut`, and `Chocolate Donut`.
2. Output values (`y`): **Price** - `1.49` and `1.99`.

- a. Considering the input as the items on the menu. The output values are then the prices:

Item | Price

Plain Donut --> | 1.49
Jelly Donut --> | 1.99
Chocolate Donut --> | 1.99

- Each item on the menu has only one price, so `the price is a function of the item`.
  `{(Plain Donut, 1.49), (Jelly Donut, 1.99), (Chocolate Donut, 1.99)}`

- Domain: {Plain Donut, Jelly Donut, Chocolate Donut}
- Range: {1.49, 1.99}

- b. Two items on the menu have the same price. If we consider the prices to be the input values and the items to be the output, then the same input value could have more than one output associated with it. Therefore, `the item is not a function of price`.
  `{(1.49, Plain Donut), (1.99, Jelly Donut), (1.99, Chocolate Donut, 1.99)}`

- Domain: {1.49, 1.99}
- Range: {Plain Donut, Jelly Donut, Chocolate Donut}

---

---

**Determining if Class Grade Rules are Functions**

In a particular math class, the overall percent grade corresponds to a grade point average.

- a. Is grade point average a function of the percent grade?
- b. Is the percent grade a function of the grade point average?

**Percent grade**: 0-56, 57-61, 62-66, 67-71, 72-77, 78-86, 87-91, 92-100
**Grade point average**: 0.0, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0

**Solution**

- a. `The grade point average is a function of the percent grade`:

  - `{(0-56, 0.0), (57-61, 1.0), (62-66, 1.5), (67-71, 2.0), (72-77, 2.5), (78-86, 3.0), (87-91, 3.5), (92-100, 4.0)}`

  - For any percent grade earned, there is an associated grade point average, so the grade point average is a function of the percent grade. In other words, if we input the percent grade, the output is a specific grade point average.

- b. `The percent grade is not a function of grade point average`:

  - In the grading system given, there is a range of percent grades that correspond to the same grade point average. For example, students who receive a grade point average of 3.0 could have a variety of percent grades ranging from 78 all the way to 86. Thus, percent grade is not a function of grade point average.

---

### Using Function Notation

**Function Notation**: is one representation that facilitates working with functions. The notation `y = f(x)` defines a function named `f`. This is read a "y is a function of x." The letter `x` represents the input value, or independent variable. The letter `y`, or `f(x)`, represents the output value, or dependent variable.

Once we determine that a relationship is a function, we need to display and define the functional relationships so that we can understand and use them, and sometimes also so that we can program them into computers. There are various ways of representing functions. A standard **function notation** is one representation that facilitates working with functions.

To represent "height is a function of age," we start by identifying the descriptive variables `h` for `height` and `a` for `age`. The letters `f`, `g`, and `h` are often used to represent functions just as we use `x`, `y`, and `z` to represent numbers and `A`, `B`, and `C` to represent sets.

`h is f of a` - We name the function `f`; `height is a function of age`.
`h = f(a)` - We use parenthesis to indicate the `function input`.
`f(a)` - We name the function `f`; `the expression is read as "f of a".`

**Using Function Notation for Days in a Month**

---

**Solution for April**

`30 = f(April)`

`days = f(month)` or `d = f(m)`

The date is dependent on the month

**Analysis**

---

Inputs to a function do not have to be numbers; function inputs can be:

- names of people
- labels of geometric objects
- or any other element that determines some kind of output

**Example Problem**

Interpreting Function Notation

A `function N = f(y)` gives the number of police officers, `N`, in a town in a year `y`. What does `f (2005) = 300` represent.

`year = f(numberOfPoliceOfficers)`

In `2005` there were `300` police officers in town `N`

**Example Problem**

Use function notation to express the weight of a pig in pounds as a function of its age in days `d`

`weight = f(daysOfAge)`

A pig is Number: `weight` when Number: `daysOfAge` days old
