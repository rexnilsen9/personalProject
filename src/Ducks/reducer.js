import axios from 'axios'

const initialState = {
    user: {},
    cart: {}
}

const GET_USER = 'GET_USER'
const GET_CART = 'GET_CART'


export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER,
        paylaod: res.data,
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER + 'FULFILLED':
        return Object.assign({}, state, {user: action.payload})
        
        default:
            return state
    }
}