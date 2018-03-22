import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Ducks/reducer';
import Login from '../Login/Login'



class Cart extends React.Component {
    componentDidMount() {
        this.props.addToCart();
    }

    render() {
        return (
            <div>
                <Login />
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