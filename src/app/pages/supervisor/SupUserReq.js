import React, { useEffect, useState } from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, NavLink } from "react-router-dom";
import Axios from "../../utils/AxiosApi";
import Loader from "../../components/Loader";

const SupUserReq = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [tableData, setTableData] = useState([]);

  const tableHeaders = ["Date", "Booking ID", "Service Type", "Amount", ""];

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

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await Axios.get("/finduser-request");
  //     setTableData(
  //       response.data.map((item) => ({
  //         d1: item.date,
  //         d2: item.bookingId,
  //         d3: item.serviceType,
  //         d4: item.Amount,
  //         d5: (
  //           <div>
  //             <Button
  //               style={{
  //                 background: "none",
  //                 border: "none",
  //                 cursor: "pointer",
  //                 textDecoration: "none",
  //                 // color: Colors.palette.secondary.blue,
  //               }}
  //               onClick={() => navigate(`/`)}
  //             >
  //               <CheckIcon
  //                 sx={{
  //                   // color: Colors.palette.secondary.main,
  //                 }}
  //               />
  //             </Button>

  //             <Button
  //               style={{
  //                 background: "none",
  //                 border: "none",
  //                 cursor: "pointer",
  //                 textDecoration: "none",
  //                 // color: Colors.palette.secondary.blue,
  //               }}
  //               onClick={() => navigate(`/`)}
  //             >
  //               <CloseIcon sx={{
  //                 //  color: Colors.palette.secondary.main
  //                   }} />
  //             </Button>
  //           </div>
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
  //   fetchData();
  // }, []);


  return (
    <>
      <Box>
        <Box pl={3}>
          <Typography
            variant="h6"

          >
            All User Request
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

export default SupUserReq;
