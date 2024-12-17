import React from "react";
import SupDash from "../../components/SupDash";
import Table from "../../components/Table";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const SupAllService = () => {
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
            // color: Colors.palette.secondary.main,
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
            // color: Colors.palette.secondary.main,
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
            // color: Colors.palette.secondary.main,
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
            // color: Colors.palette.secondary.main,
          }}
        >
          View Details
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <Box>
        <Box pl={3}>
          <Typography
            variant="h6"

          >
            All Services
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

export default SupAllService;
