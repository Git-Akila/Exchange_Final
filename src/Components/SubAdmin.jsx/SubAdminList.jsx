import React, { useEffect,useState } from "react";
import axios from 'axios'
import { Table, TableBody,TablePagination, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { IoMdCloudDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import {formData} from '../SubAdmin.jsx/SubAdminAdding' 

function SubAdminList() {
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(5);
  // Sample data
  const rows = [{ id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Alice Johnson', age: 28, city: 'Chicago' },
    { id: 4, name: 'Bob Brown', age: 32, city: 'Houston' },];
  // const rows=formData;

const handleChangePage=(e,newPage)=>{
    setPage(newPage);
}

const handleChangeRowsPerPage=(e)=>{
    setRowsPerPage(parseInt(e.target.value,10));
    setPage(0);
};

const displayedRows=rows.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage);

  const token = localStorage.getItem("token");

  const subAdminList = async () => {
    try {
      const response = await axios.get(
        "https://demoback.kairaaexchange.com/api/v1/subadmin/list",
        {
          headers: {
            Authorization: `${token}`,
            "Content-type": "application/json",
            Tag:"admin",
          },
        }
      );
      console.log("ddd"+JSON.stringify(response.data))
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    subAdminList();
  }, [rows]);
  return (
    <div className="mx-auto container ">
        <div className="mx-20 my-20 p-5 bg-slate-100">
            <div className="flex justify-between my-2">
                <div className="">
                <p className="font-semibold text-lg ">SubAdmin Management</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Link to="/subadminadding"><button className="justify-center rounded flex items-center p-2 bg-slate-50 gap-2"><span className=""> +</span><span>ADD</span></button></Link>
                    <button className="bg-slate-50 rounded p-2 justify-center flex items-center gap-2">Export<IoMdCloudDownload /></button>
                </div>

            </div>
            <Paper>
   <TableContainer component={Paper}> 
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#EFF6FF', color: 'black' }}>ID</TableCell>
            <TableCell sx={{ backgroundColor: '#EFF6FF', color: 'black' }}>Name</TableCell>
            <TableCell sx={{ backgroundColor: '#EFF6FF', color: 'black' }}>Age</TableCell>
            <TableCell sx={{ backgroundColor: '#EFF6FF', color: 'black' }}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{
              '&:nth-of-type(even)': {
                backgroundColor: 'action.hover',
              },
              '&:hover': {
                backgroundColor: 'grey.200',
              },
            }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /></Paper></div></div>
  );
};

  
  
 
export default SubAdminList;
