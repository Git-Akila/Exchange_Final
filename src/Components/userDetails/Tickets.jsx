import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,Box
} from "@mui/material";
//npm i @mui/material @emotion/react @emotion/styled

function Tickets({ userData }) {
  const data = userData || { tickets: [] };
  console.log("Tickets" + JSON.stringify(data.tickets));
  return (
    <div className="mx-auto container w-full h-full">
      <div className="bg-slate-50 rounded-lgtext-center  items-center p-5 justify-center">
        <h2 className="font-bold text-[18px] text-blue-800 mb-4">
          Support Tickets
        </h2>
        <Paper sx={{ width: "100%", overflow: "hidden", padding: "20px" }}>
          <TableContainer>
            <Table sx={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.5)" }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Ticket
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Issue Type
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Query
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Subject
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Submitted
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Status
                  </TableCell>
                  {/* <TableCell
                    align="center"
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Action
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.tickets && data?.tickets.length > 0 ? (
                  data.tickets.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center">
                        {row.ticket_id || ""}
                      </TableCell>
                      <TableCell align="center">
                        {row.issue_type || ""}
                      </TableCell>
                      <TableCell align="center">{row.query || ""}</TableCell>
                      <TableCell align="center">{row.subject || ""}</TableCell>
                      <TableCell align="center">{row.date || ""}</TableCell>

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

                      {/* <TableCell align="center"><button className="p-2 rounded bg-white">view</button></TableCell> */}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell align="center" colSpan={7}>
                      No Tickets Found !!!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}

export default Tickets;
