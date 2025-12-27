import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 animate-pulse">
      {/* User Info Skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />

        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="h-3 w-24 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Rating Skeleton */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-300 rounded" />
        ))}
      </div>

      {/* Review Text Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-11/12 bg-gray-300 rounded" />
        <div className="h-4 w-10/12 bg-gray-300 rounded" />
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-4 w-16 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
