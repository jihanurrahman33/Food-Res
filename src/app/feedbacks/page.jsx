import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Feedbacks | Food Res",
  description: "User feedbacks for Food Res",
};
const getFeedbacks = async () => {
  const res = await fetch(`http://localhost:3000/api/feedback/`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};
const FeedbacksPage = async () => {
  const feedbacks = await getFeedbacks();
  return (
    <div>
      <h2 className="text-2xl font-bold">{feedbacks.length} Feedbacks Found</h2>
      <div className="my-5">
        {" "}
        <Link href={"/feedbacks/add"} className="btn">
          Add Feedback
        </Link>
      </div>
      <div className="my-3 space-y-5">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedbacksPage;
