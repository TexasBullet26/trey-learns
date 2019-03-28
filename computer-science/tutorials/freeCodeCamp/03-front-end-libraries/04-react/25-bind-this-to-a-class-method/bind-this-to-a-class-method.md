# React - 25: Bind `this` to a Class Method

---

In addition to setting and updating `state`, you can also define methods for your component class. A class method typically needs to use the `this` keyword so it can access properties on the class (such as `state` and `props`) inside the scope of the method. There are a few ways to allow your class methods to access `this`.

One common way is to explicitly bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized. In the last challenge we used `this.handleClick = this.handleClick.bind(this)` for its `handleClick` method in the constructor.

Then, when you call a function like `this.setState()` within your class method, `this` refers to the class and will not be `undefined`.
