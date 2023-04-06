import React from "react";

const Cart = ({cart}) => {
    // const cart = props.cart; option-1
    // const {cart} = props; Option-2
    // console.log(cart)
    let total = 0;
    for(const product of cart){
      total = total + product.price;
    }
  return (
    <div className="text-left">
      <h2 className=" text-2xl font-semibold mb-4">Order Summary</h2>
      <p className=" p-1">Selected Items: {cart.length}</p>
      <p className=" p-1">Selected Items: </p>
      <p className=" p-1">Total Price: {total}</p>
      <p className=" p-1">Total Shipping Charge: </p>
      <h6 className=" mt-3 text-xl font-semibold">Grand Total:</h6>
    </div>
  );
};

export default Cart;
