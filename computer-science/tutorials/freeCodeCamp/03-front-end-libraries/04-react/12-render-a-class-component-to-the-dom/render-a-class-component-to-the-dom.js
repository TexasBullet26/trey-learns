const NonCitrus = () => {
    render(
        <div>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
}

const Citrus = () => {
    render(
        <div>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefruit</li>
            </ul>
        </div>
    );
}

const Vegetables = () => {
    render(
        <div>
            <ul>
                <li>Brussel Sprouts</li>
                <li>Broccoli</li>
                <li>Squash</li>
            </ul>
        </div>
    );
}

class Fruits extends ReactComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                <NonCitrus/>
                <Citrus/>
            </div>
        );
    }
};

class TypesOfFood extends ReactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Types of Food:</h1>

        );
    }
};

ReactDOM.render(
    <TypesOfFood/>, document.getElementById('challenge-node'));
