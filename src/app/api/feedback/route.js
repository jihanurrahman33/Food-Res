import { connect } from "@/app/lib/dbConnect";
import { feedbacks } from "../route";
import { revalidatePath } from "next/cache";
const feedbackCollection = connect("feedbacks");
export async function GET(request) {
  const result = await feedbackCollection.find({}).toArray();
  return Response.json(result);
}
export async function POST(request) {
  const { message } = await request.json();
  if (
    !message ||
    message.trim() === "" ||
    message.length > 500 ||
    typeof message !== "string"
  ) {
    return Response.json({
      status: 400,
      error: "Invalid feedback message.",
    });
  }
  const newFeedback = {
    message: message.trim(),
    date: new Date().toISOString(),
  };
  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedbacks");
  return Response.json(result);
}
