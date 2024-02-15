import { comments } from "../data";
export async function GET(request, { params }) {
  console.log(comments);
  const comment = comments.find(
    ({ id }) => parseInt(params.id) === parseInt(params.id)
  );
  console.log(comment);
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(({ id }) => id === parseInt(params.id));
    if (index === -1) {
      throw new Error("Comment not found");
    }
    comments[index].text = text;
    return Response.json(comments[index]);
  } catch (error) {
    return Response.json({
      error: error.message,
      errorMessage: error.stack,
    });
  }
}
