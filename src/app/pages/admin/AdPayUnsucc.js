import React, { useEffect, useState } from "react";
import AdminDash from "../../components/AdDash";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

import { Box, Typography, Button, Grid, TableContainer, Paper, TableHead, TableRow, TableCell } from "@mui/material";
import Axios from "../../utils/AxiosApi";
import Loader from "../../components/Loader";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const AdPayUnsucc = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [tableData, setTableData] = useState([]);
  const tableHeaders = [
    "Date",
    "Booking ID",
    "Service Type",
    "Amount",
    "View Details",

  ];

  const tableData = [
    {
      d1: "27/12/2023",
      d2: "Booking ID 1",
      d3: "Service Type 1",
      d4: "Amount 1",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          View

        </NavLink>,

      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 1",
      d3: "Service Type 1",
      d4: "Amount 1",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          View

        </NavLink>,

      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 1",
      d3: "Service Type 1",
      d4: "Amount 1",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          View

        </NavLink>,

      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 1",
      d3: "Service Type 1",
      d4: "Amount 1",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          View

        </NavLink>,

      ],
    },
  ];


  tableHeaders.map((e) => {
    console.log(e)
  })

  // const fetchPaymentUnsucc = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await Axios.get("/get-all-unsuccessfull-payments");
  //     setTableData(
  //       response.data.transactionDetails.map((transactionDetails) => ({
  //         d1: transactionDetails.transaction.createdAt,
  //         d2: transactionDetails.transaction._id,
  //         d3: transactionDetails.serviceRequestDetails.serviceType,
  //         d4: transactionDetails.serviceRequestDetails.Amount,
  //         d5: (
  //           <Button
  //             style={{
  //               background: "none",
  //               border: "none",
  //               cursor: "pointer",
  //               textDecoration: "none",
  //               // color: Colors.palette.secondary.main,
  //               fontSize: "12px",
  //             }}
  //             onClick={() =>
  //               navigate(
  //                 `/adminpaymentdetails?id=${transactionDetails.transaction._id}`
  //               )
  //             }
  //           >
  //             View Details
  //           </Button>
  //         ),
  //       }))
  //     );
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   } finally {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   }
  // };
  // useEffect(() => {
  //   fetchPaymentUnsucc();
  // }, []);


  const tableStyle = {
    border: '1px solid black',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'left'
  }



  return (
    <>
      <Box>
        <Box pl={3}>
          <Typography
            variant="h6"
          // display="flex"
          // justifyContent="center"
          // alignItems="center"
          >
            Unsuccessfull payments
          </Typography>

        </Box>


        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"

        >
          <Table data={tableData} headers={tableHeaders} />
        </Box>
      </Box>
    </>

  );
};

export default AdPayUnsucc;




{/* {loading ? (
            <h1>
              <Loader />
            </h1>
          ) : (
            <Table data={tableData} headers={tableHeaders} />
          )} */}