import React, { useEffect, useState } from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Axios from "../../utils/AxiosApi";
import Loader from "../../components/Loader";

const SupPayUnsucc = () => {
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
  //                 `/supervisorpaymentdetails?id=${transactionDetails.transaction._id}`
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

  return (
    <>
      <Box>
        <Box pl={3}>
          <Typography
            variant="h6"

          >
            Unuccessfull payments
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

export default SupPayUnsucc;
