import { feedbacks } from "../route";

export async function GET(request) {
  return Response.json(feedbacks);
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
    id: Date.now().toString(),
    message: message.trim(),
    date: new Date().toISOString(),
  };
  feedbacks.push(newFeedback);
  return Response.json({
    status: 201,
    feedback: newFeedback,
  });
}
