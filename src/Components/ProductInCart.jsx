import classNames from "classnames";
import React from "react";

function ProductInCart({
  sku,
  title,
  availableSizes,
  style,
  currencyFormat,
  price,
  quantify,
  onRemoveProductShoppingCar,
  onSumOrSubtract,
}) {
  return (
    <div className="w-full flex flex-col text-base p-2">
      <div className="flex justify-end w-full">
        <button
          className=" text-black font-bold"
          onClick={() => {
            onRemoveProductShoppingCar(sku);
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
              {availableSizes[0]} | {style}
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
                onSumOrSubtract(sku, -1);
              }}
            >
              -
            </button>
            <button
              className="bg-black w-7 text-white"
              onClick={() => {
                onSumOrSubtract(sku, +1);
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
