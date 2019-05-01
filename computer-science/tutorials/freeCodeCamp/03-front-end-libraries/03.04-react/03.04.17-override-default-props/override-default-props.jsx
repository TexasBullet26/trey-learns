// The way to override the default props is to explicitly set the prop values for a component as seen in this snippet:

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

// Set default props for Items component:
Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* Override the default prop by passing in a value of 10 for quantity: */ }
        return <Items quantity={10} />
    }
};
