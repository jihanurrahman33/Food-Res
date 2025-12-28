import { connect } from "@/app/lib/dbConnect";
import { feedbacks } from "../../route";
import { ObjectId } from "mongodb";
const feedbackCollection = connect("feedbacks");
export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  if (!result) {
    return Response.json({
      status: 404,
      error: "Feedback not found.",
    });
  }
  return Response.json(result);
}
export async function DELETE(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);
  if (!result) {
    return Response.json({
      status: 404,
      error: "Feedback not found.",
    });
  }
  return Response.json(result);
}
export async function PATCH(request, { params }) {
  const { message } = await request.json();
  if (
    message &&
    (message.trim() === "" ||
      message.length > 500 ||
      typeof message !== "string")
  ) {
    return Response.json({
      status: 400,
      error: "Invalid feedback message.",
    });
  }
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: {
      message,
    },
  };
  const result = await feedbackCollection.updateOne(query, newData);

  return Response.json(result);
}
