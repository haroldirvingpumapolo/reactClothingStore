import { useEffect, useState } from "react";
import axios from "axios";
import ShowProducts from "./Components/ShowProducts";
import dataArrButtons from "./data/dataArrButtons";
import FilterButtons from "./Components/FilterButtons";
import ShoppingCar from "./Components/ShoppingCar";

function App() {
  const [products, setProducts] = useState([]);
  const [buttons, setButtons] = useState(dataArrButtons);
  const [sizes, setSizes] = useState([]);
  const [shoppingCar, setShoppingCar] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        setProducts(res.data.products);
      });
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

  function addProductItemToCar(product) {
    shoppingCar.some((item) => item.sku === product.sku)
      ? setShoppingCar(
          shoppingCar.map((itemShoppingCar) =>
            itemShoppingCar.sku === product.sku
              ? { ...itemShoppingCar, quantify: itemShoppingCar.quantify + 1 }
              : itemShoppingCar
          )
        )
      : setShoppingCar([...shoppingCar, { ...product, quantify: 1 }]);
  }

  function onSumOrSubtract(skuValue, sumOrSubtract) {
    setShoppingCar(
      shoppingCar.map((itemShoppingCar) =>
        itemShoppingCar.sku === skuValue
          ? {
              ...itemShoppingCar,
              quantify: itemShoppingCar.quantify + sumOrSubtract,
            }
          : itemShoppingCar
      )
    );
  }

  function removeProductShoppingCar(skuValue) {
    setShoppingCar(
      shoppingCar.filter((itemShoppingCar) => itemShoppingCar.sku !== skuValue)
    );
  }

  return (
    <div className="flex items-start select-none mt-24">
      <FilterButtons
        dataButtons={buttons}
        onHandleSizeClick={handleSizeClick}
      />
      <ShowProducts
        dataShowProducts={products}
        dataSizes={sizes}
        onAddProductItemToCar={addProductItemToCar}
      />
      <ShoppingCar
        shoppingCar={shoppingCar}
        onRemoveProductShoppingCar={removeProductShoppingCar}
        onSumOrSubtract={onSumOrSubtract}
      />
    </div>
  );
}

export default App;
