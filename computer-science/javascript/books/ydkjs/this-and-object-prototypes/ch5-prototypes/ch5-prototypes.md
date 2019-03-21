# Chapter 5: Prototypes

---

We will now examine prototypes in detail in this chapter.

**Note:** All of the attempts to emulate class-copy behavior, as described previously in Chapter 4, labeled as variations of "mixins", completely circumvent the `[[Prototype]]` chain mechanism we examine here.

## `[[Prototype]]`

---

Objects in JavaScript have an internal property, denoted in the specs as `[[Prototype]]`, which is a reference to another object. Almost all objects are given a non-`null` value for this property, at the time of their creation.

Consider:

```javascript
var myObject = {
    a: 2,
};

myObject.a; // 2
```

What is the `[[Prototype]]` reference used for?

The `[[Get]]` operation is invoked when you reference a property on an object, such as `myObject.a`. For this default `[[Get]]` operation, the first step is to check if the object itself has a property `a` on it, and if so, it's used.

**But it's what happens if `a` isn't present on `myObject` that brings our attention now to the `[[Prototype]]` link of the object.**

The default `[[Get]]` operation proceeds to follow the `[[Prototype]]` **link** of the object if it cannot find the requested property on the object directly.

```javascript
var anotherObject = {
    a: 2,
};

// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject);

myObject.a; // 2
```

**Note:** For now, assume that `Object.create(..)` creates an object with the `[[Prototype]]` linkage we're examining to the object specified.

So, we have `myObject` that is now `[[Prototype]]` linked to `anotherObject`. `myObject.a` doesn't actually exist, but nevertheless, the property access succeeds (being found on `anotherObject` instead) and finds the value `2`.
**But**, if `a` weren't found on `anotherObject` either, its `[[Prototype]]` chain, if non-empty, is again consulted and followed.
This process continues until either a matching property name is found, or the `[[Prototype]]` chain ends. If no matching property is _ever_ found by the end of the chain, the return result from the `[[Get]]` operation is `undefined`.

Similar to this `[[Prototype]]` chain look-up process, if you use a `for..in` loop to iterate over an object, any property that can be reached via its chain (and is also `enumerable` -- Ch3) will be enumerated.

```javascript
var anotherObject = {
    a: 2,
};

// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject);

// If you use a `for..in` loop to iterate over an object,
// any property that can be reached via its chain will
// be enumerated:
for (var k in myObject) {
    console.log('found: ' + k);
}
// found: a

// if you use the `in` operator to test for the
// existence of a property on an object, `in` will
// check the entire chain of the object (regardless of
// enumerability):
'a' in myObject; // true
```

**So, the `[[Prototype]]` chain is consulted, one link at a time, when you perform property look-ups in various fashions. The look-up stops once the property is found or the chain ends.**

### `Object.prototype`

But _where_ exactly does the `[[Prototype]]` chain "end"?

At the top-end of every _normal_ `[[Prototype]]` chain is the built-in `Object.prototype`. This object includes a variety of common utilities used all over JS, because all normal (built-in, not host-specific extension) objects in JavaScript "descend from" (aka, have at the top of their `[[Prototype]]` chain) the `Object.prototype` object.

Some utilities found here include `toString()` and `.valueOf()`. In Ch3, we introduced another: `.hasOwnProperty(..)`. And yet another function on `Object.prototype` is `.isPrototypeOf(..)`.

### Setting & Shadowing Properties

In Chapter 3, we mentioned that setting properties on an object was more nuanced than just adding a new property to the object or changing an existing property's value. We will now revisit this situation more completely.

```javascript
myObject.foo = 'bar';
```

If the `myObject` object already has a normal data accessor property called `foo` directly present on it, the assignment is as simple as changing the value of the existing property.

If `foo` is not already present directly on `myObject`, the `[[Prototype]]` chain is traversed, just like for the `[[Get]]` operation. If `foo` is not found anywhere in the chain, the property `foo` is added directly to `myObject` with the specified value, as expected.

However, if `foo` is already present somewhere higher in the chain, nuanced (and perhaps surprising) behavior can occur when the `myObject.foo = "bar"` assignment. We'll examine that more in just a moment.

If the property name `foo` ends up both on `myObject` itself and at a higher level of the `[[Prototype]]` chain that starts at `myObject`, this is called _shadowing_. The `foo` property directly on `myObject` _shadows_ any `foo` property which appears high in the chain, because the `myObject.foo` look-up would always find the `foo` property that's lowest in the chain.

As we just hinted, shadowing `foo` on `myObject` is not as simple as it may seem. We will now examine three scenarios for the `myObject.foo = "bar"` assignment when `foo` is not already on `myObject` directly, but is at a higher level of `myObject`'s `[[Prototype]]` chain:

1. If a normal data accessor (see Chapter 3) property named `foo` is found anywhere higher on the `[[Prototype]]` chain, **and it's not marked as read-only (`writable:false`)** then a new property called `foo` is added directly to `myObject`, resulting in a **shadowed property**.

