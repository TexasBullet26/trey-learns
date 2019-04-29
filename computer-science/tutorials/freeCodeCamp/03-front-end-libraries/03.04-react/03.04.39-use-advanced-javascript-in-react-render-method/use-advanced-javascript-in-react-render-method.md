# React: Use Advanced JavaScript in React Render Method

---

In previous challenges, we learned how to inject JavaScript code into JSX code using curly braces `{ }`, for tasks like:

- accessing props
- passing props
- accessing state
- inserting comments into our code
- styling our components

These are all common use cases to put JavaScript in JSX, but they aren't the only way that you can utilize JavaScript code in your React components.

You can also write JavaScript directly in your `render` methods, before the `return` statement, _**without**_ inserting it inside curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code *inside* the `return` statement, you place the variable name inside curly braces.

## Challenge

---

In the code provided:

- The `render` method has an array that contains 20 phrases to represent the answers found in the classic 1980's Magic Eight Ball toy

- The button click event is bound to the `ask` method
  - so each time the button is clicked a random number will be generated and stored as the `randomIndex` in state

On line 52, delete the string `"change me!"` and reassign the `answer` const so your code randomly accesses a different index of the `possibleAnsers` array each time the component updates. Finally, insert the `answer` const inside the `p` tags.

**Setup:**

---

```jsx
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

    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }

    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    render() {
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

        const answer = "change me!";

        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                /><br />
                <button onClick={this.ask}>
                    Ask the Magic Eight Ball!
                </button><br />
                <h3>Answer:</h3>
                <p>
                    
                </p>
            </div>
        );
    }
};
```

**Answer:**

---

```jsx
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

    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }

    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    // You can write JavaScript without wrapping it inside curly braces
    // if you are inside the render method and not inside the return method.
    render() {
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
        // using `this.state`.
        const answer = possibleAnswers[this.state.randomIndex];

        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                /><br />
                <button onClick={this.ask}>
                    Ask the Magic Eight Ball!
                </button><br />
                <h3>Answer:</h3>
                <p>
                    {/* Insert our const `answer` into the paragraph */}
                    {answer}
                </p>
            </div>
        );
    }
};
```

**Explanation:**

---

While you are in the render method and not inside the return method, you can write JavaScript **without** wrapping it inside curly braces.

First, you will have to set the constant `answer` to a value. Access the `possibleAnswers` array using the value of `randomIndex`, which is located within the state of your component. Remember, we access state using `this.state`:

```js
const answer = possibleAnswers[this.state.randomIndex];
```

Next, insert your const `answer` into the p-tags. Make sure to wrap it with curly braces `{ }`:

```jsx
<p>
    {answer}
</p>
```
