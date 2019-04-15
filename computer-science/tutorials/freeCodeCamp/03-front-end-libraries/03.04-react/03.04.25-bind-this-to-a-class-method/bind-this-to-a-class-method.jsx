// React #25 - Bind `this` to a Class Method:

// In addition to setting and updating `state`, you
// can also define methods for your component class.
// A class method typically needs to use the `this`
// keyword so it can access properties on the class
// (such as `state` and `props`) inside the scope of
// the method. There are a few ways to allow your class methods to access `this`.

// One common way is to explicitly bind `this\ in the constructor
// so `this` becomes bound to the class methods when the component
// is initialized.

// In the last challenge we used `this.handleClick = this.handleClick.bind(this)`
// for its `handleClick` method in the constructor. Then, when you
// call a function like `this.setState()` within your class method,
// `this` refers to the class and will not be `undefined`.

// This snippet has a component with a `state` that keeps track of an item count.
// It also has a method which allows you to increment this item count. However, the
// method doesn't work because it's using the `this` keyword that is undefined.
// Fix it by explicitly binding `this` to the `addItem()` method in the component's constructor:

class MyComponent extends React.Component {
    constructor(props) {
        
        super(props);
        
        // init state that keeps track of an item count:
        this.state = {
            itemCount: 0
        };

        // explicity bind `this\ to the `addItem()` method so `this` becomes bound the the class methods when the component is initialized:
        this.addItem = this.addItem.bind(this);
    }

    // addItem() method that allows us to increment the item count:
    addItem() {
        this.setState({
            itemCount: this.state.itemCount + 1
        });
    }

    // render() method:
    render() {
        return (
            <div>
                { /* add a click handler to the button that triggers the `addItem()` method when the button receives a click event: */ }
                <button onClick={this.addItem}>Click Me</button>
                <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
        );
    }
};
