// The idea here is to create a controlled input where the text updates
// from your state, not from the browser.

// We have a class named `ControlledInput` and a state variable named `input`.
// Now all we need to do is take that state and when a change in the input
// box is observed, trigger a function that changes the value inside
// that input box and in the paragraph below it.

// When you type in the input box, that text is processed by the `handleChange()` method,
// set as the `input` property in the local `state`, and rendered as the
// value in the `input` box on the page.
// The component `state` is the single source of truth regarding the input data.

class ControlledInput extends React.Component {

    constructor(props) {

        super(props);

        // initialize component's state:
        this.state = {
            // input's value represents the text a user types into the input field.
            input: ''
        };

        // Step 4: Add the necessary bindings in the constructor:
        this.handleChange = this.handleChange.bind(this);
    }

    // Step 1: Create a Method Called handleChange() That Changes The State Variable `input`:
    handleChange(event) {
        this.setState({
            // When this method is called, it receives an event object
            // that contains a string of text from the input element.
            // You can access this string with `event.target.value` inside the method.
            input: event.target.value
        });
    }

    render() {
        return (
            <div>
                { /* Step 2: Create the `input` element with a `value` attribute which is equal to the `input` property of the component's `state`. */ }
                    { /* Creating an input box and trigger it when someone types anything. We have a event called `onChange()` to serve this purpose. */ }
                    { /* Here is another way to bind `this` into a function: <input onChange={this.handleChange.bind(this)}/> */ }
                        { /* But this won't serve our purpose. What's happening here is text updates from the browser not the state. */ }
                        { /* So to correct this we'll add a `value` attribute and set it to `this.state.input` to the input element which will make the input get controlled by state. */ }
                { /* Step 3: Then add an `onChange()` event handler set to the `handleChange()` method. */ }
                <input type='text' value={this.state.input} onChange={this.handleChange}/>

                <h4>Controlled Input:</h4>

                <p>{this.state.input}</p>
            </div>
        );
    }
};

// Form Control elements such as `input` and `textarea` maintain
// their own state in the DOM as the user types.
// In React, you can move this mutable state into a React component's
// `state`. The user's input becomes part of the application `state`,
// so React controls the value of that input field.
