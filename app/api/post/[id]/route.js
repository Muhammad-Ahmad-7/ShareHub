import Post from "@models/Post";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");
    if (!post) return new Response("Post Not Found", { status: 404 });
    console.log(post);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  console.log("IN DELETE");
  try {
    await connectToDB();
    await Post.findByIdAndDelete(params.id);
    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  console.log("IN EDIT API");
  // console.log(param.id);
  const { title, text } = await request.json();
  console.log(title, text);
  try {
    await connectToDB();
    const existingPost = await Post.findById(params.id);
    if (!existingPost) {
      return new Response("Prompt not found", { status: 404 });
    }
    // Update the post with the provided data and save it to DB
    existingPost.text = text;
    existingPost.title = title;
    await existingPost.save();
    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating Prompt", { status: 500 });
  }
};
