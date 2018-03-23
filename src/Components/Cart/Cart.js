import React from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../Ducks/reducer';
import Login from '../Login/Login';



class Cart extends React.Component {
    componentDidMount() {
        this.props.getCart();
    }

    render() {
        let display = this.props.cart.map((product, index) => (
            <div key={index} className='Cart'>
                <img id='img' src={product.img} alt=""/>
                <div>{product.item}</div>
                <div>{product.price}</div>
                <div>{product.count}</div>
                <br/>
            </div>
        ))
        return (
            <div>
                <Login />
                <h1>Your Cart</h1>
                {display}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, { getCart })(Cart);