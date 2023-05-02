import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../store/actions/actionsCart";

function ProductInCart({
  sku,
  title,
  availableSizes,
  style,
  currencyFormat,
  price,
  quantify,
  completeProduct,
}) {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col text-base p-2">
      <div className="flex justify-end w-full">
        <button
          className=" text-black font-bold"
          onClick={() => {
            dispatch(removeFromCart(completeProduct));
          }}
        >
          X
        </button>
      </div>
      <div className="flex content-between justify-between ">
        <div className="flex flex-row">
          <img
            className="w-24 pr-2"
            src={`/../assets/products/${sku}-1-cart.webp`}
            alt={`${sku}`}
          />
          <div className="flex flex-col content-around ">
            <p>{title}</p>
            <p>
              {availableSizes} | {style}
            </p>
            <p>Quantify: {quantify}</p>
          </div>
        </div>
        <div className="p-5">
          <p>{`${currencyFormat}${price}`}</p>
          <div>
            <button
              className={classNames(
                "bg-gray-400 ",
                " w-6 ",
                quantify === 1 && "pointer-events-none"
              )}
              onClick={() => {
                dispatch(decreaseQuantity(completeProduct));
              }}
            >
              -
            </button>
            <button
              className="bg-black w-7 text-white"
              onClick={() => {
                dispatch(increaseQuantity(completeProduct));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
