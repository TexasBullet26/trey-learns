// This challenge looks at how arrays can be passed as props:
// To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
// The child component then has access to the array property ___.
// Array methods such as join() can be used when accessing the property.

// Child functional component:
const List = (props) => {
    { /* Access the tasks array, showing its value within the p element. Use join(", ") to display the props.tasks array in the p element as a comma separated list. */ }
    return <p>{props.tasks.join(", ")}</p>
};

// Parent class component with render method:
class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>

                <h2>Today</h2>
                { /* When rendering each List from this ToDo component, pass in a tasks property assigned to an array of to-do tasks: */ }
                <List tasks=
                    {[
                        "Eat",
                        "Sleep"
                    ]}
                />

                <h2>Tomorrow</h2>
                { /* When rendering each List from this ToDo component, pass in a tasks property assigned to an array of to-do tasks: */}
                <List tasks=
                    {[
                        "Shmoke",
                        "Rap",
                        "Football Practice"
                    ]}
                />
            </div>
        );
    }
};
