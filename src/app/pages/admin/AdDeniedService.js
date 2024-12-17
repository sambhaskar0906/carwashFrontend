import React from "react";
import AdminDash from "../../components/AdDash";
import Table from "../../components/Table";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const AdDeniedService = () => {
  const tableHeaders = ["User Name", "Location", "Mobile No.", "View Details"];
  const tableData = [
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            //color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            //color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            //color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
    {
      d1: "User Name",
      d2: "Address",
      d3: "8754215421",
      viewdetails: (
        <NavLink
          to="/adminuserdetails"
          style={{
            textDecoration: "none",
            //color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <Box

      >
        <Box pl={3}>
          <Typography
            variant="h6"
          // display="flex"
          // justifyContent="center"
          // alignItems="center"
          >
            Denied Services
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

export default AdDeniedService;
