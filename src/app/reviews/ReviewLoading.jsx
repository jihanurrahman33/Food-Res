import React from "react";
import ReviewCardSkeleton from "@/components/ReviewCardSkeleton/ReviewCardSkeleton";
const ReviewLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      {[...Array(8)].map((_, index) => (
        <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
