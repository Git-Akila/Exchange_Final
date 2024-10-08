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
  MenuItem,Box
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material"; // Correct imports

import { format, parseISO } from "date-fns";
import SearchIcon from "@mui/icons-material/Search";

import { BsCalendarDate } from "react-icons/bs";
import * as XLSX from 'xlsx';
function OpenOrder({ TradehistoryData }) {
  const data1=TradehistoryData || {};
  const data = data1?.data || [];

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const filteredData = data.filter((row) => {
    const formattedDate = format(parseISO(row.date), "yyyy-MM-dd");
    // FIRSTCURRENCY
    const typeMatches1 =
      selectedOption1 === "option1"
        ? ""
        : selectedOption1 === "option2"
        ? "btc"
        : selectedOption1 === "option3"
        ? "eth"
        : selectedOption1 === "option4"
        ? "trx"
        : selectedOption1 === "option5"
        ? "doge"
        : selectedOption1 === "option6"
        ? "xlm"
        : selectedOption1 === "option7"
        ? "bnb"
        : selectedOption1 === "option8"
        ? "sol"
        : selectedOption1 === "option9"
        ? "avax"
        : selectedOption1 === "option10"
        ? "matic"
        : selectedOption1 === "option11"
        ? "xrp"
        : selectedOption1 === "option12"
        ? "usdt"
        : selectedOption1 === "option13"
        ? "link"
        : selectedOption1 === "option14"
        ? "ship"
        : selectedOption1 === "option15"
        ? "inr"
        : selectedOption1 === "option16"
        ? "uni"
        : selectedOption1 === "option17"
        ? "dai"
        : selectedOption1 === "option18"
        ? "ada"
        : selectedOption1 === "option19"
        ? "mana"
        : selectedOption1 === "option20"
        ? "bdx"
        : selectedOption1 === "option21"
        ? "busd"
        : selectedOption1 === "option22"
        ? "dot"
        : selectedOption1 === "option23"
        ? "near"
        : selectedOption1 === "option24"
        ? "sand"
        : selectedOption1 === "option25"
        ? "ape"
        : selectedOption1 === "option26"
        ? "ton"
        : selectedOption1 === "option27"
        ? "alice"
        : selectedOption1 === "option28"
        ? "ltc"
        : selectedOption1 === "option29"
        ? "aave"
        : selectedOption1 === "option30"
        ? "fil"
        : selectedOption1 === "option31"
        ? "kaitcoin"
        : selectedOption1 === "option32"
        ? "pepe"
        : selectedOption1 === "option33"
        ? "idex"
        : selectedOption1 === "option34"
        ? "cake"
        : selectedOption1 === "option35"
        ? "1inch"
        : selectedOption1 === "option36"
        ? "floki"
        : selectedOption1 === "option37"
        ? "axs"
        : selectedOption1 === "option38"
        ? "sushi"
        : selectedOption1 === "option39"
        ? "eos"
        : "";

    const typeMatches =
      selectedOption === "option1"
        ? ""
        : selectedOption === "option2"
        ? "buy"
        : selectedOption === "option3"
        ? "sell"
        : "";

    const typeMatches2 =
      selectedOption2 === "option1"
        ? ""
        : selectedOption2 === "option2"
        ? "inr"
        : selectedOption2 === "option3"
        ? "usdt"
        : selectedOption2 === "option4"
        ? "eth"
        : "";

    const typeMatches4 =
      selectedOption4 === "option1"
        ? ""
        : selectedOption4 === "option2"
        ? "limit"
        : selectedOption2 === "option3"
        ? "market"
        : selectedOption2 === "option4"
        ? "stop"
        : "";

    return (
      (typeMatches === "" || row.type === typeMatches) &&
      (typeMatches1 === "" || row.firstcurrency === typeMatches1) &&
      (typeMatches2 === "" || row.secondcurrency === typeMatches2) &&
      (typeMatches4 === "" || row.side === typeMatches4) &&
      (filterDate === "" || formattedDate === filterDate)
    );
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const handleSelectChange4 = (event) => {
    setSelectedOption4(event.target.value);
  };
  const handleDateFilterChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="mx-auto container w-full h-full bg-white">
      <div className=" bg-slate-50 rounded text-center  items-center p-10 justify-center">
      <div className="justify-between flex">
          <h2 className=" font-bold text-blue-800 text-[18px] mb-2 mt-2">
            Open History
          </h2>
          {/* <button className="p-2 bg-blue-200 flex text-center items-center gap-2 rounded-md"
          onClick={handleExport}>
            Download
          <MdOutlineCloudDownload />
          </button> */}
          <button
            onClick={handleExport}
            className="flex gap-2 text-[18px] font-semibold bg-white rounded-lg p-2 border-2 border-gray-300 shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300 mb-3 justify-center items-center"
          >
            Export
            <MdOutlineCloudDownload className="text-[22px]" />
          </button>
        </div>
        <div className="grid grid-cols-5 gap-10 mb-3   justify-between">
          {/* DropDown1 */}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">FirstCurrency</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedOption1}
                onChange={handleSelectChange1}
                label="Select Option"
                style={{ borderRadius: "10px" }}
                //   endAdornment={
                //     <InputAdornment position="end">
                //       <SearchIcon style={{ fontSize: 30, cursor: "pointer" }} />
                //     </InputAdornment>
                //   }
              >
                <MenuItem value="option1">All</MenuItem>
                <MenuItem value="option2">BTC</MenuItem>

                <MenuItem value="option3">ETH</MenuItem>
                <MenuItem value="option4">TRX</MenuItem>
                <MenuItem value="option5">DOGE</MenuItem>
                <MenuItem value="option6">XLM</MenuItem>
                <MenuItem value="option7">BNB</MenuItem>
                <MenuItem value="option8">SOL</MenuItem>
                <MenuItem value="option9">AVAX</MenuItem>
                <MenuItem value="option10">MATIC</MenuItem>
                <MenuItem value="option11">XRP</MenuItem>
                <MenuItem value="option12">USDT</MenuItem>
                <MenuItem value="option13">LINK</MenuItem>
                <MenuItem value="option14">SHIP</MenuItem>
                <MenuItem value="option15">INR</MenuItem>
                <MenuItem value="option16">UNI</MenuItem>
                <MenuItem value="option17">DAI</MenuItem>
                <MenuItem value="option18">ADA</MenuItem>
                <MenuItem value="option19">MANA</MenuItem>
                <MenuItem value="option20">BDX</MenuItem>
                <MenuItem value="option21">BUSD</MenuItem>
                <MenuItem value="option22">DOT</MenuItem>
                <MenuItem value="option23">NEAR</MenuItem>
                <MenuItem value="option24">SAND</MenuItem>
                <MenuItem value="option25">APE</MenuItem>
                <MenuItem value="option26">TON</MenuItem>
                <MenuItem value="option27">ALICE</MenuItem>
                <MenuItem value="option28">LTC</MenuItem>

                <MenuItem value="option29">AAVE</MenuItem>
                <MenuItem value="option30">FIL</MenuItem>
                <MenuItem value="option31">KAITCOIN</MenuItem>
                <MenuItem value="option32">PEPE</MenuItem>
                <MenuItem value="option33">IDEX</MenuItem>
                <MenuItem value="option34">CAKE</MenuItem>
                <MenuItem value="option35">1INCH</MenuItem>
                <MenuItem value="option36">FLOKI</MenuItem>
                <MenuItem value="option37">AXS</MenuItem>
                <MenuItem value="option38">SUSHI</MenuItem>
                <MenuItem value="option39">EOS</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* DropDown2 */}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">Second Currency</InputLabel>
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
                <MenuItem value="option2">INR</MenuItem>

                <MenuItem value="option3">USDT</MenuItem>
                <MenuItem value="option4">ETH</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* DropDown3 */}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">Buy/Sell</InputLabel>
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
                <MenuItem value="option2">Buy</MenuItem>

                <MenuItem value="option3">Sell</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* DropDown4*/}
          <div className="flex justify-between gap-2 items-center text-center rounded-lg">
            <FormControl
              fullWidth
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <InputLabel id="dropdown-label">Order</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedOption4}
                onChange={handleSelectChange4}
                label="Select Option"
                style={{ borderRadius: "10px" }}
                //   endAdornment={
                //     <InputAdornment position="end">
                //       <SearchIcon style={{ fontSize: 30, cursor: "pointer" }} />
                //     </InputAdornment>
                //   }
              >
                <MenuItem value="option1">All</MenuItem>
                <MenuItem value="option2">Limit Order</MenuItem>

                <MenuItem value="option3">Market Order</MenuItem>
                <MenuItem value="option4">Stop Order</MenuItem>
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
                    Pair
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Type/Side
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Price
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
                    Filled
                  </TableCell>
                 
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData ? (
                  filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.date || ""}</TableCell>
                        <TableCell align="center">{row.pair}</TableCell>
                        <TableCell align="center">{row.type}/{row.side}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell align="center">{row.amount}</TableCell>
                        <TableCell align="center">{row.filled}</TableCell>
                        <TableCell align="center" sx={{ textAlign: "center" }}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          {data.status !== undefined ? (
                            data.status === true ? (
                              <MdVisibility color="green" size={25} />
                            ) : (
                              <MdVisibilityOff color="red" size={25} />
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
