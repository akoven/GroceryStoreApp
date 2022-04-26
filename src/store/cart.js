import produceData from '../mockData/produce.json';

const ADD_CART = 'cart/ADD'

export const addToCart = (id) => {
    return {
        type: ADD_CART,
        id
    }
}


export const cartReducer = (state = {}, action) => {
    console.log("******** cart", state.cart);
    switch (action.type) {
        case ADD_CART:
            const id = action.id
            const produce = produceData.find((item) => item.id === id)
            return { id, count: 1 }
        default:
            return state;
    }
}
