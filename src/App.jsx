import { useEffect, useState } from "react";
import axios from "axios";
import ShowProducts from "./Components/ShowProducts";
import dataArrButtons from "./Components/dataArrButtons";
import FilterButtons from "./Components/FilterButtons";

function App() {
  const [products, setProducts] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        setProducts(res.data.products);
      });
    setButtons(dataArrButtons);
  }, []);

  function handleSizeClick(size) {
    setButtons(
      buttons.map((button) =>
        button.buttonValue === size
          ? { ...button, select: !button.select }
          : button
      )
    );
    sizes.includes(size)
      ? setSizes(sizes.filter((s) => s !== size))
      : setSizes([...sizes, size]);
  }

  return (
    <div className="flex items-start select-none mt-24">
      <FilterButtons
        dataButtons={buttons}
        onHandleSizeClick={handleSizeClick}
      />
      <ShowProducts dataShowProducts={products} dataSizes={sizes} />
    </div>
  );
}

export default App;
