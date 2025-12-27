"use client";
import { CartContext } from "@/contexts/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <h2>{cart.length} Items in Cart</h2>
      <div className="mt-4 flex flex-col gap-4">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border-b pb-2">
            <img
              src={item.foodImg}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-orange-600 font-bold">৳ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
