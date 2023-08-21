import Post from "@models/Post";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    console.log("In GET");
    await connectToDB();
    const posts = await Post.find({ creator: params.id }).populate("creator");
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
