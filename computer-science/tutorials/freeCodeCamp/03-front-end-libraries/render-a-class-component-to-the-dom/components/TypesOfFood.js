class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* change the code below */}
                <Fruits/>
                <Vegetables/> {/* change code above this line */}
            </div>
        );
    }
};

ReactDOM.render(
    <TypesOfFood/>, document.getElementById('root'))
