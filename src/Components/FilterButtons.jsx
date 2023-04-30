import React from "react";
import classNames from "classnames";
import { filterProductsBySizes } from "../store/actions/actionsProducts";
import { useDispatch, useSelector } from "react-redux";

function FilterButtons() {
  const dispatch = useDispatch();
  const { dataArrButtons } = useSelector((state) => state.productsReducer);

  return (
    <div className="flex flex-col md:h-96 px-10 max-md:h-32">
      <h1 className="text-xl"> Sizes:</h1>
      <div className="flex flex-col max-md:w-full max-md:flex-row max-md:flex-wrap">
        {dataArrButtons.map((button, i) => {
          return (
            <button
              key={i}
              className={classNames(
                "w-9",
                "h-9",
                "mb-5",
                "rounded-full",
                "mx-1",
                !button.select ? "bg-slate-300" : "bg-black ",
                !button.select ? "text-black" : "text-white "
              )}
              onClick={() =>
                dispatch(filterProductsBySizes(button.buttonValue))
              }
            >
              {button.buttonValue}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterButtons;
