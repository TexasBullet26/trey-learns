// React #24 - Set State with this.setState:

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // Within the `handleClick` method, update the component `state` using `this.setState()`
    handleClick() {
        // Call `setState` method, passing object with a state property of name with a value of 'React Rocks!'
        this.setState({
            name: 'React Rocks!'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

// EXPLANATION OF CODE:
// onClick() handler in button is triggered when the button is clicked.
// button receives a click event in the browser.
// click event in the browser runs the handleClick method that is defined on MyComponent.
