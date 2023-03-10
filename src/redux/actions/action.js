export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}
export const DELETE = (id) => {
    return {

        type: "REMOVE_CART",
        payload: id

    }
}
export const DECQUANTITY = (item) => {
    return {
        type: "DEC_QUANTITY",
        payload: item
    }
}
export const INCQUANTITY = (item) => {
    return {
        type: "INC_QUANTITY",
        payload: item
    }
}