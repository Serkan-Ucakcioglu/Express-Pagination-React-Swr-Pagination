import useSWR from "swr";
import { getPost } from "../api/api";
import { useState } from "react";
import PostList from "./PostList";
import PagiButton from "./PagiButton";
import Loader from "../assets/Loader";

function Post() {
  const [limit, setLimit] = useState<number>(10); // post limit
  const [page, setPage] = useState<number>(1); //current page

  const { data, error, isLoading, mutate } = useSWR(`/post?${page}`, () =>
    getPost(limit, page)
  );

  // restore operation
  const handleClick = () => {
    mutate(`/post?${page}`); //is requesting again
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1 className="text-center text-red-500">Error....</h1>;
  }
  return (
    <div className="flex flex-col items-center w-[900px]">
      <div className="flex h-10 gap-x-2 items-center mb-2">
        <div className="flex flex-col">
          <label htmlFor="limit" className="text-left">
            Limit
          </label>
          <select
            className="border border-indigo-600 rounded"
            value={limit}
            id="limit"
            onChange={async (e) => {
              await setLimit(e.target.value);
              await handleClick();
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="flex flex-col ml-2">
          <label htmlFor="page" className="text-left">
            Go To Page
          </label>
          <input
            value={page}
            id="page"
            onChange={(e) => {
              if (e.target.value <= data.totalPages) {
                setPage(e.target.value);
              }
            }}
            type="number"
            placeholder="Go to Page"
            className="border-2 px-2 h-8 border-gray-400 focus:border-gray-600 outline-none rounded"
          />
        </div>
      </div>
      <div className="mt-3">
        {data?.postList?.map((user) => (
          <PostList post={user} key={user?.id} />
        ))}
      </div>
      <PagiButton data={data} page={page} setPage={setPage} />
    </div>
  );
}

export default Post;
