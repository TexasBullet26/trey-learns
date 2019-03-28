// The `MyForm` component is set up with an empty `form` with a submit handler.
// The submit handler will be called when the form is submitted.

// We've added a button which submits the form. You can see it has the
// `type` set to `submit` indicating it is the button controlling the form.

// Step 1: Add the `input` element in the `form` and set its `value` and `onChange()` attributes like last challenge.
// Step 2: You should then complete the `handleSubmit` method so that it sets the component state property `submit` to the current input value in the local `state`.
// NOTE: You also must call `event.preventDefault()` in the submit handler, to prevent the default from submit behavior which will refresh the web page.
// Step 3: Create a `h1` tag after the `form` which renders the `submit` value from the component's `state`.
// You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: '',
            submit: this.state.input
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
};
