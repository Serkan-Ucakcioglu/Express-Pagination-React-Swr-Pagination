import React from "react";
import { Post } from "./Post";

type PostTypes = {
  post: Post;
};

function PostList({ post }: PostTypes) {
  return (
    <div className="h-12 mt-2 border-2 rounded border-indigo-600 px-3 text-left flex items-center">
      {post?.id}. {post?.title}
    </div>
  );
}

export default PostList;
