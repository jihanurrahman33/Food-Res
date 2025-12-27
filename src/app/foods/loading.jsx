import FoodCardSkeleton from "@/components/FoodsLoading/FoodsLoading";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      {[...Array(8)].map((_, index) => (
        <FoodCardSkeleton key={index}></FoodCardSkeleton>
      ))}
    </div>
  );
};

export default LoadingPage;
