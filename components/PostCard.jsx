import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const PostCard = ({ post, handleDelete, handleEdit }) => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const handleProfileClick = async () => {
    console.log(post);
    if (post.creator._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };
  return (
    <section className="card flex justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col-reverse">
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900">
                {post.creator.username}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                {post.creator.email}
              </p>
            </div>
            <Image
              src={post.creator.image}
              onClick={handleProfileClick}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain profile border-black border-2 cursor-pointer"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.text}</p>
          </div>
        </div>
      </div>
      <div>
        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <>
            <button className="btn w-full" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn w-full" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default PostCard;
