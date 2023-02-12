import useSWR from "swr";
import { getPost } from "../api/api";
import { useState } from "react";
import PostList from "./PostList";

function Post() {
  const [limit, setLimit] = useState();
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(`/post?${page}`, () =>
    getPost(limit, page)
  );

  const handleClick = () => {};
  console.log(page, "page");

  return (
    <div className="flex flex-col items-center w-[900px]">
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
          return <PostList post={user} key={user?.id} />;
        })}
      </div>
      <div className="flex justify-between w-[200px] mt-2 items-center p-3">
        <button
          className="border rounded p-1 border-black disabled:text-gray-300"
          disabled={page == 1}
          onClick={() => {
            if (page > 1) {
              setPage((prev) => prev - 1);
            }
          }}
        >
          prev
        </button>
        <span>
          {data?.currentPage} of {data?.totalPages}
        </span>
        <button
          className="border rounded p-1 border-black disabled:text-gray-300"
          disabled={page == data?.totalPages}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Post;
