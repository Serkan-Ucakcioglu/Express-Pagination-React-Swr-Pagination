import React from "react";

function PostList({ post }) {
  return (
    <div className="h-12 mt-2 border rounded border-indigo-600 px-3 text-left flex items-center">
      {post?.title}
    </div>
  );
}

export default PostList;
