import axios from 'axios';

const initialState = {
    user: {},
    products: [],
    bestSellers: [],
    cart: []
}


const GET_USER = 'GET_USER';
const GET_PRODUCT_RECOMMENDED = 'GET_PRODUCT_RECOMMENDED';
const GET_PRODUCT_BESTSELLERS = 'GET_PRODUCT_BESTSELLERS';
const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const DELETE_CART = 'DELETE_CART';


//Middleware
const _FULFILLED = '_FULFILLED';

export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: userData
    }
}
export function getProduct() {
    let productInfo = axios.get('/products').then(res => {
        return res.data;
    })
    return {
        type: GET_PRODUCT_RECOMMENDED,
        payload: productInfo
    }
}
export function getBestSellers() {
    let bestSellers = axios.get('/bestsellers').then(res => {
        return res.data;
    })
    return {
        type: GET_PRODUCT_BESTSELLERS,
        payload: bestSellers,
    }
}
export function addToCart(id) {
    let cartData = axios.post(`/addtocart/${id}`, { id }).then(res => {
        return res.data
    })
    return {
        type: ADD_TO_CART,
        payload: cartData,
    }
}

export function getCart() {
    let cart = axios.get('/getcart').then(res => {
        return res.data;
    })
    return {
        type: GET_CART,
        payload: cart,
    }
}
export function deleteItem(id) {
    let itemToDelete = axios.delete(`/removeitem/${id}`).then(res => {
        return res.data
    })
    return {
        type: DELETE_ITEM,
        payload: itemToDelete
    }
}
export function decrementOne(id) {
    let itemToDecrement = axios.delete(`decrementitem/${id}`).then(res => {
        return res.data;
    })
    return {
        type: DECREMENT_ITEM,
        payload: itemToDecrement
    }
}
export function deleteCart(id) {
    let itemToDelete = axios.delete(`deletecart`).then(res => {
        return res.data;
    })
    return {
        type: DELETE_CART,
        payload: itemToDelete,
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + _FULFILLED:
            return Object.assign({}, state, { 
                user: action.payload })

        case GET_PRODUCT_RECOMMENDED + _FULFILLED:
            return Object.assign({}, state, { 
                products: action.payload })

        case ADD_TO_CART + _FULFILLED:
            return Object.assign({}, state, { 
                cart: action.payload })

        case GET_PRODUCT_BESTSELLERS + _FULFILLED:
            return Object.assign({}, state, {
                bestSellers: action.payload
            })
        case GET_CART + _FULFILLED:
            return Object.assign({}, state, {
                cart: action.payload
            })
        case DELETE_ITEM + _FULFILLED:
            return Object.assign({}, state, {
                cart: action.payload
            })
        case DECREMENT_ITEM + _FULFILLED:
            return Object.assign({}, state, {
                cart: action.payload
            })
        case DELETE_CART + _FULFILLED:
            return Object.assign({}, state, { 
                cart: action.payload })

        default:
            return state;
    }
}