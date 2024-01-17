import { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginationComp = ({ setPageNum }: { setPageNum: any }) => {
  const handlePageClick = (num: any) => {
    console.log(num.selected + 1);
    setPageNum(num.selected + 1);
  };
  const pageCount = 200;

  return (
    <div className="mb-20 border-b-2 mt-32 w-1/2 mx-auto overflow-hidden flex justify-center duration-">
      <ReactPaginate
        className="flex gap-4 items-center mb-2"
        containerClassName="mb-40 border-4"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        breakClassName=""
        breakLinkClassName=""
        pageClassName="hover:bg-gray-400 rounded transition duration-300"
        pageLinkClassName="font-bold px-3"
        activeClassName="bg-gray-200 rounded"
        nextClassName="bg-blue-300 flex item-center rounded px-3 py-1 font-bold text-gray-800"
        previousLinkClassName="bg-blue-300 flex item-center rounded px-3 py-1 font-bold text-gray-800"
        nextLinkClassName=""
      />
    </div>
  );
};
export default PaginationComp;
