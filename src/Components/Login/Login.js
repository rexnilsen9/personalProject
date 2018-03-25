import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './../../Ducks/reducer';
import './Login.css';


class Login extends React.Component {
    componentDidMount() {
        
        this.props.getUser();
    }

    render() {
        const user = this.props.user;
        return (

            <div>
                <div className='promo'>Special Promotions</div>
                <div className='header'>
                    <h3>VerticalCountry</h3>
                    <input id='input' placeholder='Search All Products' />
                    <p>Chat   1-800-409-4502</p>
                    <a href={user.id ? process.env.REACT_APP_LOGOUT : process.env.REACT_APP_LOGIN}>
                        <button> {user.id ? `${user.user_name ? user.user_name :'Logout'}` : 'Login/Signup'} </button> </a>
                    <Link to='/cart'><img id='img' src="http://www.clker.com/cliparts/v/6/L/p/Q/f/shopping-cart-white-hi.png" alt=""/></Link>
                    <Link to='/profile'> <button>Profile</button> </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { getUser })(Login);