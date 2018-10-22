```javascript
function functionOrMethodName(argumentOne, argumentTwo) {
  Object.prototype.method();
  String.prototype.method();
  Array.prototype.method();
  Number.prototype.method();
  return type;
}
functionOrMethodName(paramOne === argumentOne, paramTwo === argumentTwo);

functionOrMethodName.method();
```

```js
new Object();
```

## Topcoder problems

1. **Introduction**: not too important. Is a high-level, real-world description of the problem to solve.
2. **Definition**: gives you the skeleton of the solution you need to write: class name, method name, arguments, and return type, followed by the complete method signature.
3. **Notes**: tend to be important reminders of things that you should pay attention to but might have missed, or they can also be things that are helpful background knowledge that you might not know beforehand. Extremely important.
4. **Constraints**: arguably the most important section. It lists specific constraints on the input variables. This lets you know crucial details such as how much memory to allocate or how efficient your algorithm will have to be.
5. **Set of Examples**: These give sample inputs against which you can test your problem. The given parameters will be in the correct order, followed by the expected return value and, optionally, an explanation of the test case.

## Example

## BettingMoney, the SRM 191 Division 2 Easy

- In the statement itself, we first have the situation behind the problem - gambling
- Then we have a little bit of background information about the betting itself
- Then, we have a description of the input - data types, variable names, and what they represent
- After this we have the task: _to determine what the net gain is for the day and return the amount in cents_

var secondsInHour = 3600
var minutesInHour = 60
var hour = 1
var hoursInDay = 24

var centsInDollar = 100
var Dollar = 1

## **Notes**:

- 100 cents in a dollar
- the return value may in fact be negative
- the margin of victory (the variable finalResult) is all that matters when deciding which payoff to make

## **Constraints**:

- the input arrays will contain the same number of elements, between 1 and 50, inclusive (50 is a long-standing topcoder tradition for input sizes)
- finalResult will be between 9 and that same size minus one (which means, if you give it a little thought, that someone will win their bet)
- Each element of each array will be between 0 and 5000, inclusive (this is most likely to make sure that integer arithmetic will do the job just fine)

```c++
#include std.io

public class BettingMoney()
```