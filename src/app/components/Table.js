// import React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box, Container } from "@mui/material";
// import Colors from "../utils/colors";
// import { NavLink } from "react-router-dom";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     textAlign: "center",
//     fontSize: "18px",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     textAlign: "center",
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },

//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// export default function Tables({ data, headers }) {
//   return (
//     <>
//       <Container>
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               backgroundColor: Colors.palette.secondary.cardBackground,
//               padding: "20px",
//             }}
//           >
//             <TableContainer component={Paper}>
//               <Table aria-label="customized table">
//                 <TableHead>
//                   <TableRow>
//                     {headers.map((header, index) => (
//                       <StyledTableCell
//                         key={index}
//                         style={{
//                           backgroundColor: Colors.palette.secondary.main,
//                           color: Colors.palette.primary.main,
//                         }}
//                       >
//                         {header}
//                       </StyledTableCell>
//                     ))}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {data.map((row, index) => (
//                     <StyledTableRow key={index}>
//                       <StyledTableCell component="th" scope="row">
//                         {row.d1}
//                       </StyledTableCell>
//                       <StyledTableCell>{row.d2}</StyledTableCell>
//                       <StyledTableCell>{row.d3}</StyledTableCell>
//                       <StyledTableCell>{row.d4}</StyledTableCell>
//                       <StyledTableCell>
//                         <NavLink
//                           to="/"
//                           style={{
//                             textDecoration: "none",
//                             color: Colors.palette.primary.lightBlue,
//                           }}
//                         >
//                           {row.viewdetails}
//                         </NavLink>
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         {row.icons}
//                         {row.icons}
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Box>
//         </Container>
//       </Container>
//     </>
//   );
// }

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Grid, TablePagination } from "@mui/material";
import { NavLink } from "react-router-dom";
import AppTheme from "../themes/AppTheme";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: "18px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomTable({ data, headers }) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // You can adjust the number of rows per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };




  return (


    <Grid container>
      <Grid item xs={12} md={12} sx={{ padding: '20px' }} >
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    style={{
                      backgroundColor: AppTheme.palette.primary.dark,
                      color: AppTheme.palette.common.white,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} // You can customize the options
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>

  );
}
