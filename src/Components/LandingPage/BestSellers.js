import React from 'react';
import { connect } from 'react-redux';
import { getBestSellers } from '../../Ducks/reducer';
import AddToCart from '../AddToCart/Addtocart';
import './ProductPreview.css';



var Carousel = require('nuka-carousel');


class BestSellersPreview extends React.Component {
    componentDidMount() {
        this.props.getBestSellers();
    }

    render() {

        return (

            <div className='productpreview'>

                <div>
                    <h1>Best Sellers</h1>
                    <h3>Perennial Favorites from Every Category</h3>
                </div>
                <div className='carousel'>

                    <Carousel slidesToShow={4} slidesToScroll={4} speed={500} width='80%' >
                        {this.props.bestSellers.map(product => (
                            <div className='grow'>

                                <img id='image' src={product.img} alt="" />
                                <br />
                                {product.brand}
                                <br />
                                {product.item}
                                <br />
                                {product.price}
                                <AddToCart />
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
        bestSellers: state.bestSellers,
    }
}


export default connect(mapStateToProps, { getBestSellers })(BestSellersPreview)