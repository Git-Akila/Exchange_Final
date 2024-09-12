import React, { useImperativeHandle, forwardRef, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from 'styled-components';
import { FaRegEdit } from "react-icons/fa";
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
    onRowClick:handleRowClick,
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    responsive: "vertical",
    rowsPerPageOptions: [5, 10, 20, 25],
  };

  const getMuiTheme = () => createTheme({
    typography: { fontWeightBold: "bold" },
    palette: { background: { paper: "#081A51", default: "#081A51" }, mode: "dark" },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: { padding: "10px 4px" },
          body: { padding: "7px 15px", color: "#e2e8f0" },  
        },
      },
    },
  });

  return (
    <div className="bg-whitesmoke py-16 min-h-screen grid place-items-center">
      <HideScrollbarDiv className="w-[95%] max-w-6xl">
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"User List"}
            data={tableData}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </HideScrollbarDiv>
    </div>
  );
});

export default DataTable;