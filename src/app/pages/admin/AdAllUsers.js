import React, { useEffect, useState } from "react";
import AdminDash from "../../components/AdDash.js";
import { useNavigate, NavLink } from "react-router-dom";
import Table from "../../components/Table.js";

import { Box, Typography, Button, Grid, TableContainer, Paper, TableHead, TableRow, TableCell } from "@mui/material";
import Axios from "../../utils/AxiosApi.js";
import Loader from "../../components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import { currentuser, getUserProfile, userLogout, getAlluserActive, InactiveStatus } from "../../store/slices/AuthSlice.js";
import { unwrapResult } from "@reduxjs/toolkit";
import AppTheme from "../../themes/AppTheme.js";




const AdAllUsers = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const { Loading, UserInfo, Status, userData, activeUsers, inactiveAlerts } = useSelector((state) => state.AUTH)




  let Alldatt = []

  console.log("activeusers", activeUsers?.data)

  let active_user = activeUsers?.data;


  const app = active_user?.map((e) => {
    let obj = {
      username: e?.name?.firstName,
      email: e?.email,
      contact: e?.mobileNumber,
      action: [


        <Button
          variant="contained"
          sx={{
            background: e.status === 1
              ? AppTheme.palette.success.main
              : AppTheme.palette.error.main,

            "&:hover": {
              background: e.status === 1
                ? AppTheme.palette.success.main
                : AppTheme.palette.error.main,
            }
          }}
        >
          <NavLink
            onClick={() => handleInactiveClick(e._id)}
            style={{
              textDecoration: "none",
              color: AppTheme.palette.common.white
            }}
          >
            {e.status === 1 ? "Active" : "Inactive"}
          </NavLink>
        </Button>



      ],
    }

    Alldatt.push(obj)

  })

  const handleInactiveClick = (id) => {
    dispatch(InactiveStatus(id)).then(unwrapResult)
      .then((res) => {
        if (res?.status) {
          dispatch(getAlluserActive())
        }

      })
      .catch((error) => {
        console.error("Error occurred while making user inactive:", error);

      });



  };

  useEffect(() => {
    dispatch(getAlluserActive())
  }, [])





  const tableHeaders = ["User Name", "Email", "Mobile No.", "Action"];





  return (
    <>
      <Box>



        <Box pl={3}>

          <Typography
            variant="h6"

          >
            All Users
          </Typography>

        </Box>


        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"

        >
          {Alldatt ? <Table data={Alldatt} headers={tableHeaders} /> : <Loader />}
        </Box>
      </Box>
    </>
  );
};

export default AdAllUsers;
