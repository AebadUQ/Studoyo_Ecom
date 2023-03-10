const INIT_STATE = {
    carts: [],
    total:0
};
export const cardReducer = (state = INIT_STATE, action) => {
  switch (action?.type) {
    case "ADD_CART":
      const newItem = action.payload;
      const itemExists = state.carts.some(item => item.id === newItem.id);

      if (itemExists) {
        return state;
      } else {
        return {
          ...state,
          carts: [...state.carts, newItem]
        };
      }
    case "REMOVE_CART":
      const updatedCarts = state.carts.filter(item => item.id !== action.payload);
      return {
        ...state,
        carts: updatedCarts,
        total: updatedCarts.reduce((acc, item) => acc + item.price * item.qnty, 0)
      };
    case "INC_QUANTITY":
      const itemInd = state.carts.findIndex(item => item.id === action.payload.id);
      if (state.carts[itemInd]?.qnty >= 1) {
        const updatedItem = {
          ...state.carts[itemInd],
          qnty: state.carts[itemInd].qnty + 1
        };
        const updatedCarts = [
          ...state.carts.slice(0, itemInd),
          updatedItem,
          ...state.carts.slice(itemInd + 1)
        ];
        return {
          ...state,
          carts: updatedCarts,
          total: updatedCarts.reduce((acc, item) => acc + item.price * item.qnty, 0)
        };
      }
      return state;
    case "DEC_QUANTITY":
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);
      if (state.carts[itemIndex]?.qnty >= 1) {
        const updatedItem = {
          ...state.carts[itemIndex],
          qnty: state.carts[itemIndex].qnty - 1
        };
        const updatedCarts = [
          ...state.carts.slice(0, itemIndex),
          updatedItem,
          ...state.carts.slice(itemIndex + 1)
        ];
        return {
          ...state,
          carts: updatedCarts,
          total: updatedCarts.reduce((acc, item) => acc + item.price * item.qnty, 0)
        };
      }
      return state;
    default:
      return state;
  }
};
