class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // boolean in this components state tracks whether we
            // want to display some element in the UI or not:
            display: true,
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        if (this.state.display === true) {
            return (
                <div>
                    {/* The `button` toggles the state of `display` boolean value */}
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
        }
    }
};
