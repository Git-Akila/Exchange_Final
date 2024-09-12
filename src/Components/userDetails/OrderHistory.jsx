// import React, { useState, useReducer } from "react";
// import { GiCloudDownload } from "react-icons/gi";
// //npm i framer-motion
// import { motion } from "framer-motion";
// const initialState = {
//   dropdown1: false,
//   dropdown2: false,
//   dropdown3: false,
//   dropdown4: false,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_DROPDOWN1":
//       return { ...state, dropdown1: !state.dropdown1 };
//     case "TOGGLE_DROPDOWN2":
//       return { ...state, dropdown2: !state.dropdown2 };
//     case "TOGGLE_DROPDOWN3":
//       return { ...state, dropdown3: !state.dropdown3 };
//     case "TOGGLE_DROPDOWN4":
//       return { ...state, dropdown4: !state.dropdown4 };
//     default:
//       return state;
//   }
// };

// function OrderHistory() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const options = ["Past 7 days", "Past 30 days", "Past 60 days"];
//   const option = ["Past 3", "Past 4", "Past 5", "Past 6"];

//   return (
//     <div className="mx-auto container ">
//       <div className="justify-center">
//         <div className="justify-between flex">
//           <h2 className="text-blue-700 font-semibold">Orders History</h2>
//           <button className="p-2 rounded-lg flex justify-center items-center text-[14px] gap-2 bg-blue-200">
//             <GiCloudDownload size={20} />
//             <p className=""> Export</p>
//           </button>
//         </div>
//         <div className="justify-around flex mt-5 mb-5 text-[15px]">
//           <div className="relative">
//             <button
//               onClick={() => dispatch({ type: "TOGGLE_DROPDOWN1" })}
//               className="border p-2 rounded w-full bg-white flex
//         items-center justify-between"
//             >
//               Select Time Period<span>{state.dropdown1 ? "▲" : "▼"}</span>
//             </button>
//             {state.dropdown1 && (
//               <motion.ul
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-full left-0 mt-1 w-full border
//             bg-white rounded shadow-md overflow-hidden"
//               >
//                 {options.map((option, index) => (
//                   <li
//                     key={index}
//                     onClick={() => dispatch({ type: "TOGGLE_DROPDOWN1" })}
//                     className="p-2 cursor-pointer hover:bg-gray-100"
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </motion.ul>
//             )}
//           </div>
//           <div className="relative">
//             <button
//               onClick={() => dispatch({ type: "TOGGLE_DROPDOWN2" })}
//               className="border p-2 rounded w-full bg-white
// flex items-center justify-between"
//             >
//               Coin1<span>{state.dropdown2 ? "▲" : "▼"}</span>
//             </button>
//             {state.dropdown2 && (
//               <motion.ul
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-full left-0 mt-1 w-full bg-white border rounded shadow-md overflow-hidden"
//               >
//                 {option.map((option, index) => (
//                   <li
//                     key={index}
//                     onClick={() => dispatch({ type: "TOGGLE_DROPDOWN2" })}
//                     className="p-2 cursor-pointer hover:bg-gray-100"
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </motion.ul>
//             )}
//           </div>
//           <div className="relative">
//             <button
//               onClick={() => dispatch({ type: "TOGGLE_DROPDOWN3" })}
//               className="border p-2 rounded w-full bg-white
// flex items-center justify-between"
//             >
//               All<span>{state.dropdown2 ? "▲" : "▼"}</span>
//             </button>
//             {state.dropdown3 && (
//               <motion.ul
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute top-full left-0 mt-1 w-full bg-white border rounded shadow-md overflow-hidden"
//               >
//                 {option.map((option, index) => (
//                   <li
//                     key={index}
//                     onClick={() => dispatch({ type: "TOGGLE_DROPDOWN3" })}
//                     className="p-2 cursor-pointer hover:bg-gray-100"
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </motion.ul>
//             )}
//           </div>
//           <div className="relative">
//           <button
//             onClick={() => dispatch({ type: "TOGGLE_DROPDOWN4" })}
//             className="border p-2 rounded w-full bg-white
// flex items-center justify-between"
//           >
//             All<span>{state.dropdown2 ? "▲" : "▼"}</span>
//           </button>
//           {state.dropdown4 && (
//             <motion.ul
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               transition={{ duration: 0.5 }}
//               className="absolute top-full left-0 mt-1 w-full bg-white border rounded shadow-md overflow-hidden"
//             >
//               {option.map((option, index) => (
//                 <li
//                   key={index}
//                   onClick={() => dispatch({ type: "TOGGLE_DROPDOWN4" })}
//                   className="p-2 cursor-pointer hover:bg-gray-100"
//                 >
//                   {option}
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default OrderHistory;
