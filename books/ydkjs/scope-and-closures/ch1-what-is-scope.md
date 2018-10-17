# YDKJS: Chapter 1: What is Scope?

---

`State`: the ability to store values and pull values out of variables.

`Scope`: well-defined set of rules for storing variables in some location, and for finding those variables at a later time.

## Compiler Theory

In a traditional compilation process, a chunk of source code will undergo three steps before it is executed. This is called `compilation`.

**Three steps of compilation**

1. **Tokenizing/Lexing**: breaking up a string of characters into meaningful chunks (called tokens).

For Example:

```javascript
var a = 1;
```

This program will be broken up into the following tokens: `var`, `a`, `=`, `1`, and `;`. Whitespace would be a token if meaningful.

What is the difference between tokenizing and lexing?
`lexing` is where the tokenizer invokes stateful parsing rules to determine whether `a` should be considered a distinct token or just part of another token.

2. **Parsing**: taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program.

`Abstract Syntax Tree` or "AST"

3. **Code-Generation**: process of taking an AST and turning it into executable code.

Any snippet of JavaScript code has to be compiled before it's executed. This is usually right before execution.

## Understanding Scope

Think in terms of a conversation, who is having the conversation?

### The Cast

1. _Engine_: responsible for start-to-finish-compilation and execution of our JavaScript program.
2. _Compiler_: one of _Engine's_ friends; handles all the dirty work of parsing and code-generation.
3. _Scope_: another friend of _Engine_, collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

Think like _Engine_ (and friends) think, ask the questions they ask, and answer those questions the same.

### Back & Forth

_Engine_ sees two distinct statements in `var a = 1;`:

1. one which _Compiler_ will handle during compilation.
2. one _Engine_ will handle during execution.

When _Compiler_ gets to code-generation, it will proceed as:

1. Encountering `var a`, _Compiler_ asks _Scope_ to see if a variable `a` already exists for that particular scope collection. If so, _Compiler_ ignores this declaration and moves on. Otherwise, _Compiler_ asks _Scope_ to declare a new variable called `a` for that scope collection.

2. _Compiler_ then produces code for _Engine_ to later execute, to handle thee `a = 2` assignment. The code _Engine_ runs will first ask _Scope_ if there is a variable called `a` accessible in the current scope collection. If so, _Engine_ uses that variable. If not, _Engine_ looks _elsewhere_ (nested _Scope_).

If _Engine_ eventually finds a variable, it assigns the value `2` to it. If not, _Engine_ will raise its hand and yell out an error!

**Summary**: two distinct actions are taken for a variable assignment:

1. _Compiler_ declares a variable (if not previously declared in the current scope).

2. When executing, _Engine_ looks up the variable in _Scope_ and assigns to it, if found.

### Compiler Speak

When _Engine_ executes the code that _Compiler_ produced for step 2 above, it has to look-up the variable `a` to see if it has been declared, and this look-up is consulting _Scope_. **The type of look-up _Engine_ performs affects the outcome of the look-up.**

**LHS look-up**:
_Engine_ would be performing an "LHS" look-up for the variable `a`. **An LHS look-up is done when a variable appears on the left-hand of an assignment operation**. The LHS look-up is trying to find the variable container itself, so that it can assign in this way. **Who's the target of the assignment**.

**RHS look-up**:
"RHS* stands for right-hand-side **of an assignment operation**. **A RHS look-up is done when a variable appears on the right-side of an assignment operation.** RHS doesn't *really\* mean "right-hand side of an assignment, it more accurately means "not left-hand-side. **You could also think of "RHS" means "retrieve his/her source (value)", implying that RHS means "go get the value of...**. **Who's the source of the assignment**

Consider:

```javascript
console.log(a);
```

The reference to `a` is an RHS reference. Why? Because nothing is being assigned to `a` here. Instead, we're looking-up to retrieve the value of `a`, so that the value can be passed to `console.log(..).

By contrast, consider:

```javascript
a = 1;
```

The reference to `a` is an LHS reference, because we don't actually care what the current value is, we just want to find the variable as a target for the `= 2` assinment operation.

Consider this program:

```javascript
function foo(a) {
  console.log(a); // 2
}

foo(2);
```

The last line that invokes `foo(..)` as a function call requires an RHS reference to `foo`, meaning, "go look-up the value of `foo`, and give it to me". Moreover, `(..)` means the value of `foo` should be executed, so it'd better actually be a function!

There is an implied assignment `a = 2` in this code snippet. It happens when the value `2` is passed as an argument to the `foo(..)` function, in which case the `2` value is **assigned** to the parameter `a`. To **implicitly** assign to parameter `a` an LHS look-up is performed.

