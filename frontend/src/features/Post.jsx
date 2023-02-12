import useSWR from "swr";
import { getPost } from "../api/api";
import { useState } from "react";

function Post() {
  const [limit, setLimit] = useState();
  const [page, setPage] = useState();

  const { data, error, isLoading, mutate } = useSWR("/post", () =>
    getPost(limit, page)
  );

  const handleClick = () => {
    mutate("/post");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-10 items-center mb-2">
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
      </div>
      <div className="flex justify-around">
        <button
          className="border rounded p-1 border-black"
          onClick={() => {
            setPage(data.currentPage + 1);
          }}
        >
          prev
        </button>
        <span>
          {data?.currentPage} of {data?.totalPages}
        </span>
        <button
          className="border rounded p-1 border-black"
          onClick={() => {
            setPage(data.currentPage + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Post;
