import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Container,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "../../../utils/AxiosApi";
import { useDispatch, useSelector, } from "react-redux";
import { getUserProfile, userLogin, ConfirmingPassword } from "../../../store/slices/AuthSlice";
import AppTheme from "../../../themes/AppTheme";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingButton } from "@mui/lab";


function PasswordReset() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { Loading, UserInfo, Status, confirmPassOtp } = useSelector((state) => state.AUTH)


  const formik = useFormik({
    initialValues: {
      password: "",
      cpassword: "",
      otp: ""
    },
    onSubmit: (values) => {
      const data = {
        password: values.password,
        cpassword: values.cpassword,
        otp: values.otp
      };



      dispatch(ConfirmingPassword(data)).then(unwrapResult).then((res) => {
        toast(res.message)
        if (res.Status) {
          setTimeout(() => {
            navigate('/login')
          }, 1000)

        }
      })


      values.email = ''
      values.password = ''
    }
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

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
    marginTop: "20px",
    marginBottom: "20px",
    padding: "15px",
    borderRadius: 15,
    display: "flex",
    textAlign: "center",
    color: "white",
    // backgroundColor: Colors.palette.secondary.main,
  };

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
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
                <form
                  style={formStyle}
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      // color: Colors.palette.secondary.main,
                      flex: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Reset Password
                  </Typography>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    size="small"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    sx={{ marginBottom: "20px", marginTop: "40px" }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    id="cpassword"
                    name="cpassword"
                    label="Confirm Password"
                    size="small"
                    sx={{ marginBottom: "20px" }}
                    type='text'
                    value={formik.values.cpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.cpassword &&
                      Boolean(formik.errors.cpassword)
                    }
                    helperText={
                      formik.touched.cpassword &&
                      formik.errors.cpassword
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            edge="end"
                          >
                            {/* {showConfirmPassword ? <Visibility /> : <VisibilityOff />} */}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    id="otp"
                    name="otp"
                    label="OTP"
                    size="small"
                    sx={{ marginBottom: "20px" }}
                    type="text"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.otp &&
                      Boolean(formik.errors.otp)
                    }
                    helperText={
                      formik.touched.otp &&
                      formik.errors.otp
                    }


                  />





                  <LoadingButton
                    variant="contained"
                    type="submit"
                    disabled={!formik.isValid}
                    fullWidth
                    style={{ ...submitButtonStyle }}
                  // loading={confirmPassOtp ? false : true}

                  >
                    Reset Password

                  </LoadingButton>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default PasswordReset;