There's also an RHS reference for the value of `a`, and that resulting value is passed to `console.log(..)`. `console.log` needs a reference to execute. It's an RHS look-up for the `console` object, then a property-resolution occurs to see if it has a method called `log`.

We can conceptualize that there's an LHS/RHS exchange of passing the value `2` (by way of variable `a`s RHS look-up) into `log(..)`. Inside of the native implementation of `log(..)`, we can assume it has parameters, the first of which (perhaps called `arg1`) has an LHS reference look-up, before assigning `2` to it.

You might be tempted to conceptualize the function declaration `function foo(a) {...` as a normal variable declaration and assignment, such as `var foo` and `foo = function(a){...`. In doing so, it would be tempting to think of this function declaration as involving an LHS look-up.
However, the small but important difference is that _Compiler_ handles both the declaration and the value definition during code-generation, such that when _Engine_ is executing code, there's no processing necessary to "assign" a function value to `foo`. Thus, it's not really appropriate to think of a function declaration as an LHS look-up assignment in the way we're discussing them here.

### Engine/Scope Conversation

```javascript
function foo(a) {
  console.log(a); // 2
}

foo(2);
```

Let's imagine this code snippet as a conversation like this:

> _**Engine**_: Hey _Scope_, I have an RHS reference for `foo`. Ever heard of it?

> _**Scope**_: Why yes, I have. _Compiler_ delclared it just a second ago. He's a function. Here you go.

> _**Engine**_: Great, thanks! OK, I'm executing `foo`.

> _**Engine**_: Hey, _Scope_, I've got an LHS reference for `a`, ever heard of it?

> _**Scope**_: Why yes, I have. _Compiler_ declared it as a formal parameter to `foo` just recently. Here you go.

> _**Engine**_: Helpful as always, _Scope_. Thanks again. Now time to assign `2` to `a`.

> _**Engine**_: Hey, _Scope_, sorry to bother you again. I need an RHS look-up for `console`. Ever heard of it?

> _**Scope**_: No problem, _Engine_, this is what I do all day. Yes, I've got `console`. He's built-in. Here ya go.

> _**Engine**_: Perfect. Looking up `log(..)`. Ok, great, it's a function.

> _**Engine**_: Yo, _Scope_. Can you help me out with an RHS reference to `a`. I think I remember it, but just want to check.

> _**Scope**_: You're right, _Engine_. Same guy, hasn't changed. Here ya go.

> _**Engine**_: Cool. Passing the value of `a`, which is `2`, into `log(..)`.

> ...

### Quiz

Play the conversation with _Scope_ and _Engine_ and identify all LHS look-ups (3) and all RHS look-ups (4):

```javascript
function foo(a) {
  var b = a;
  return a + b;
}

var c = foo(2);
```

## Nested Scope

There is usually more than one _Scope_ to consider in a program.

Just as a block or function is nested inside another block or function, scopes are nested inside other scopes. So, if a variable cannot be found in the immediate scope, _Engine_ consults the next outer containing scope, continuing until found or until the outermost (aka, global) scope has been reached.

The simple rules for traversing nested _Scope_: **_Engine_ starts at the currently executing _Scope_, looks for the variable there, and if not found, keeps going up one level, and so on. If the outermost global scope is reached, the search stops, whether it finds the variable or not**

## Errors

Why does it matter whether we call it LHS or RHS?

Because these two types of look-ups behave differently in the circumstance where the variable has not yet been declared (is not found in any consulted _Scope_).

`ReferenceError` is _Scope_ resolution-failure related.

`TypeError` implies that _Scope_ resolution was successful, but that there was an illegal/impossible action attempted against the result.

_Strict-mode_

## Review

`Scope`: the set of rules that determines where and how a variable (identifier) can be looked-up.

**Look-ups**

`LHS`: left-hand-side reference has the purpose of assigning to the variable. LHS references result from assignment operations. _Scope_-related assignments can occur either with the `=` operator or by passing arguments to (assign to) function parameters.

`RHS`: right-hand-side reference has the purpose of retrieving its value.

The JavaScript _Engine_ first compiles code before it executes. In doing so, it splits up statements like `var a = 1;` into two seperate steps:

1. First, `var a` to declare it in that _Scope_. Performed at the beginning, before code execution.
2. Later, `a = 2` to look up the variable (LHS reference) and assign to it if it is found.

### Quiz Answers

```javascript
function foo(a) {
  var b = a;
  return a + b;
}

var c = foo(2);
```

1. Identify all the LHS look-ups (3):
   `c = ..`, `a = 2` **(Implicit param assignment)** and `b = ..`

2. Identify all the RHS look-ups (4):
   `foo(2..`, `= a;`, `a + ..` and `.. + b`
