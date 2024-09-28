import React, { useState } from "react";
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
} from "@mui/material";
import { format, parseISO } from "date-fns";
import SearchIcon from "@mui/icons-material/Search";

const Airdrop = ({ userData }) => {
  const data1 = userData || {};
  const data = data1?.airdropHistory || [];
  console.log("Ari" + JSON.stringify(data1));
  const [searchText, setSearchText] = useState("");
  const [filterDate, setFilterDate] = useState(""); // New state for date filter
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filtering logic
  const filteredData = data.filter((row) => {
    const formattedDate = format(parseISO(row.dateTime), "yyyy-MM-dd"); // Format the row's dateTime to compare with the filter
    return (
      row.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (filterDate === "" || formattedDate === filterDate) // Filter by date if selected
    );
  });

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
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
    <div className="mx-auto bg-white container w-full h-full">
      <div className=" bg-slate-50 rounded text-center  items-center p-10 justify-center">
        <div className="grid grid-cols-2 gap-10 mb-3   justify-between">
          {/* Search Bar */}
          <div className="flex justify-between gap-2 items-center text-center  rounded-lg">
            <TextField
              label="Search by Name"
              fullWidth
              value={searchText}
              onChange={handleSearchChange}
              style={{ backgroundColor: "white", borderRadius: "10px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon style={{ fontSize: 30, cursor: "pointer" }} />
                  </InputAdornment>
                ),
              }}
            />
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
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    User ID
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
                    Currency
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
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData ?(filteredData 
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.unique_id}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.currency}</TableCell>
                      <TableCell align="center">{row.amount}</TableCell>
                      <TableCell align="center">{row.dateTime}</TableCell>
                    </TableRow>
                  ))):(<TableRow>
                    <TableCell align="center" colSpan={6}>
                      No Tickets Found !!!
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
};

export default Airdrop;
