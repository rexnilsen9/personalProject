import React from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../Ducks/reducer';
import './Profile.css';




class Profile extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <div className='profile-header'>
                    <h1>User Profile</h1><hr />
               <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
                </div>
                <div className='profile-body'>

                    {user ? <img className='avatar' src={user.img} alt='' /> : null}
                    <p>Username: {user ? user.user_name : null}</p>
                    {console.log(user)}

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

export default connect(mapStateToProps, { getUser })(Profile)