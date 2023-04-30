import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    `https://react-shopping-cart-67954.firebaseio.com/products.json`
  );
  return response.data.products;
};
