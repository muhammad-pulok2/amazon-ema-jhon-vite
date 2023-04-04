import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="price">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
