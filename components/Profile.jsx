import React from "react";
import PostCard from "./PostCard";
import "@style/style.css";

const Profile = ({ data, name, desc, handleDelete, handleEdit }) => {
  return (
    <section className="m-8">
      <div>
        <h1 className="text-left">
          <span className="blue_gradient text-4xl font-extrabold">
            {name} Profile
          </span>
        </h1>
        <p className="desc text-left text-xl sm:w-[50%] w-full">{desc}</p>
      </div>
      <div className="mt-16 flex flex-wrap gap-4 mx-auto items-center">
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleDelete={() => handleDelete && handleDelete(post)}
            handleEdit={() => handleEdit && handleEdit(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
