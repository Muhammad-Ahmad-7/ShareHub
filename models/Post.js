import { models } from "mongoose";
import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  text: {
    type: String,
    required: [true, "Description is required."],
  },
});

// Check if the Post model is already defined
const Post = models.Post || model("Post", PostSchema);
export default Post;
