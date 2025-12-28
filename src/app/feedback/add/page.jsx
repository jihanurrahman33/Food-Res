import { connect } from "@/lib/dbConnect";
import FeedbackForm from "@/components/forms/FeedbackForm";
import React from "react";
import { postFeedback } from "@/action/server/feedback";

const AddFeedbackPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl">Add Feedback</h2>
      <FeedbackForm postFeedback={postFeedback}></FeedbackForm>
    </div>
  );
};

export default AddFeedbackPage;
