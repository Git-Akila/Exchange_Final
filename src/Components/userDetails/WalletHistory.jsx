import React, { useState } from "react";
import {
  MdVisibility,
  MdOutlineCloudDownload,
  MdVisibilityOff,
} from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material"; // Correct imports

import { format, parseISO } from "date-fns";
import SearchIcon from "@mui/icons-material/Search";

import { BsCalendarDate } from "react-icons/bs";
import * as XLSX from "xlsx";
function OpenOrder({ UserTransactionData }) {
  const data1 = UserTransactionData || {};
  const data = data1?.data || [];
  console.log("USerTran" + JSON.stringify(data));
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  // const [selectedOption4, setSelectedOption4] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = (() => {
    // Select the correct array based on the selectedOption1
    let selectedArray;
    if (selectedOption1 === "option2") {
      selectedArray = data.fiat; // Fiat transactions
    } else if (selectedOption1 === "option3") {
      selectedArray = data.crypto; // Crypto transactions
    } else if (selectedOption1 === "option4") {
      selectedArray = data.swap; // Swap transactions
    } else {
      return [];
    }

    return selectedArray.filter((row) => {
      let formattedDate = "";
    
      if (row.date) {
        try {
          formattedDate = format(parseISO(row.date), "dd-MM-yyyy");
        } catch (error) {
          console.error("Invalid Date value: ", row.date);
          formattedDate = ""; // Set to empty string if invalid
        }
      }
    
      
    
      // Crypto and fiat
      const typeMatches1 =
        selectedOption1 === "option1"
          ? ""
          : selectedOption1 === "option2"
          ? "fiat"
          : selectedOption1 === "option3"
          ? "crypto"
          : selectedOption1 === "option4"
          ? "swap"
          : "";

      const typeMatches =
        selectedOption === "option1"
          ? ""
          : selectedOption === "option2"
          ? "1"
          : selectedOption === "option3"
          ? "2"
          : selectedOption === "option4"
          ? "0"
          : "";

      const typeMatches2 =
        selectedOption2 === "option1"
          ? ""
          : selectedOption2 === "option2"
          ? "deposit"
          : selectedOption2 === "option3"
          ? "withdraw"
          : selectedOption2 === "option4"
          ? "eth"
          : "";

      return (
        (typeMatches === "" || row.status.toString() === typeMatches) &&
        (typeMatches2 === "" || row.type === typeMatches2) &&
        (filterDate === "" || formattedDate === filterDate)
      );
    });
  })();

  // Handlers for Select and Date
  const handleSelectChange = (event) => setSelectedOption(event.target.value);
  const handleSelectChange1 = (event) => setSelectedOption1(event.target.value);
  const handleSelectChange2 = (event) => setSelectedOption2(event.target.value);
  const handleDateFilterChange = (event) => setFilterDate(event.target.value);

  // Pagination Handlers
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleExport = () => {
    const filteredData1 = filteredData;

    if (filteredData1.length === 0) {
      console.log("No Data Available to Export");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(filteredData1);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "ExportedData.xlsx");
  };
  return (
    <div className="mx-auto container w-full h-full bg-white">
      <div className=" bg-slate-50 rounded text-center  items-center p-10 justify-center">
        <div className="justify-start flex">
          <h2 className=" font-bold text-blue-800 text-[18px] mb-2 mt-2">
            Wallet History
          </h2>
          {/* <button
            className="p-2 bg-blue-200 flex text-center items-center gap-2 rounded-md"
            onClick={handleExport}
          >
            Download
            <MdOutlineCloudDownload />
          </button> */}
        </div>
        <div className="grid grid-cols-5 gap-24 mb-3   justify-between">
          {/* DropDown1 */}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">Currency Type</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedOption1}
                onChange={handleSelectChange1}
                label="Select Option"
                IconComponent={() => null}
                style={{ borderRadius: "10px" }}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon style={{ fontSize: 20, cursor: "pointer" }} />
                  </InputAdornment>
                }
              >
                {/* <MenuItem value="option1">All</MenuItem> */}
                <MenuItem value="option2">Fiat</MenuItem>

                <MenuItem value="option3">Crypto</MenuItem>
                <MenuItem value="option3">Swap</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* DropDown2 */}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">Transaction</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedOption2}
                onChange={handleSelectChange2}
                label="Select Option"
                style={{ borderRadius: "10px" }}
                //   endAdornment={
                //     <InputAdornment position="end">
                //       <SearchIcon style={{ fontSize: 30, cursor: "pointer" }} />
                //     </InputAdornment>
                //   }
              >
                <MenuItem value="option1">All</MenuItem>
                <MenuItem value="option2">Deposit</MenuItem>

                <MenuItem value="option3">Withdraw</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* DropDown3 */}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">Status</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
                label="Select Option"
                style={{ borderRadius: "10px" }}
                //   endAdornment={
                //     <InputAdornment position="end">
                //       <SearchIcon style={{ fontSize: 30, cursor: "pointer" }} />
                //     </InputAdornment>
                //   }
              >
                <MenuItem value="option1">All</MenuItem>
                <MenuItem value="option2">Pending</MenuItem>

                <MenuItem value="option3">Completed</MenuItem>
                <MenuItem value="option4">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Date Filter */}
          <div>
            <TextField
              label="Filter by Date"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              value={filterDate}
              onChange={handleDateFilterChange}
              InputLabelProps={{ shrink: true }}
              style={{ backgroundColor: "white" }}
            />
          </div>
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
          <button
            className="p-2 bg-white flex text-[18px] border-2 text-center items-center gap-2 rounded-md"
            onClick={handleExport}
          >
            Download
            <MdOutlineCloudDownload />
          </button></div>
        </div>

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
                    Date
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Assets
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Transaction Fees
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Payment Option
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Transaction ID
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Notes
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData ? (
                  filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="center">
                          {row.DateTime || ""}
                        </TableCell>
                        <TableCell align="center">{row.currency}</TableCell>
                        <TableCell align="center">
                          {`${row.type || ""} ${row.side || ""}`}
                        </TableCell>
                        <TableCell align="center">{row.total}</TableCell>
                        <TableCell align="center">{row.fee}</TableCell>
                        <TableCell align="center">{row.method}</TableCell>
                        <TableCell align="center">{row.txnid}</TableCell>
                        <TableCell align="center">{row.command}</TableCell>
                        <TableCell align="center" sx={{ textAlign: "center" }}>
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            {data.status !== undefined ? (
                              data.status === 1 ? (
                                <MdVisibility color="green" size={25} />
                              ) : data.status === 2 ? (
                                <MdVisibility color="red" size={25} />
                              ) : (
                                <MdVisibilityOff color="gray" size={25} />
                              )
                            ) : (
                              <p>Not Provided</p>
                            )}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell align="center" colSpan={6}>
                      No Records Available !!!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default OpenOrder;