2. If a `foo` is found higher on the `[[Prototype]]` chain, but it's marked as **read-only (`writable:false`)**, then both the setting of that existing property as well as the creation of the shadowed property on `myObject` **are disallowed**. If the code is running in `strict mode`, an error will be thrown. Otherwise, the setting of the property value will silently be ignored. Either way, **no shadowing occurs**.

3. If a `foo` is found higher on the `[[Prototype]]` chain and it's a setter (see Chapter 3), then the setter will always be called. No `foo` will be added to (aka, shadowed on) `myObject`, nor will the `foo` setter be redefined.

Most developers assume that assignment of a property (`[[Put]]`) will always result in shadowing if the property already exists higher on the `[[Prototype]]` chain, but as you can see, that's only true in one (#1) of the three situations just described.

If you want to shadow `foo` in cases #2 and #3, you cannot use `=` assignment, but must instead use `Object.defineProperty(..)` (see Chapter 3) to add `foo` to `myObject`.

**Note:** Case #2 may be the most surprising of the three. The presence of a _read-only_ property prevents a property of the same name being implicitly created (shadowed) at a lower level of a `[[Prototype]]` chain. The reason for this restriction is primarily to reinforce the illusion of class-inherited properties. If you think of the `foo` at a higher level of the chain as having been inherited (copied down) to `myObject`, then it makes sense to enforce the non-writable nature of that `foo` property on `myObject`. If you however separate the illusion from the fact, and recognize that no such inheritance copying _actually_ occurred (see Chapters 4 and 5), it's a little unnatural that `myObject` would be prevented from having a `foo` property just because some other object had a non-writable `foo` on it. It's even stranger that this restriction only applies to `=` assignment, but is not enforced when using `Object.defineProperty(..)`.

Shadowing with **methods** leads to ugly _pseudo-polymorphism_ (see Chapter 4) if you need to delegate between them. Usually, shadowing is more complicated and nuanced than it's worth. **so you should try to avoid it if possible.** See Chapter 6 for an alternative design pattern, which among other things discourages shadowing in favor of cleaner alternatives.

Shadowing can even occur implicitly in subtle ways, so care must be taken if trying to avoid it. Consider:

```javascript
var anotherObject = {
    a: 2,
};

var myObject = Object.create(anotherObject);

anotherObject.a; // 2
myObject.a; // 2

anotherObject.hasOwnProperty('a'); // true
myObject.hasOwnProperty('a'); // false

// same as: myObject.a = myObject.a + 1
myObject.a++; // oops, implicit shadowing!

anotherObject.a; // 2
myObject.a; // 3

myObject.hasOwnProperty('a'); // true
```

Though it may appear that `myObject.a++` should (via delegation) look-up and just increment the `anotherObject.a` property itself _in place_, instead the `++` operation corresponds to `myObject.a = myObject.a + 1`. The result is `[[Get]]` looking up `a` property via `[[Prototype]]` to get the current value `2` from `anotherObject.a`, incrementing the value by one, then `[[Put]]` assigning the `3` value to a new shadowed property `a` on `myObject`. Oops!

Be very careful when dealing with delegated properties that you modify. If you wanted to increment `anotherObject.a`, the only proper way is `anotherObject.a++`.

## "Class"

---

"_Why_ does one object need to link to another object?" What's the real benefit? That is a very appropriate question to ask, but we must first understand what `[[Prototype]]` is **not** before we can fully understand and appreciate what it is and how it's useful.

As we explained in Chapter 4, in JavaScript, there are no abstract patterns/blueprints for objects called "classes" as there are class-oriented languages. JavaScript **just** has objects.

In JavaScript, classes can't (being that they don't exist!) describe what an object can do. The object defines its own behavior directly. **There's just the object**.

### "Class" Functions

The peculiar "sort-of-class" behavior hinges on a strange characteristic of functions: All functions by default get a public, non-enumerable property on them called `prototype`, which points at an otherwise arbitrary object.

```javascript
function Foo() {
    // ...
}
```

What exactly is this object?

Each object created from calling `new Foo()` will end up `[[Prototype]]`-linked to this "Foo dot prototype" object.

```javascript
Foo.prototype; // { }
```

To illustrate:

```javascript
function Foo() {
    // ...
}
```

`new Foo()` results in a new object (we called it `a`), and that new object `a` is internally `[[Prototype]]` linked to the `Foo.prototype` object.
```javascript
var a = new Foo();
/* When `a` is created calling `new Foo()`, one of the things that happens is that `a` gets an internal `[[Prototype]]` link to the object that `Foo.prototype` is pointing at. */
```

**We end up with two objects, linked to each other**. We didn't instantiate a class.
We certainly didn't do any copying of behavior from a "class" into a concrete object.
We just caused two objects to be linked to each other.

