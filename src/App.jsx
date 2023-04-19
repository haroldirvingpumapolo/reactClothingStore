import { useEffect, useState } from "react";
import axios from "axios";
import ShowProducts from "./Components/ShowProducts";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);

  return (
    <div className="flex items-start select-none mt-24">
      <ShowProducts
        dataShowProducts={products}
      />
    </div>
  );
}

export default App;
