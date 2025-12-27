export const feedbacks = [
  {
    id: 1,
    message: "Great service!",
  },
  {
    id: 2,
    message: "Could improve the delivery time.",
  },
];
export async function GET(request) {
  return Response.json({ status: 200, message: "Hello, world!" });
}
