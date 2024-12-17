import React from "react";
import AdminDash from "../../components/AdDash";
import Table from "../../components/Table";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const AdReqService = () => {
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
          <CheckIcon
            sx={{
              marginRight: "30%",
              //  color: Colors.palette.secondary.main
            }}
          />{" "}
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CloseIcon
            sx={
              {
                //  color: Colors.palette.secondary.main
              }
            }
          />{" "}
        </NavLink>,
      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 2",
      d3: "Service Type 2",
      d4: "Amount 2",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CheckIcon
            sx={{
              marginRight: "30%",
              // color: Colors.palette.secondary.main
            }}
          />{" "}
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CloseIcon sx={{
            // color: Colors.palette.secondary.main
          }} />{" "}
        </NavLink>,
      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 3",
      d3: "Service Type 3",
      d4: "Amount 3",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CheckIcon
            sx={{
              marginRight: "30%",
              // color: Colors.palette.secondary.main
            }}
          />{" "}
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CloseIcon sx={{
            // color: Colors.palette.secondary.main
          }} />{" "}
        </NavLink>,
      ],
    },
    {
      d1: "27/12/2023",
      d2: "Booking ID 4",
      d3: "Service Type 4",
      d4: "Amount 4",
      d6: [
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CheckIcon
            sx={{
              marginRight: "30%",
              //  color: Colors.palette.secondary.main 
            }}
          />{" "}
        </NavLink>,
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            // color: Colors.palette.secondary.main,
          }}
        >
          <CloseIcon sx={{
            // color: Colors.palette.secondary.main 
          }} />{" "}
        </NavLink>,
      ],
    },
  ];
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
            Requested Services
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

export default AdReqService;
