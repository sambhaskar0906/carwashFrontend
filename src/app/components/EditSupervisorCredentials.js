import React from "react";
import { LoadingButton } from "@mui/lab";

import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  IconButton,
  InputAdornment,
  Avatar,
  Stack
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

import Axios from "../utils/AxiosApi";
import { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { userRegister } from "../store/slices/AuthSlice";
import { ToastContainer, toast } from "react-toastify";

function EditSupervisorCredentials() {
  const dispatch = useDispatch()
  const { Loading, UserInfo, Status, isAuthenticate } = useSelector((state) => state.AUTH)
  const [otpFromAPI, setOtpFromAPI] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [userinfodata, setuserinfodata] = useState('')
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
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
        password: values.password,
        cpassword: values.cpassword,
        mobileNumber: values.mobileNumber,
        altNumber: values.altNumber,
        status: values.status,
        role: 3,
        description: values.description,
        profileImage: values.profileImage
      }

      console.log("profile image for checking", data.profileImage)

      dispatch(userRegister(data)).then(unwrapResult).then((res) => {
        console.log("response in dispacth section", res)
        toast(res.message)
        if (res?.Status) {
          navigate('/otp')
        }
      })


    },

  });


  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "15px",
    borderRadius: 5,
    display: "flex",
    textAlign: "center",
    // backgroundColor: Colors.palette.secondary.main,
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

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
  };
  const formStyle = {
    width: "100%",
    marginTop: "3%",
  };

  return (
    <Box
      sx={{
        height: "auto",
        borderRadius: "25",
      }}
    >
      <ToastContainer position="top-right" />

      <Container maxWidth="md">
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Typography
              variant="h6"
            // sx={{ color: Colors.palette.secondary.main }}
            >
              Enter credentials here:
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
  );
}

export default EditSupervisorCredentials;
