import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/actionsCart";

function Product({
  sku,
  title,
  currencyFormat,
  price,
  installments,
  completeProduct,
}) {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className=" flex flex-col justify-center items-center py-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className="max-md:w-80 max-md:h-64 "
        src={`/../assets/products/${sku}-${hovered ? 2 : 1}-product.webp`}
        alt={sku}
      />
      <p className="text-xl">{title}</p>
      <p className="text-2xl font-bold">{`${currencyFormat}${price}`}</p>
      <p className="text-xl">{`or ${installments} x ${currencyFormat} ${(
        price / installments
      ).toFixed(2)}`}</p>
      <button
        className={`w-full h-14 text-white  ${
          hovered ? "bg-yellow-400" : "bg-gray-800"
        }`}
        onClick={() => dispatch(addToCart(completeProduct))}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
