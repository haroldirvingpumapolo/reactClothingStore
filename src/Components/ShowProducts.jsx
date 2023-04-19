import React from "react";
import Product from "./Product";

function ShowProducts({ dataShowProducts}) {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full justify-start">
        <h1 className="text-2xl">16 Product(s) found</h1>
      </div>
      <div className="flex flex-row flex-wrap w-full justify-between">
        {dataShowProducts.map((product, i) => (
            <div key={i}>
              <Product
                sku={product.sku}
                title={product.title}
                currencyFormat={product.currencyFormat}
                price={product.price}
                installments={product.installments}
                completeProduct={product}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShowProducts;
