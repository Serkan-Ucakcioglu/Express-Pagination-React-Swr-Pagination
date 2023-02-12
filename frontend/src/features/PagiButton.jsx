import React from "react";

function PagiButton({ data, setPage }) {
  return (
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
  );
}

export default PagiButton;
