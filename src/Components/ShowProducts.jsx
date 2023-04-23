import React from "react";
import Product from "./Product";

function ShowProducts({ dataShowProducts, dataSizes, onAddProductItemToCar }) {
  return (
    <div className="flex flex-col w-full items-center relative px-3">
      <div className="flex w-full justify-start">
        <h1 className="text-xl">16 Product(s) found</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        {dataShowProducts
          .filter(
            (product) =>
              dataSizes.length === 0 ||
              dataSizes.some((size) => product.availableSizes.includes(size))
          )
          .map((product, i) => (
            <div key={i} className=" max-w-xs px-1">
              <Product
                sku={product.sku}
                title={product.title}
                currencyFormat={product.currencyFormat}
                price={product.price}
                installments={product.installments}
                completeProduct={product}
                onAddProductItemToCar={onAddProductItemToCar}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShowProducts;
