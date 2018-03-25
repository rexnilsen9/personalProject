import React from 'react';
import { connect } from 'react-redux';
import { getCart, addToCart, deleteItem } from '../../Ducks/reducer';
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
                        {'$' + product.each}
                    </div>
                    <input id='quantity' type='number' min='0' value={product.quantity}
                        onChange={(e) => {
                            if (parseInt(e.target.value, 10) > parseInt(product.quantity, 10)) {
                                this.props.addToCart(product.id)
                            } else {
                                this.props.deleteItem(this.props.cart_id)
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);