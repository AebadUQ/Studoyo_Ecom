const INIT_STATE = {
    carts: []
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
            // return us all the data whose id doesnot match 
            const data = state?.carts?.filter((element) => element?.id !== action?.payload)
            return {
                ...state,
                carts: data
            }

           
        default:
            return state

    }

  
}