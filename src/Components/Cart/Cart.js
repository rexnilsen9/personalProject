import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getCart, addToCart, deleteItem, decrementOne } from '../../Ducks/reducer';
import Login from '../Login/Login';
import './Cart.css';



class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: props.cart,
        }
    }

    componentDidMount() {
        this.props.getCart();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.cart !== this.props.cart) {
            this.setState({
                cart: this.props.cart
            })
        }
    }
    

    render() {
        // let total = this.state.cart.map()
        let cartDisplay = this.state.cart.map((product, index) => (
            <div key={index} className='Cart'>

                <div className='product'>
                    <div>
                        <img id='img' src={product.img} alt="" />
                    </div>
                    <div>
                        {product.item}
                    </div>
                    <div>
                        <button onClick={(e) => 
                            this.props.deleteItem(product.id)}>Remove</button>
                    </div>

                    <div>
                        {'$' + product.each}
                    </div>
                    <input id='quantity' type='number' min='0' value={product.quantity}
                        onChange={(e) => {
                            if (parseInt(e.target.value, 10) > parseInt(product.quantity, 10)) {
                                this.props.addToCart(product.id)
                            } else {
                                this.props.decrementOne(product.id)
                            }
                        }
                        } />

                    <div>
                        {'$' + product.price}
                    </div>

                </div>

            </div>

            
        ))
        return (
            <div>
                <Login />
                <h1>Your Cart</h1>
                {cartDisplay}
                <StripeCheckout
  token={this.onToken}
  stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
  amount={this.state.total}
/>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: id => dispatch(addToCart(id)),
        getCart: () => dispatch(getCart()),
        deleteItem: id => dispatch(deleteItem(id)),
        decrementOne: id => dispatch(decrementOne(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);