import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";
import Link from "next/link";
import React from "react";
import { connect } from "../../lib/dbConnect";
import { getFeedbacks } from "@/action/server/feedback";
export const metadata = {
  title: "Feedbacks | Food Res",
  description: "User feedbacks for Food Res",
};
export const dynamic = "force-dynamic";
// const getFeedbacks = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
//     next: { revalidate: 60 },
//   });

//   return await res.json();
// };
const FeedbackPage = async () => {
  const feedbacks = await getFeedbacks();

  return (
    <div>
      <h2 className="text-2xl font-bold">{feedbacks.length} Feedbacks Found</h2>
      <div className="my-5">
        {" "}
        <Link href={"/feedback/add"} className="btn">
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

export default FeedbackPage;
