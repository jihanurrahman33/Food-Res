import { feedbacks } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;
  const singleFeedback = feedbacks.find((fb) => fb.id.toString() === id);
  if (!singleFeedback) {
    return Response.json({
      status: 404,
      error: "Feedback not found.",
    });
  }
  return Response.json({
    status: 200,
    feedback: singleFeedback,
  });
}
