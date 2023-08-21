"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchPost = async () => {
      console.log("in session user  id");
      console.log(session?.user.id);
      const response = await fetch(`/api/user/${session?.user.id}/post`);
      const data = await response.json();
      console.log(data);
      setPost(data);
    };
    if (session?.user.id) fetchPost();
  }, [session?.user.id]);
  const handleDelete = async (postToDelete) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${postToDelete._id.toString()}`, {
          method: "DELETE",
        });

        // Assuming you have a state variable named 'posts' that holds the array of posts
        const updatedPosts = post.filter(
          (post) => post._id !== postToDelete._id
        );
        setPost(updatedPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = (post) => {
    router.push(`/update-post?id=${post._id}`);
  };

  return (
    <div>
      {session?.user ? (
        <Profile
          name="My"
          desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
          data={post}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p>Please Signin With Google First</p>
      )}
    </div>
  );
};

export default page;
