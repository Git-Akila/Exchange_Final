import React,{useState} from 'react'
import {
    BiSolidSkipPreviousCircle,
    BiSolidSkipNextCircle,
  } from "react-icons/bi";
function SwapHistory() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
  
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    // const currentRows=data.slice(indexOfFirstRow,indexOfLastRow);
  
    // const totalPages=Math.ceil(data.length/rowsPerPage)
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      // if (currentPage < totalPages) {
      //   setCurrentPage(currentPage + 1);
      // }
    };
    
  return (
    <div className="mx-auto container text-[16px]">
    <div className="justify-center">
      <table className="bg-slate-50 w-full h-full">
        <thead>
          <tr className="border border-b-slate-300">
            <th className="py-2">S.No</th>
            <th className="py-2">Buy Currency</th>
            <th className="py-2">Spend Amount</th>
            <th className="py-2">Buy Amount</th>
            <th className="py-2">Payment ID</th>
            <th className="py-2">Date And Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-b-slate-300 ">
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
          </tr>
          <tr className="border border-b-slate-300 ">
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
          </tr>
          <tr className="border border-b-slate-300 ">
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
          </tr>
          <tr className="border border-b-slate-300 ">
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
            <td className="py-2">::</td>
          </tr>
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          // className={`px-4 py-2 ${
          //   currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
          // }`}
        >
          <BiSolidSkipPreviousCircle size={20} />
        </button>
        <span>Page{/* Page  {currentPage} of {totalPages} */}</span>
        <button
          onClick={handleNextPage}
          // disabled={currentPage === totalPages}
          // className={`px-4 py-2 ${
          //   currentPage === totalPages
          //     ? "bg-gray-300"
          //     : "bg-blue-500 text-white"
          // }`}
        >
          {/* Next */}
          <BiSolidSkipNextCircle size={20} />
        </button>
      </div>
    </div>
  </div>
  )
}

export default SwapHistory