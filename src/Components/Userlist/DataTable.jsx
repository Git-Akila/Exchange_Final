import React, { useImperativeHandle, forwardRef, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from 'styled-components';
import { FaRegEdit } from "react-icons/fa";
import Paper from '@mui/material/Paper';
//npm install mui-datatables @mui/material react-icons
//npm install @emotion/react @emotion/styled
//npm install @mui/icons-material
import {useNavigate} from 'react-router-dom';
const HideScrollbarDiv = styled.div`
  overflow-x: hidden;
  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`;

const DataTable = forwardRef(({ initialData }, ref) => {
  const [tableData, setTableData] = useState(initialData || []);
  const navigate=useNavigate();

  const handleRowClick=(rowData)=>{
    const userId = rowData[0]; 
    navigate(`/userdetails/${userId}`);
  }

  useImperativeHandle(ref, () => ({
    updateData(newData) {
      setTableData(newData);
    }
  }));

  const columns = [
    { name: "_id", options: { display: false } },
    { name: "S.No", options: { customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1 } },
    { name: "email", label: "Email", options: { customBodyRender: (value) => value } },
    { name: "username", label: "Username", options: { customBodyRender: (value) => value } },
    { name: "unique_id", label: "UID", options: { customBodyRender: (value) => value } },
    { name: "country", label: "Country", options: { customBodyRender: (value) => value } },
    { name: "createdAt", label: "Register On", options: { customBodyRender: (value) => value } },
    { name: "emailVerified", label: "Status", options: { customBodyRender: (value) => value } },
    { name: "Manage", label: "Manage", options: { customBodyRender: (value, tableMeta) => (
        <button><FaRegEdit /> {tableMeta.rowData[3]}</button>
      ) 
    }},
  ];

  const options = {
    onRowClick: handleRowClick, // Handler for row click
    selectableRows: false, // Disable row selection
    elevation: 0, // No shadow
    rowsPerPage: 5, // Default rows per page
    responsive: "vertical", // Responsive layout
    rowsPerPageOptions: [5, 10, 20, 25], // Options for rows per page
    search: true, // Enable search
    pagination: true, // Enable pagination
    customStyles: {
      // Custom styles for the table
      backgroundColor: "black", // Set table background color
    },
    // Optional: You can also override specific components here
    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            backgroundColor: "black", // Table background color
          },
        },
      },
    },
  };
  

  const getMuiTheme = () => createTheme({
    typography: { fontWeightBold: "bold" },
    palette: {
      background: {
        paper: '#FDFDFD',
        default: "#FDFDFD"
      },
      mode: "dark",
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "10px 4px",
            color: "black",
          },
          body: {
            padding: "7px 15px",
            color: "black",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: 'black',
          },
        },
      },
      
      MuiSelect: {
        styleOverrides: {
          select: {
            color: "black", // Rows per page select text color
          },
        },
      },
      MuiTablePagination: {
        styleOverrides: {
          toolbar: {
            color: "black",
          },
          select: {
            color: "black", // Rows per page dropdown text color
          },
          actions: {
            color: "black",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            //  backgroundColor: "black", // Set background color for the toolbar
            color: "black", // Set text color for the toolbar
          },
        },
      },
    },
  });
  

  return (
    <div className="bg-whitesmoke py-16 min-h-screen grid place-items-center">
      <HideScrollbarDiv className="w-[95%] max-w-6xl">
        <ThemeProvider theme={getMuiTheme()}>
        <Paper elevation={3} style={{ padding: "1rem", boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}>
      
          <MUIDataTable
           title={<span style={{ color: "black", fontSize:"22px", fontWeight:"bold" }}>User List</span>}
            data={tableData}
            columns={columns}
            options={options}
          /></Paper>
        </ThemeProvider>
      </HideScrollbarDiv>
    </div>
  );
});

export default DataTable;