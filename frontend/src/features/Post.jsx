import useSWR from "swr";
import { getPost } from "../api/api";
import { useState } from "react";

function Post() {
  const [limit, setLimit] = useState();

  const { data, error, isLoading, mutate } = useSWR("/post", () =>
    getPost(limit)
  );
  const [page, setPage] = useState(data ? data.currentPage : null);

  const handleClick = () => {
    mutate("/post");
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-10 items-center">
        <input
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          id="limit"
          type="number"
          className="border-2 h-8 border-gray-400 focus:border-gray-600 outline-none rounded"
        />

        <button
          onClick={handleClick}
          className="flex items-center bg-indigo-600 h-8 rounded text-white p-4  ml-4"
        >
          limit
        </button>
      </div>
      <div>
        {data?.postList?.map((user) => {
          return <div>{user.title}</div>;
        })}
        {page}
      </div>
    </div>
  );
}

export default Post;
