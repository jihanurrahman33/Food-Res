import { connect } from "@/app/lib/dbConnect";
import FeedbackForm from "@/components/forms/FeedbackForm";
import React from "react";

const AddFeedbackPage = () => {
  const postFeedback = async (message) => {
    "use server";
    const result = await connect("feedbacks").insertOne({
      message,
      date: new Date(),
    });
    return { ...result, insertedId: result.insertedId.toString() };
  };
  return (
    <div>
      <h2 className="text-center text-2xl">Add Feedback</h2>
      <FeedbackForm postFeedback={postFeedback}></FeedbackForm>
    </div>
  );
};

export default AddFeedbackPage;
