import React from "react";

export interface Post {
  userId: Number;
  id: Number;
  title: String;
}
export interface DataList {
  postList: Post[];
  page: number;
  totalPages: number;
  currentPage?: number;
}

type PagiProps = {
  data: DataList;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

function PagiButton({ data, setPage, page }: PagiProps) {
  return (
    <div className="flex justify-between w-[200px] mt-3 items-center p-3">
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
        {data?.currentPage} of {Number(data?.totalPages)}
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
  );
}

export default PagiButton;
