import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../types/typesCart";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addProductItemToCar = state.cartItems.some(
        (item) => item.sku === action.payload.sku
      )
        ? state.cartItems.map((itemShoppingCar) =>
            itemShoppingCar.sku === action.payload.sku
              ? {
                  ...itemShoppingCar,
                  quantify: itemShoppingCar.quantify + 1,
                }
              : itemShoppingCar
          )
        : [...state.cartItems, { ...action.payload, quantify: 1 }];

      return { ...state, cartItems: addProductItemToCar };
      

    case REMOVE_FROM_CART:
      const removeProductShoppingCar = state.cartItems.filter(
        (itemShoppingCar) => itemShoppingCar.sku !== action.payload.sku
      );

      return { ...state, cartItems: removeProductShoppingCar };

    case INCREASE_QUANTITY:
      const sumQuantify =  state.cartItems.map((itemShoppingCar) =>
        itemShoppingCar.sku === action.payload.sku
          ? {
              ...itemShoppingCar,
              quantify: itemShoppingCar.quantify + 1,
            }
          : itemShoppingCar
      );

      return { ...state, cartItems: sumQuantify };

    case DECREASE_QUANTITY:
      const subtractQuantify =  state.cartItems.map((itemShoppingCar) =>
        itemShoppingCar.sku === action.payload.sku
          ? {
              ...itemShoppingCar,
              quantify: itemShoppingCar.quantify - 1,
            }
          : itemShoppingCar
      );

      return { ...state, cartItems: subtractQuantify };

    default:
      return state;
  }
};

export default cartReducer;
