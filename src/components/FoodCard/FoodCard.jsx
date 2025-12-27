import Link from "next/link";
import React from "react";
import AddCartButton from "../buttons/AddCartButton";
import Image from "next/image";

/* ---------------- Main Card ---------------- */
const FoodCard = ({ food }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
      {/* Image */}
      {/* <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
      /> */}
      <Image
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
        width={300}
        height={192}
      ></Image>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{food.title}</h2>

          <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">
            {food.category}
          </span>
        </div>

        <p className="text-lg font-bold text-orange-600 mb-4">৳ {food.price}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <AddCartButton food={food}></AddCartButton>
          <Link
            href={`/foods/${food.id}`}
            className="flex-1 border text-center border-orange-500 text-orange-500 hover:bg-orange-50 py-2 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