Surprisingly, the `new Foo()` function has really almost nothing direct to do with the process of creating the link. **It was sort of an accidental side-effect**! `new Foo()` is an indirect, round-about way to end up with what we want: **a new object linked to another object**.

Can we get what we want in a more _direct_ way?

**YES!** The hero is `Object.create(..)`.

```javascript
Object.getPrototypeOf( a ) === Foo.prototype; // true
```

#### What's in a name?

In JavaScript, we don't make _copies_ from one object ("class") to another ("instance"). We make _links_ between objects. For the `[[Prototype]]` mechanism, visually, the arrows move from right to left, and from bottom to top.

![image](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig3.png)

This mechanism is often called "prototypal inheritance" (we'll explore the code in detail shortly), which is commonly said to be the dynamic-language version of "classical inheritance". It's an attempt to piggy-back on the common understanding of what "inheritance" means in the class-oriented world, but _tweak_ (**read: pave over**) the understood semantics, to fit dynamic scripting.

Because of the confusion and conflation of terms, I believe the label "prototypal inheritance" itself (and trying to mis-apply all its associated class-orientation terminology, like "class", "constructor", "instance", "polymorphism", etc) has done **more harm than good** in explaining how JavaScript's mechanism _really_ works.

"Inheritance" implies a _copy_ operation, and JavaScript doesn't copy object properties (natively, by default). Instead, JS creates a link between two objects, where one object can essentially _delegate_ property/function access to another object. "Delegation" (see Chapter 6) is a much more accurate term for JavaScript's object-linking mechanism.

Another term which is sometimes thrown around in JavaScript is "differential inheritance". The idea here is that we describe an object's behavior in terms of what is _different_ from a more general descriptor. For example, you explain that a car is a kind of vehicle, but one that has exactly 4 wheels, rather than re-describing all the specifics of what makes up a general vehicle (engine, etc).

If you try to think of any given object in JS as the sum total of all behavior that is _available_ via delegation, and **in your mind you flatten** all that behavior into one tangible _thing_, then you can (sorta) see how "differential inheritance" might fit.

But just like with "prototypal inheritance", "differential inheritance" pretends that your mental model is more important than what is physically happening in the language. It overlooks the fact that object `B` is not actually differentially constructed, but is instead built with specific characteristics defined, alongside "holes" where nothing is defined. It is in these "holes" (gaps in, or lack of, definition) that delegation _can_ take over and, on the fly, "fill them in" with delegated behavior.

The object is not, by native default, flattened into the single differential object, **through copying**, that the mental model of "differential inheritance" implies. As such, "differential inheritance" is just not as natural a fit for describing how JavaScript's `[[Prototype]]` mechanism actually works.

You can _choose_ to prefer the "differential inheritance" terminology and mental model, as a matter of taste, but there's no denying the fact that it _only_ fits the mental acrobatics in your mind, not the physical behavior in the engine.

### "Constructors"

Looking back to some earlier code:

```javascript
function Foo() {
  // ...
}

var a = new Foo();
```

What exactly leads us to think `Foo` is a "class"?

One reason is that we see the use of the `new` keyword, just like class-oriented languages do when they construct class instances.

Another reason is it appears that we are in fact executing a _constructor_ method of a class, because `Foo()` is actually a method that gets called, just like how a real class's constructor gets called when you instantiate that class.

To further the confusion of "constructor" semantics, the arbitrarily labeled `Foo.prototype` object has another trick up its sleeve. Consider this code:

```javascript
function Foo() {
  // ...
}

Foo.prototype.constructor === Foo; // true

var a = new Foo();
a.constructor === Foo; // true
```

#### Constructor Or Call?

In the above snippet, it's tempting to think that `Foo` is a "constructor", because we call it with `new` and we observe that it "constructs" an object.

In reality, `Foo` is no more a "constructor" than any other function in your program. Functions themselves are **not** constructors. However, when you put the `new` keyword in front of a normal function call, that makes that function call a "constructor call". In fact, `new` sort of hijacks any normal function and calls it in a fashion that constructs an object, **in addition to whatever else it was going to do**.

For example:

```javascript
function NothingSpecial() {
  console.log("Don't mind me!");
}

var a = new NothingSpecial();
// "Don't mind me!"

a; // {}
```

`NothingSpecial` is just a plain old normal function, but when called with `new`, it _constructs_ an object, almost as a side-effect, which we happen to assign to `a`. The **call** was a _constructor call_, but `NothingSpecial` is not, in and of itself, a _constructor_.

**!Important!**

In other words, in JavaScript, it's most appropriate to say that a "constructor" is **any function called with the `new` keyword** in front of it.

Functions aren't constructors, but function calls are "constructor calls" if and only if `new` is used.

### Mechanics

JS developers have strived to simulate as much as they can of class-orientation:

```javascript
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

var a = new Foo("a");
var b = new Foo("b");

a.myName(); // "a"
b.myName(); // "b"
```