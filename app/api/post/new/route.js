import Post from "@models/Post";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  console.log("in POST");
  const { userId, title, text } = await req.json();
  try {
    await connectToDB();
    const newPost = new Post({
      creator: userId, // Corrected typo: change 'creater' to 'creator'
      title,
      text,
    });
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the post" });
  }
};
