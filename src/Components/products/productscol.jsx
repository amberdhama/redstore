import React from "react";

function ProductCol(props) {
  return (
    <div className="col-4">
      <img src={props.img} />
      <h4>{props.prod_name}</h4>
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className={props.fourth}></i>
        <i className={props.fifth}></i>
      </div>
      <p>$50.00</p>
    </div>
  );
}

export default ProductCol;