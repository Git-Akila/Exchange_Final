import React,{useState} from 'react'
import {
  MdVisibility,
  MdOutlineCloudDownload,
  MdVisibilityOff,
} from "react-icons/md";

import { BsCalendarDate } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
function OpenOrder() {
   //searching
   const [query, setQuery] = useState("");
   const handleSearch = () => {
     //data(query);
     setQuery(query);
   };
 
   //FilteredOption
   const [selectedValue, setSelectedValue] = useState("");
 
   const handleChange = (e) => {
     setSelectedValue(e.target.value);
     //data(e.target.value);
   };
 
   //Datepicker
   const [startDate, setStartDate] = useState(null);
   const handleDateChange = (date) => {
     setStartDate(date);
     // data(date);
     startDate(date);
   };
 
  return (
    <div className="mx-auto container text-[16px]">
    <div className="justify-center">
      <div className="justify-between flex">
        
        <h2 className=" font-semibold text-lg mb-2 mt-2">
          Open History
        </h2>
        <button className="p-2 bg-blue-200 flex text-center items-center gap-2 rounded-md">
          Download
          <MdOutlineCloudDownload />
        </button>
      </div>
      <div className="gap-2 flex justify-between mt-3 mb-3">
        <div className="flex items-center text-slate-400">
          <select
            value={selectedValue}
            onChange={handleChange}
            className="border p-2 rounded-lg border-blue-200"
          >
            <option value="">All</option>
            <option value="Flat">Flat</option>
            <option value="Crypto">Crypto</option>
          </select>
        </div>
        <div className="flex items-center text-slate-400">
          <select className="border p-2 rounded-lg border-blue-200">
            <option value="">All</option>
          </select>
        </div>
        <div className="flex items-center text-slate-400">
          <select className="border p-2 rounded-lg border-blue-200">
            <option value="">All</option>
          </select>
        </div>
        <div className="flex items-center text-slate-400">
          <select className="border p-2 rounded-lg border-blue-200">
            <option value="">All</option>
          </select>
        </div>
       

        <div
          onClick={handleSearch}
          className="flex items-center
      border p-2 rounded-lg mr-2 border-blue-200 "
        >
          <input
            type="text"
            placeholder="search..."
            className="focus:outline-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FcSearch size={30} />
        </div>
      </div>
      <table className="bg-slate-50 border-2 border-gray-200 w-full h-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-2">Date</th>
            <th className="py-2">Pair</th>
            <th className="py-2">Type/Side</th>
            <th className="py-2">Price</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Fillter</th>
            <th className="py-2">Status</th>
           
          </tr>
        </thead>
        <tbody>
          <tr className="border-2  border-slate-50">
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">
              <button className="bg-blue-300 px-2 rounded-lg">
                ......
              </button>
            </td>
            <td className="py-2">
              <MdVisibility />
              <MdVisibilityOff />
            </td>
          </tr>
          <tr className="border-2  border-slate-50">
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">
              <button className="bg-blue-300 px-2 rounded-lg">
                ......
              </button>
            </td>
            <td className="py-2">
              <MdVisibility />
              <MdVisibilityOff />
            </td>
          </tr>
          <tr className="border-2  border-slate-50">
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">
              <button className="bg-blue-300 px-2 rounded-lg">
                ......
              </button>
            </td>
            <td className="py-2">
              <MdVisibility />
              <MdVisibilityOff />
            </td>
          </tr>
          <tr className="border-2  border-slate-50">
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">
              <button className="bg-blue-300 px-2 rounded-lg">
                ......
              </button>
            </td>
            <td className="py-2">
              <MdVisibility />
              <MdVisibilityOff />
            </td>
          </tr>
          <tr className="border-2  border-slate-50">
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">..</td>
            <td className="py-2">
              <button className="bg-blue-300 px-2 rounded-lg">
                ......
              </button>
            </td>
            <td className="py-2">
              <MdVisibility />
              <MdVisibilityOff />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default OpenOrder