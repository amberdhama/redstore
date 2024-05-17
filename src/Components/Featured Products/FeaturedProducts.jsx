import React from "react";
import FeaturedCol from "./FeaturedCol";
import { NavLink } from "react-router-dom";
import row1 from "./rows";

function FeaturedProd() {
  const chunkSize = 4; 
  const chunkedProducts = [];

  for (let i = 0; i < row1.length; i += chunkSize) {
    chunkedProducts.push(row1.slice(i, i + chunkSize));
  }

  return (
    <div className="smallcontainer">
      <h2 className="title">Featured Products</h2>
      {chunkedProducts.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((product, index) => (
            <NavLink
              to={`/productdet/${rowIndex * chunkSize + index + 1}`}
              key={index}
              className="col-4"
            >
              <FeaturedCol
                img={product.img}
                prod_name={product.prod_name}
                fourth={product.fourth}
                fifth={product.fifth}
              />
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FeaturedProd;
