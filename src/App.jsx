import axios from "axios";
import { useState, useEffect } from "react";
import ShowProducts from "./Components/ShowProducts";
import dataArrButtons from "./data/dataArrButtons";
import FilterButtons from "./Components/FilterButtons";
import ShoppingCar from "./Components/ShoppingCar";
import ButtonShowShoppingCart from "./Components/ButtonShowShoppingCart";

function App() {
  const [products, setProducts] = useState([]);
  const [buttons, setButtons] = useState(dataArrButtons);
  const [sizes, setSizes] = useState([]);
  const [shoppingCar, setShoppingCar] = useState([]);
  const [showShoppingCar, setShowShoppingCar] = useState(false);

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

  function handleShowShoppingCar() {
    setShowShoppingCar(!showShoppingCar);
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
    <>
      <ButtonShowShoppingCart
        onShowShoppingCar={showShoppingCar}
        onHandleShowShoppingCar={handleShowShoppingCar}
      />
      <div className="App md:items-start flex select-none mt-24 || max-md:flex-col items-center ">
        <FilterButtons
          dataButtons={buttons}
          onHandleSizeClick={handleSizeClick}
        />
        <ShowProducts
          dataShowProducts={products}
          dataSizes={sizes}
          onAddProductItemToCar={addProductItemToCar}
        />
      </div>
      <ShoppingCar
        onshowShoppingCar={showShoppingCar}
        shoppingCar={shoppingCar}
        onRemoveProductShoppingCar={removeProductShoppingCar}
        onSumOrSubtract={onSumOrSubtract}
      />
    </>
  );
}

export default App;
