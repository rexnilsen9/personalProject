import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../Ducks/reducer';
import AddToCart from '../AddToCart/Addtocart';
import './ProductPreview.css'

var Carousel = require('nuka-carousel');


class ProductPreview extends React.Component {
    componentDidMount() {
        this.props.getProduct();
    }

    render() {

        return (

            <div className='productpreview'>

                <div>
                    <h1>Recommended For You</h1>
                    <h3>Popular Products from Brands You Like</h3>
                </div>
                <div className='carousel'>

                    <Carousel slidesToShow={4} slidesToScroll={4} speed={500} width='80%' >
                        {this.props.products.map((product, index) => (
                            <div className='grow' key={index}>

                                <img id='image' src={product.img} alt="" />
                                <br />
                                {product.brand}
                                <br />
                                {product.item}
                                <br />
                                {product.price}
                                <AddToCart productId={product.id}/>
                            </div>
                        
                        ))}
                    </Carousel>
                </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.products,
    }
}


export default connect(mapStateToProps, { getProduct })(ProductPreview);