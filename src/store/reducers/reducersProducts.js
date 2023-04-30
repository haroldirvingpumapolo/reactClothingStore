import {
  FETCH_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_BY_SIZES,
} from "../types/typesProducts";

const initialState = {
  products: [],
  filteredProducts: [],
  selectedSizes: [],
  dataArrButtons: [
    { buttonValue: "X", select: false },
    { buttonValue: "XS", select: false },
    { buttonValue: "S", select: false },
    { buttonValue: "M", select: false },
    { buttonValue: "ML", select: false },
    { buttonValue: "L", select: false },
    { buttonValue: "XL", select: false },
    { buttonValue: "XXL", select: false },
  ],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case FILTER_PRODUCTS_BY_SIZES:
      const selectedSizesModify = state.selectedSizes.includes(action.payload)
        ? state.selectedSizes.filter((s) => s !== action.payload)
        : [...state.selectedSizes, action.payload];

      const filteredBySizes = state.products.filter(
        (product) =>
          selectedSizesModify.length === 0 ||
          selectedSizesModify.some((size) =>
            product.availableSizes.includes(size)
          )
      );

      const selectingButton = state.dataArrButtons.map((button) =>
        button.buttonValue === action.payload
          ? { ...button, select: !button.select }
          : button
      );

      return {
        ...state,
        filteredProducts: filteredBySizes,
        selectedSizes: selectedSizesModify,
        dataArrButtons: selectingButton,
      };

    default:
      return state;
  }
};

export default productsReducer;
