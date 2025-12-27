import FoodCard from "@/components/FoodCard/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch/InputSearch";
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await res.json();
  return data.foods || [];
};
const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;

  const foods = await getFoods(search);
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-2">
        Total {foods.length} Foods Found
      </h2>
      <div className="my-3">
        <InputSearch></InputSearch>
      </div>
      <div className="flex gap-6 mt-4">
        <div className="flex-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="flex-1 border p-4 rounded-md h-[800px]">
          <h2 className="p-4 text-2xl">Cart Items</h2> <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
