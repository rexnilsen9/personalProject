import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Ducks/reducer'


class AddToCart extends React.Component {
    componentDidMount() {
        this.props.addToCart();
    }

    render() {
        return (
            <div>

                <button onClick={() => addToCart()}>Add To Cart</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, { addToCart })(AddToCart);