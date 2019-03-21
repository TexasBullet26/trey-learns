//===================//
// "CLASS"           //
//-------------------//
// "CLASS" FUNCTIONS //
//-------------------//
//===================//

// The peculiar "sort-of-class" behavior hinges on a strange characteristic
// of functions: All functions by default get a public, non-enumerable property 
// on them called `prototype`, which points at an otherwise arbitrary object.

function Foo() {
    // ...
}

// What exactly is this object?

// Each object created from calling `new Foo()` will end up `[[Prototype]]`-linked
// to this "Foo dot prototype" object.

Foo.prototype; // { }

// To illustrate:

function Foo() {
    // ...
}

// `new Foo()` results in a new object (we called it `a`), and that new object `a`
// is internally `[[Prototype]]` linked to the `Foo.prototype` object.
var a = new Foo(); // When `a` is created calling `new Foo()`, one of the things
                   // that happens is that `a` gets an internal `[[Prototype]]`
                   // link to the object that `Foo.prototype` is pointing at.

// We end up with two objects, linked to each other. We didn't instantiate a class.
// We certainly didn't do any copying of behavior from a "class" into a concrete object.
// We just caused two objects to be linked to each other.

// Surprisingly, the `new Foo()` function has really almost nothing direct to do with the
// process of creating the link. It was sort of an accidental side-effect! `new Foo()`
// is an indirect, round-about way to end up with what we want: a new object
// linked to another object.

// Can we get what we want in a more direct way?

// YES! The hero is `Object.create(..)`.

Object.getPrototypeOf( a ) === Foo.prototype; // true

