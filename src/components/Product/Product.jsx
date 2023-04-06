import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;
  
  
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className=" text-md font-medium text-blue-500 font-sans">{name}</h6>
        <p className="text-xl text-red-500 font-medium">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button className="p-2 font-medium text-green-600 absolute bottom-0 w-full transition duration-500" onClick={() => handleAddToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
