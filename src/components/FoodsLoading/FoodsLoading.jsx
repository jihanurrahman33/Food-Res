import React from "react";

/* ---------------- Skeleton Component ---------------- */
const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-5 w-32 bg-gray-300 rounded" />
          <div className="h-4 w-20 bg-gray-300 rounded-full" />
        </div>

        <div className="h-5 w-24 bg-gray-300 rounded" />

        <div className="flex gap-3">
          <div className="h-10 flex-1 bg-gray-300 rounded-lg" />
          <div className="h-10 flex-1 bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default FoodCardSkeleton;
