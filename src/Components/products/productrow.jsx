import React from "react";
import ProductCol from "./productscol";
function ProductRow(props){
    return (
    <div className="row">
        <ProductCol img={`../../../Images/images/product-${props.img1}.jpg`} prod_name="Red Printed Tshirt" fourth="fa-solid fa-star" fifth="fa-regular fa-star" />
        <ProductCol img={`../../../Images/images/product-${props.img2}.jpg`} prod_name="Black Sports Shoes" fourth="fa-solid fa-star-half-stroke" fifth="fa-regular fa-star" />
        <ProductCol img={`../../../Images/images/product-${props.img3}.jpg`} prod_name="Grey Trousers" fourth="fa-solid fa-star-half-stroke" fifth="fa-regular fa-star" />
        <ProductCol img={`../../../Images/images/product-${props.img4}.jpg`} prod_name="Blue Polo" fourth="fa-solid fa-star" fifth="fa-regular fa-star" />
    </div>)
}
export default ProductRow;