import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
 
  Paper,
  
} from "@mui/material";
import { IoMdCloudDownload } from "react-icons/io";
import * as XLSX from 'xlsx';
//npm install xlsx

const ExportHistory= ({ userData }) => {
  const data1 = userData ||  {};
  const data = data1?.export || [];
  console.log("Ariiaaa" + JSON.stringify(userData));
  

  const handleExport = () => {
    if(data.length === 0){
        console.log("No Data Available to Export");
        return;

    }

    const worksheet = XLSX.utils.json_to_sheet(data); // Converts JSON data to Excel sheet format
    const workbook = XLSX.utils.book_new(); // Creates a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data"); // Appends the sheet to the workbook
    XLSX.writeFile(workbook, "ExportedData.xlsx"); // Exports the file with the given name
  };
  return (
    <div className="mx-auto bg-white container w-full h-full">
      <div className=" bg-slate-50 rounded text-center  items-center p-5 justify-center">
       {/* Export Button */}
       <div className="justify-end flex">
       <button 
        onClick={handleExport} 
        className="flex gap-2 text-[18px] bg-white rounded-lg p-2 border-2 mb-3 justify-end items-end"
      >
        Export
        <IoMdCloudDownload />
      </button></div>
        <Paper sx={{ width: "100%", overflow: "hidden", padding: "20px" }}>
          {/* Table */}
          <TableContainer>
            <Table
              sx={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // Custom shadow color and blur
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                   Email
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    DOB
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Age
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Gender
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Phone
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Address
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    City
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.Name || ''}</TableCell>
                      <TableCell align="center">{row.email || ''}</TableCell>
                      <TableCell align="center">{row.dateofbirth || ''}</TableCell>
                      <TableCell align="center">{row.Age || ''}</TableCell>
                      <TableCell align="center">{row.Gender || ''}</TableCell>
                      <TableCell align="center">{row.Phonenumber || ''}</TableCell>
                      <TableCell align="center">{row.Address || ''}</TableCell>
                      <TableCell align="center">{row.City || ''}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

         
        </Paper>
      </div>
    </div>
  );
};

export default ExportHistory;
