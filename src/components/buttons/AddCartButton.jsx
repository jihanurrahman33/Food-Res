"use client";
import { CartContext } from "@/contexts/CartProvider";
import React, { use, useState } from "react";

const AddCartButton = ({ food }) => {
  const [incart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAddtoCart = () => {
    setInCart(true);
    addToCart(food);
  };
  return (
    <button
      onClick={handleAddtoCart}
      disabled={incart}
      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition disabled:bg-gray-400 disabled:text-gray-900"
    >
      {incart ? "Added to Cart" : "Add to Cart"}
    </button>
  );
};

export default AddCartButton;
