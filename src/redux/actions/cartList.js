export const addNewPrduct = (product) =>{
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    }
}

export const removeProduct = (id) =>{
    return {
        type: 'REMOVE_PRODUCT',
        payload: id,
    }
}

export const quantityIncrease = (id) =>{
    return {
        type: 'INCREASE',
        payload: id,
    }
}

export const quantityDecrease = (id) =>{
    return {
        type: 'DECREASE',
        payload: id,
    }
}
