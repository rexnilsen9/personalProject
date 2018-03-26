import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getCart, addToCart, deleteItem, decrementOne, deleteCart } from '../../Ducks/reducer';
import Login from '../Login/Login';
import axios from 'axios';
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
    onToken = token => {
        console.log('token', token);
        this.props.deleteCart();
        token.card = void 0;
        const { amount } = this.state
        axios.post('/api/payment', { token, amount })
        .then(charge => { console.log('charge response', charge.data) })
        ;;
      }
    
    calculateTotal(){
        if(this.props.cart.length > 0) {
            return this.props.cart.reduce((acc, item) => {
                return acc + parseInt(item.price, 10)
            }, 0).toFixed(2)
        }
    }

    render() {

        let cartDisplay = this.state.cart.map((product, index) => (
            <div key={index} className='Cart'>

                <div className='product'>
                    <p>
                        <img id='img' src={product.img} alt="" />
                    </p>
                    <p>
                        {product.item}
                    </p>
                    <p>
                        <button onClick={(e) =>
                            this.props.deleteItem(product.id)}>Remove</button>
                    </p>

                    <p>
                        {'$' + product.each}
                    </p>
                    <input id='quantity' type='number' min='0' value={product.quantity}
                        onChange={(e) => {
                            if (parseInt(e.target.value, 10) > parseInt(product.quantity, 10)) {
                                this.props.addToCart(product.id)
                            } else {
                                this.props.decrementOne(product.id)
                            }
                        }
                        } />

                    <p>
                        {'$' + product.price}
                    </p>

                </div>

            </div>


        ))
        return (
            <div>
                <Login />
                <h1>Your Cart</h1>
                {cartDisplay}
                <div>
                    Total ${this.calculateTotal()}
                </div>
                <br/>
                <StripeCheckout
                    token={this.onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
                    amount={this.calculateTotal()*100}
                    
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
        decrementOne: id => dispatch(decrementOne(id)),
        deleteCart: id => dispatch(deleteCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);