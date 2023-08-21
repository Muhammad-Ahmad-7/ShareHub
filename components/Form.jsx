import React from "react";
import "@style/style.css";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex flex-col">
      <h2>
        <span className="md:text-5xl text-3xl font-extrabold text-[#471069] m-4">
          {type} post
        </span>
      </h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start"
        >
          <div className="info-container  flex flex-col w-[80vw] m-8">
            <label htmlFor="title" required>
              <span className="font-satoshi text-2xl font-semibold m-1 text-gray-700">
                Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="form_textarea border-2 border-zinc-600 text-black"
            />
            <label className="flex flex-col">
              <span className="font-satoshi text-2xl font-semibold m-1 text-gray-700">
                Description
              </span>
            </label>
            <textarea
              value={post.text}
              rows={7}
              onChange={(e) => setPost({ ...post, text: e.target.value })}
              placeholder="Write your post here"
              required
              className="form_textarea border-2 border-zinc-600"
            />
            <div className="flex-end mx-3 mb-5 gap-4">
              <Link href="/" className="text-gray-500 text-sm mx-2">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white  btn m-2"
              >
                {submitting ? `${type}ing...` : type}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
