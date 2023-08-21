"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePostPage = () => {
  const [post, setPost] = useState({ text: "", title: "" });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession(); // Get the session status

  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          userId: session?.user.id,
          text: post.text,
        }),
      });

      if (response) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  // Check if user is authenticated before showing the form
  if (status === "loading") {
    return <p>Loading...</p>; // Display a loading indicator if session status is loading
  }

  if (!session) {
    router.push("/"); // Display a message if user is not signed in
  }

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePostPage;
