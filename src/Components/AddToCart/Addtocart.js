import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Ducks/reducer';


class AddToCart extends React.Component {
    
    
    render(props) {
        
        return (
            <div>

                <button onClick={() => this.props.addToCart(this.props.productId)} >Add To Cart</button>
                
            </div>
            
        )
        
    }
}

function mapStateToProps(state) {
    
    return {
        cart: state.cart,
        products: state.products,
        user: state.user,
    }
}

export default connect(mapStateToProps, { addToCart })(AddToCart);