import React from "react";
import ReviewsPage from "./ReviewsPage";
export const metadata = {
  title: "Reviews",
  description: "Read what our customers have to say about us",
};
const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;
