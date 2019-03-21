import React, { PropTypes } from "react"; // as of react v15.5.0

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
    quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};
