export const initialState = {
  basket: [],
  user: null,
};

//export const ADD_TO_BASKET = 'ADD_TO_BASKET'

const reducer = (state, action) => {
  console.log("reducer state -----> ", state);
  console.log("reducer action -----> ", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'EMPTY_BASKET':
      return{
          ...state, basket : action.empty
      }
    
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("error");
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
