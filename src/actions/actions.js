export const DELETE_ORDER = 'DELETE_ORDER';
export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const SET_CURRENT_ITEMS = 'SET_CURRENT_ITEMS';
export const TOGGLE_SHOW_FULL_ITEM = 'TOGGLE_SHOW_FULL_ITEM';
export const SET_FULL_ITEM = 'SET_FULL_ITEM';
export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';
export const TOGGLE_CART = 'TOGGLE_CART';

export const deleteOrder = (id) => {
    return {
        type: 'DELETE_ORDER',
        payload: id
    }
};

export const addToOrder = (item) => {
    return {
        type: 'ADD_TO_ORDER',
        payload: item
    }
}

export const setCurrentItems = (items) => {
    return {
        type: 'SET_CURRENT_ITEMS',
        payload: items
    }
}

export const toggleShowFullItem = () => {
    return {
        type: 'TOGGLE_SHOW_FULL_ITEM'
    }
}

export const setFullItem = (item) => {
    return {
        type: 'SET_FULL_ITEM',
        payload: item
    }
}

export const chooseCategory = (category) => {
    return {
        type: 'CHOOSE_CATEGORY',
        payload: category
    }
};

export const toggleCart = () => {
    return {
        type: 'TOGGLE_CART'
    }
};