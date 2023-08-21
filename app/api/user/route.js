import User from "@models/User";
import { connectToDB } from "@utils/database";

export const GET = async ({ params }) => {
  console.log("IN GET OF USER");
  try {
    await connectToDB();
    const id = params.id;
    const user = await User.findById(id);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Server Error Occured", { status: 500 });
  }
};
