import React, { useImperativeHandle, forwardRef, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";

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

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const DataTable = forwardRef(({ initialData }, ref) => {
  const [tableData, setTableData] = useState(initialData || []);
  const navigate = useNavigate();

  const handleRowClick = (rowData) => {
    const userId = rowData[0];
    navigate(`/userdetails/${userId}`);
  };
  const subAdminClick = (userId) => {
    navigate(`/subadmin/${userId}`);
  };

  useImperativeHandle(ref, () => ({
    updateData(newData) {
      setTableData(newData);
    },
  }));

  const columns = [
    { name: "_id", options: { display: false } },
    {
      name: "S.No",
      options: {
        customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1,
        setCellProps: () => ({ style: { textAlign: "start" } }),
      },
    },
    {
      name: "email",
      label: "Email",
      options: { customBodyRender: (value) => value || "Not provided" },
      setCellProps: () => ({ style: { textAlign: "start" } }),
    },
    {
      name: "username",
      label: "Username",
      options: { customBodyRender: (value) => value || "Not provided" },
      setCellProps: () => ({ style: { textAlign: "start" } }),
    },
    {
      name: "unique_id",
      label: "UID",
      options: { customBodyRender: (value) => value || "Not provided" },
      setCellProps: () => ({ style: { textAlign: "start" } }),
    },
    {
      name: "country",
      label: "Country",
      options: { customBodyRender: (value) => value || "Not provided" },
      setCellProps: () => ({ style: { textAlign: "start" } }),
    },
    {
      name: "createdAt",
      label: "Register On",
      options: { customBodyRender: (value) => value || "Not provided" },
      setCellProps: () => ({ style: { textAlign: "start" } }),
    },
    {
      name: "isActive",
      label: "Status",
      options: {
        customBodyRender: (value) =>
          (value ? "Active" : "Inactive") || "Not provided",
      },
      setCellProps: () => ({ style: { textAlign: "start" } }),
    },
    {
      name: "Manage",
      label: "Manage",
      options: {
        customBodyRender: (value, tableMeta) => {
          // const userId = tableMeta.rowData[0]; // Assuming userId is in the first column
          return (
            <StyledButton
              // onClick={(e) => {
              //   e.stopPropagation(); // Prevent triggering row click
              //   subAdminClick(userId); // Navigate to subadmin page
              // }}
            >
              <FaRegEdit color="black" fontWeight="500px" />
            </StyledButton>
          );
        },
        setCellProps: () => ({ style: { textAlign: "start" } }),
      },
    },
  ];

  // const CustomToolbar = () => {
  //   return (
  //     <div className="">
  //       {/* Add your button here */}
  //       <Link to="/subadminadding"><button
  //         className="p-2 m-1 rounded bg-gray-200 font-bold  hover:bg-blue-400"
  //         onClick={() => {
  //           alert("You Want to Add!");
  //         }}
  //       >
  //         Add Admin
  //       </button></Link>
  //     </div>
  //   );
  // };


  const options = {
    onRowClick: handleRowClick,
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    responsive: "vertical",
    rowsPerPageOptions: [5, 10, 20, 25],
    search: true,
    pagination: true,
    download: false, // Optional: Disable download if not needed
    print: false, // Optional: Disable print if not needed
    customStyles: {
      backgroundColor: "black",
    },
    // customToolbar: () => <CustomToolbar />,
  };

  const getMuiTheme = () =>
    createTheme({
      typography: { fontWeightBold: "bold" },
      palette: {
        background: {
          paper: "#FDFDFD",
          default: "#FDFDFD",
        },
        mode: "light", // Change to 'light' for better contrast
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "12px 10px",
              color: "black",
              fontSize: "16px !important",
              fontWeight: "700 !important",
              //  backgroundColor: "#007bff", // Header background color
              //  backgroundColor:"#f5f5f5",
              backgroundColor: "#F8FAFC",
              //  backgroundColor:"#BFDBFE",
              // backgroundColor:"#BFDBFE",
              textAlign: "center",
            },
            body: {
              padding: "15px",
              color: "#333",
              fontSize: "14px",
              textAlign: "start",
              // backgroundColor:"#F8FAFC",
              backgroundColor: "white",
              "&:hover": {
                // backgroundColor: "#f7f7f7", // Hover effect for rows
                backgroundColor: "#F8FAFC",
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              color: "black",
            },
          },
        },
        MuiSelect: {
          styleOverrides: {
            select: {
              color: "#007bff", // Dropdown text color
            },
          },
        },
        MuiTablePagination: {
          styleOverrides: {
            toolbar: {
              // backgroundColor: "#f7f7f7",
              color: "#333",
            },
            select: {
              "& .MuiSelect-icon": {
                color: "#007bff", // Color of the dropdown arrow/icon
              },
            },
            actions: {
              color: "#007bff",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              color: "#333",
            },
          },
        },
      },
    });

  return (
    <div className="bg-whitesmoke w-full  py-16 grid place-items-center">
      <HideScrollbarDiv className="w-[95%] max-w-6xl ">
        <ThemeProvider theme={getMuiTheme()}>
          <Paper
            elevation={3}
            style={{
              padding: "1rem",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <MUIDataTable
              title={
                <>
                  <span
                    style={{
                      color: "black",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    User List
                  </span>
                 
                </>
              }
              data={tableData}
              columns={columns}
              options={options}
            />
          </Paper>
        </ThemeProvider>
      </HideScrollbarDiv>
    </div>
  );
});

export default DataTable;
