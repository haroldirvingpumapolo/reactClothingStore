import {
  FETCH_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_BY_SIZES,
} from "../types/typesProducts";

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const filterProductsBySizes = (sizes) => ({
  type: FILTER_PRODUCTS_BY_SIZES,
  payload: sizes,
});

