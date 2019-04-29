const inputStyle = {
    width: 235,
    margin: 5
}

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        }
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // `ask()` method:
    // `MagicEightBall.ask()`:
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }

    // `handleChange(event)` method:
    // `MagicEightBall.handleChange(event)`:
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    // You can write JavaScript without wrapping it inside curly braces
    // if you are inside the render method and not inside the return method.
    render() {
        // 20 phrases to represent the answers found in the Eight Ball toy:
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful',
        ];

        // Access the `possibleAnswers` array using the value of `randomIndex`,
        // which is located within the state of our component. We access state
        // using `this.state`:
        const answer = possibleAnswers[this.state.randomIndex];

        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                /><br />
                { /* The button click event is bound to the `ask` method, */ }
                { /* so each time the button is clicked a random number will be generated and stored as the `randomIndex` in state */ }
                <button onClick={this.ask}>
                    Ask the Magic Eight Ball!
                </button><br />
                <h3>Answer:</h3>
                <p>
                    { /* Insert our const `answer` into the paragraph */ }
                    {answer}
                </p>
            </div>
        );
    }
};
