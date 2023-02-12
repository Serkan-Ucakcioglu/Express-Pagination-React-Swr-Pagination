import useSWR from "swr";
import { getPost } from "../api/api";
import { useState } from "react";
import PostList from "./PostList";
import PagiButton from "./PagiButton";

function Post() {
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(1);

  const { data, error, isLoading, mutate } = useSWR(`/post?${page}`, () =>
    getPost(limit, page)
  );

  // restore operation
  const handleClick = () => {
    mutate(`/post?${page}`);
  };

  return (
    <div className="flex flex-col items-center w-[900px]">
      <div className="flex h-10 items-center mb-2">
        <input
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          id="limit"
          type="number"
          placeholder="Post limit"
          className="border-2 h-8 border-gray-400 focus:border-gray-600 outline-none rounded"
        />

        <button
          onClick={handleClick}
          className="flex items-center disabled:bg-indigo-300 bg-indigo-600 hover:bg-indigo-800 h-8 rounded text-white p-4  ml-4"
          disabled={!limit && limit < 1}
        >
          limit
        </button>
      </div>
      <div className="mt-3">
        {data?.postList?.map((user) => {
          return <PostList post={user} key={user?.id} />;
        })}
      </div>
      <PagiButton data={data} page={page} setPage={setPage} />
    </div>
  );
}

export default Post;
