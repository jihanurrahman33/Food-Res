import Link from "next/link";
import React from "react";
import AddCartButton from "../buttons/AddCartButton";
import Image from "next/image";

/* ---------------- Main Card ---------------- */
const FoodCard = ({ food }) => {
  return (
    <div className="max-w-sm h-full rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition flex flex-col">
      {/* Image */}
      <Image
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
        width={300}
        height={192}
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title + Category */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
            {food.title}
          </h2>

          <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-700 whitespace-nowrap">
            {food.category}
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-orange-600 mb-4">৳ {food.price}</p>

        {/* Buttons (ALWAYS bottom) */}
        <div className="flex gap-3 mt-auto">
          <AddCartButton food={food} />
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
