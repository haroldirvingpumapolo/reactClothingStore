import React from "react";
import ProductInCart from "./ProductInCart";
import classNames from "classnames";
import { useSelector } from "react-redux";

function ShoppingCar({ onshowShoppingCar }) {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <div
      className={classNames(
        onshowShoppingCar ? "opacity-0" : "opacity-100",
        "text-white",
        "fixed",
        "top-0",
        "h-screen",
        "px-5",
        "right-0",
        "w-full",
        "md:max-w-lg",
        "h-screen",
        "bg-gray-900",
        "user-select-none",
        "transition-transform ",
        "ease-linear",
        "opacity-100",
        "dark:bg-gray-800",
        " dark:text-white",
        " dark:hover:bg-gray-700",
        onshowShoppingCar ? "translate-x-0" : " translate-x-full"
      )}
    >
      <h1 className="text-2xl pt-24 ">ShoppingCar</h1>
      <div className="overflow-auto h-96 ">
        {cartItems.map((product, i) => (
          <div key={i}>
            <ProductInCart
              sku={product.sku}
              title={product.title}
              availableSizes={product.availableSizes[0]}
              style={product.style}
              currencyFormat={product.currencyFormat}
              price={product.price}
              quantify={product.quantify}
              completeProduct={product}
            />
          </div>
        ))}
      </div>
      <div className="carCalculator">
        <div className="flex w-full h-44 items-center justify-between">
          <div>
            <h2 className="text-2xl">SUBTOTAL</h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-4xl  text-yellow-400">
              $
              {cartItems
                .reduce(
                  (total, product) => total + product.price * product.quantify,
                  0
                )
                .toFixed(2)}
            </p>
            <p className="text-xl text-gray-400">
              OR UP TO{"  "}
              {cartItems.length !== 0
                ? (
                    cartItems.reduce(
                      (total, product) =>
                        total +
                        (product.price / product.installments) *
                          product.quantify,
                      0
                    ) / cartItems.length
                  ).toFixed(2)
                : 0}
            </p>
          </div>
        </div>
        <button
          className="w-full h-16 bg-black text-xl text-white"
          onClick={() =>
            alert(
              "Checkout - Subtotal: $ " +
                cartItems
                  .reduce(
                    (total, product) =>
                      total + product.price * product.quantify,
                    0
                  )
                  .toFixed(2)
            )
          }
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default ShoppingCar;
