import classNames from "classnames";
import React from "react";

function ButtonShowShoppingCart({ showShoppingCar, onShowShoppingCar }) {
  return (
    <div
      className={classNames(
        "flex",
        "fixed",
        " top-10 ",
        "right-5",
        "cursor-pointer",
        "rounded-full",
        "select-none",
        "bg-yellow-400",
        "z-10",
        "w-10",
        "h-10",
        "justify-center",
        "items-center",
        "ease-linear",
        "transition-transform "
      )}
      onClick={onShowShoppingCar}
    >
      <img
        className="w-6 h-6"
        src={`/../${showShoppingCar ? "x-" : ""}carrito-de-compras.png`}
        alt="Logo"
      />
    </div>
  );
}

export default ButtonShowShoppingCart;
