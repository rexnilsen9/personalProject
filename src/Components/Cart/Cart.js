import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Ducks/reducer';



class Cart extends React.Component {
    componentDidMount() {
        this.props.addToCart();
    }

    render() {
        return (
            <div>
                <h1>Your Cart</h1>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, { addToCart })(Cart);