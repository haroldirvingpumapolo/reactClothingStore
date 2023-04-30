import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../types/typesCart";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const increaseQuantity = (product) => ({
  type: INCREASE_QUANTITY,
  payload: product,
});

export const decreaseQuantity = (product) => ({
  type: DECREASE_QUANTITY,
  payload: product,
});
