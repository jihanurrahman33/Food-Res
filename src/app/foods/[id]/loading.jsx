import React from "react";

const FoodDetailsLoading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-80 bg-gray-300 rounded-xl" />

        <div className="space-y-4">
          <div className="h-8 w-64 bg-gray-300 rounded" />
          <div className="h-5 w-32 bg-gray-300 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />

          <div className="h-10 w-40 bg-gray-300 rounded" />

          <div className="flex gap-4 mt-6">
            <div className="h-12 w-40 bg-gray-300 rounded-lg" />
            <div className="h-12 w-40 bg-gray-300 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsLoading;
