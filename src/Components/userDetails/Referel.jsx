// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   Paper,
// } from "@mui/material";

// function Referel() {
//   return (
//     <div className="w-full h-full container  mx-auto bg-white  ">
//       <div className="bg-slate-50 rounded text-center items-center p-5 justify-center">
//         <div className="flex justify-start mb-3">
//           <h2 className="text-[18px] text-blue-800 font-bold">Referral</h2>
//         </div>
//         <Paper sx={{ width: "100%", overflow: "hidden", padding: "20px" }}>
//           <TableContainer>
//             <Table sx={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.5)," }}>
//               <TableHead>
//                 <TableRow>
//                   <TableCell
//                     align="center"
//                     sx={{ fontSize: "17px", fontWeight: "bold" }}
//                   >
//                     Date&Time
//                   </TableCell>
//                   <TableCell
//                     align="center"
//                     sx={{ fontSize: "17px", fontWeight: "bold" }}
//                   >
//                     Login Method
//                   </TableCell>
//                   <TableCell
//                     align="center"
//                     sx={{ fontSize: "17px", fontWeight: "bold" }}
//                   >
//                     IP Address
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {logData && logData?.length > 0 ? (
//                   logData
//                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                     .map((row) => (
//                       <TableRow key={row.id}>
//                         <TableCell align="center">{row.date}</TableCell>
//                         <TableCell align="center">{row.method}</TableCell>
//                         <TableCell align="center">{row.ipaddress}</TableCell>
//                         <TableCell align="center">{row.location}</TableCell>
//                         {row.status ? (
//                           <TableCell align="center">
//                             <div
//                               style={{
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                               }}
//                             >
//                               {row.status === true ? (
//                                 <MdVisibility color="darkgreen" size={25} />
//                               ) : (
//                                 <MdVisibilityOff color="red" size={25} />
//                               )}
//                             </div>
//                           </TableCell>
//                         ) : (
//                           <TableCell>Not Provided</TableCell>
//                         )}
//                       </TableRow>
//                     ))
//                 ) : (
//                   <TableRow>
//                     <TableCell align="center" colSpan={5}>
//                       No Tickets Found !!!
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* Pagination */}
//           <TablePagination
//             component="div"
//             count={logData.length}
//             page={page}
//             onPageChange={handleChangePage}
//             rowsPerPage={rowsPerPage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//       </div>
//     </div>
//   );
// }

// export default Referel;
