import React from "react";
import classNames from "classnames";

function FilterButtons({ dataButtons, onHandleSizeClick }) {
  return (
    <div className="flex flex-col md:h-96 px-10 max-md: h-32">
      <h1 className="text-xl"> Sizes:</h1>
      <div className="flex md:flex-col ||max-md: w-full flex-row flex-wrap ">
        {dataButtons.map((button, i) => {
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
              onClick={() => onHandleSizeClick(button.buttonValue)}
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
