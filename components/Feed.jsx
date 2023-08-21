"use client";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data }) => {
  return (
    <div className="mt-16 flex flex-wrap gap-4 mx-auto">
      {data.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPost, setAllPost] = useState([]);
  const fetchAllPost = async () => {
    const res = await fetch("/api/post");
    const data = await res.json();
    console.log(data);
    setAllPost(data);
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  return (
    <div>
      <PostCardList data={allPost} />
    </div>
  );
};

export default Feed;
