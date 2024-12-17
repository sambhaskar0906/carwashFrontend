import React, { useEffect, useState } from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import { useNavigate, NavLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Axios from "../../utils/AxiosApi";
import Loader from "../../components/Loader";

const SupUserDec = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [tableData, setTableData] = useState([]);
  const tableHeaders = ["User Name", "Location", "Mobile No.", "View Details", "Action"];


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
  //     const response = await Axios.get("/get-all-declined-users");
  //     const activeUsers = response.data.declinedUsers;
  //     setTableData(
  //       activeUsers.map((item, index) => ({
  //         d1: item.userName,
  //         d2: `${item.address.state}, ${item.address.city}`,
  //         d3: item.mobileNumber,
  //         d4: (
  //           <Button
  //             style={{
  //               background: "none",
  //               border: "none",
  //               cursor: "pointer",
  //               textDecoration: "none",
  //               // color: Colors.palette.secondary.main,
  //               fontSize: "12px",
  //             }}
  //             onClick={() => handleViewDetails(item)}
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
  // const handleViewDetails = (user) => {
  //   console.log("user", user);
  //   navigate("/supervisoruserdetails", {
  //     state: { userId: user._id, userStatus: "inactive" },
  //   });
  //   console.log("id: ", user._id);
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
            Inactive Users
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

export default SupUserDec;
