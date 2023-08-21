"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "../../components/Form";

const Updatepost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  console.log(postId);

  const [post, setPost] = useState({ title: "", text: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getpostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();
      console.log(data.title, data.text);
      setPost({
        title: data.title,
        text: data.text,
      });
    };

    if (postId) getpostDetails();
  }, [postId]);

  const updatepost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postId) return alert("Missing postId!");

    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          text: post.text,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatepost}
    />
  );
};

export default Updatepost;
