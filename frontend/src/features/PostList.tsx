import React from "react";
import { Post } from "./PagiButton";

interface IPost {
  post: Post;
}
function PostList({ post }: IPost) {
  return (
    <div className="h-12 mt-2 border-2 rounded border-indigo-600 px-3 text-left flex items-center">
      {post?.id}. {post?.title}
    </div>
  );
}

export default PostList;
