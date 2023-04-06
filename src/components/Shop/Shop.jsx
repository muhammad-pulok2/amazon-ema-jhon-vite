import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className=" md:flex sm:flex-none justify-between">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-10 mb-10 m-auto w-4/5 ">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className=" bg-orange-200 md:w-1/5 text-center p-5">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
