import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
  InputAdornment,
  MenuItem,
  Avatar,
  Stack,
  Toolbar,
} from "@mui/material";


import Snackbar from '@mui/material/Snackbar';
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import Axios from "../../../utils/AxiosApi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { baseurl } from "../../../utils/Constant";
import AppTheme from "../../../themes/AppTheme";


import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../store/slices/AuthSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {

  const dispatch = useDispatch()
  const { Loading, UserInfo, Status, isAuthenticate } = useSelector((state) => state.AUTH)
  const [otpFromAPI, setOtpFromAPI] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [userinfodata, setuserinfodata] = useState('')
  const navigate = useNavigate();


  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    height: "auto",
  };

  const submitButtonStyle = {
    marginTop: "10px",
    marginBottom: "5px",
    padding: "10px",
    borderRadius: 3,
    display: "flex",
    textAlign: "center",
    backgroundColor: AppTheme.palette.primary.main,
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "& input": {
        color: "black",
      },
      "& input::placeholder": {
        color: "darkblack",
      },
    },
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "", // Corrected field name
      email: "",
      locality: "",
      city: "",
      state: "",
      pincode: "",
      password: "",
      cpassword: "",
      mobileNumber: "",
      altNumber: "",
      status: "",
      description: "",
      profileImage: null
    },

    // validationSchema: validationSchema,


    onSubmit: (values) => {
      const data = {
        name: {
          firstName: values.firstName,
          lastName: values.lastName
        },
        email: values.email,
        address: {
          locality: values.locality,
          city: values.city,
          state: values.state,
          pincode: values.pincode
        },
        role: 1,
        password: values.password,
        cpassword: values.cpassword,
        mobileNumber: values.mobileNumber,
        altNumber: values.altNumber,
        status: values.status,
        description: values.description,
        profileImage: values.profileImage
      }

      dispatch(userRegister(data)).then(unwrapResult).then((res) => {
        toast(res?.message)
        if (res?.Status) {
          navigate('/otp')
        }
      })


    },

  });



  return (
    <>
      <Toolbar />
      <Box
        sx={{
          background:
            `radial-gradient(circle at 100% 100%,${AppTheme.palette.primary.main}, ${AppTheme.palette.primary.main}, #F5F5F5)`,
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

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
          <Container maxWidth="sm" sx={{ mt: "1%", mb: "2%" }}>
            <Grid container>
              <Paper elevation={10} style={paperStyle}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  {/* <Button onClick={onLoginHandler}>Login</Button> */}
                  <Button>
                    <NavLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        // color: Colors.palette.secondary.main,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArrowBackIosIcon />
                      Login
                    </NavLink>
                  </Button>
                </Box>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    mt: "5px",
                    mb: "10px",
                    justifyContent: "center",
                    // color: Colors.palette.secondary.main,
                  }}
                >
                  Enter your credentials here:
                </Typography>
                <form
                  encType="multipart/form-data"
                  style={{
                    // color: Colors.palette.secondary.main
                  }}
                  onSubmit={formik.handleSubmit}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="firstName"
                        label="First Name"
                        placeholder="First Name"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        error={
                          formik.touched.surName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="mobileNumber"
                        label="Contact Number"
                        // type="Mobile"
                        name="mobileNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobileNumber}
                        error={
                          formik.touched.mobileNumber &&
                          Boolean(formik.errors.mobileNumber)
                        }
                        helperText={
                          formik.touched.mobileNumber &&
                          formik.errors.mobileNumber
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="altNumber"
                        label="Alternate Number"
                        name="altNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.altNumber}
                        error={
                          formik.touched.altNumber &&
                          Boolean(formik.errors.altNumber)
                        }
                        helperText={
                          formik.touched.altNumber &&
                          formik.errors.altNumber
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="email"
                        type="email"

                        name="email"
                        placeholder="Email address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="password"
                        label="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        sx={textFieldStyles}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* ==============================================================================image=====================================                    */}

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="Confirm Password"
                        label="Confirm Password"
                        name="cpassword"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cpassword}
                        error={
                          formik.touched.cpassword &&
                          Boolean(formik.errors.cpassword)
                        }
                        helperText={
                          formik.touched.cpassword && formik.errors.cpassword
                        }
                        sx={textFieldStyles}
                        InputProps={{
                          // endAdornment: (
                          //   <InputAdornment position="end">
                          //     <IconButton
                          //       onClick={() => setShowPassword(!showPassword)}
                          //     >
                          //       {showPassword ? (
                          //         <Visibility />
                          //       ) : (
                          //         <VisibilityOff />
                          //       )}
                          //     </IconButton>
                          //   </InputAdornment>
                          // ),
                        }}
                      />
                    </Grid>

                    {/* ==============================================================================image=====================================                    */}
                    <Grid item xs={12}>

                      <input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        onChange={(event) => {
                          formik.setFieldValue("profileImage", event.currentTarget.files[0]);
                        }}
                        onBlur={formik.handleBlur}
                        style={{ display: 'none' }}
                      />
                      <Stack direction={'row'} spacing={4} >
                        <label htmlFor="profileImage">
                          <Button variant="contained" component="span">
                            Upload Profile Image
                          </Button>

                        </label>
                        {formik.values.profileImage && (
                          <Avatar src={URL.createObjectURL(formik.values.profileImage)} alt="Profile" />
                        )}

                        {formik.touched.profileImage && formik.errors.profileImage && (
                          <div>{formik.errors.profileImage}</div>
                        )}

                      </Stack>
                      {/* Display the profile image if available */}

                    </Grid>


                    {/* ==============================================================================image=====================================                    */}


                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                      // sx={{ color: Colors.palette.secondary.main }}
                      >
                        address
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        id="locality"
                        label="locality / Building / Street / Society"
                        name="locality"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.locality}
                        error={
                          formik.touched.locality &&
                          Boolean(formik.errors.locality)
                        }
                        helperText={
                          formik.touched.locality && formik.errors.locality
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="city"
                        label="city / Town  District"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="state"
                        label="state"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.state &&
                          Boolean(formik.errors.state)
                        }
                        helperText={
                          formik.touched.state && formik.errors.state
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={8}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="state"
                        label="state"
                        name="state"
                        onChange={formik.handleChange}
                        s
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={formik.touched.state && formik.errors.state}
                        sx={textFieldStyles}
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="pincode"
                        label="pincode"
                        name="pincode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pincode}
                        error={
                          formik.touched.pincode &&
                          Boolean(formik.errors.pincode)
                        }
                        helperText={
                          formik.touched.pincode && formik.errors.pincode
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>

                    {/* <Grid item xs={12} sm={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="role"
                        label="Role"
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.role && Boolean(formik.errors.role)}
                        helperText={formik.touched.role && formik.errors.role}
                        sx={textFieldStyles}
                        select
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                      </TextField>
                    </Grid> */}


                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        id="description"
                        label="description"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description && formik.errors.description
                        }
                        sx={textFieldStyles}
                      />
                    </Grid>


                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      sx={submitButtonStyle}
                      // onClick={sendOTP}
                      loading={Loading ? true : false}

                    >
                      Submit

                    </LoadingButton>
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

export default RegisterPage;
