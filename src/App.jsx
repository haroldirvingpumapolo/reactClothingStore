import { useState, useEffect } from "react";
import ShowProducts from "./Components/ShowProducts";
import FilterButtons from "./Components/FilterButtons";
import ShoppingCar from "./Components/ShoppingCar";
import ButtonShowShoppingCart from "./Components/ButtonShowShoppingCart";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/api/apiProducts";
import { fetchProductsSuccess } from "./store/actions/actionsProducts";

function App() {
  const [showShoppingCar, setShowShoppingCar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(fetchProductsSuccess(products));
    });
  }, [dispatch]);

  function handleShowShoppingCar() {
    setShowShoppingCar(!showShoppingCar);
  }

  return (
    <>
      <ButtonShowShoppingCart
        onShowShoppingCar={showShoppingCar}
        onHandleShowShoppingCar={handleShowShoppingCar}
      />
      <div className="App md:items-start flex select-none mt-24 max-md:flex-col max-md:items-center ">
        <FilterButtons />
        <ShowProducts />
      </div>
      <ShoppingCar onshowShoppingCar={showShoppingCar} />
    </>
  );
}

export default App;
