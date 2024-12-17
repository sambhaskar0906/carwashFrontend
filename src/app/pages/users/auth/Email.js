import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  CircularProgress,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../utils/AxiosApi";
import { useDispatch, useSelector, } from "react-redux";
import { getUserProfile, userLogin, verifyEmail } from "../../../store/slices/AuthSlice";
import AppTheme from "../../../themes/AppTheme";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Email() {
  const dispatch = useDispatch()
  const { Loading, UserInfo, Status, emailpasschnage } = useSelector((state) => state.AUTH)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    position: "center",
  };

  const submitButtonStyle = {
    padding: "12px",
    margin: "20px 0",
    borderRadius: 15,
    fontWeight: "600",
    backgroundColor: AppTheme.palette.primary.main,
    display: "block",
    textAlign: "center",
    marginTop: "5%",
    marginLeft: { xs: "20%", sm: "30%" },
  };


  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //   },
  //   onSubmit: (values) => {
  //     const data = {
  //       email: values.email,

  //     };

  //     dispatch(verifyEmail(data)).then(unwrapResult).then((res) => {
  //       toast(res.message)
  //       console.log(res.message)
  //       if (res.Status) {
  //         navigate('/passwordreset')
  //       }
  //     })


  //     values.email = ''

  //   }
  // });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
      };

      dispatch(verifyEmail(data))
        .then(unwrapResult)
        .then((res) => {
          toast(res.message);
          console.log(res.message);
          if (res.Status) {
            navigate('/passwordreset');
          }
        });

      values.email = '';
    },
  });

  return (
    <>
      <Box
        sx={{
          background:
            `radial-gradient(circle at 100% 100%,${AppTheme.palette.primary.main},${AppTheme.palette.primary.main}, #F5F5F5)`,
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ToastContainer position="top-right" />

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToastContainer position="top-right" />
          <Container maxWidth="sm">
            <Grid container>
              <Paper
                elevation={3}
                style={paperStyle}
                sx={{
                  width: "100%",
                  background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                }}
              >
                <Box sx={{ display: "flex" }}>

                  <Button
                    sx={{

                      justifyContent: "flex-start",
                    }}
                    onClick={() => navigate("/login")}
                  >
                    <ArrowBackIosIcon />
                  </Button>
                  {/* </NavLink> */}
                  <Typography
                    variant="h6"
                    sx={{

                      flex: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Enter You Email
                  </Typography>
                </Box>

                <form
                  style={formStyle}
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Email"
                    id="email"
                    name="email"
                    fullWidth
                    size="small"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    autoComplete={false}
                    error={
                      formik.touched.userName && Boolean(formik.errors.userName)
                    }
                    helperText={
                      formik.touched.userName && formik.errors.userName
                    }
                    sx={{ marginBottom: "20px" }}
                  />

                  <Box align="center">

                    {
                      Loading ? <CircularProgress /> :
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          style={{ ...submitButtonStyle }}

                        >
                          Submit
                        </Button>
                    }


                  </Box>

                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Email;
