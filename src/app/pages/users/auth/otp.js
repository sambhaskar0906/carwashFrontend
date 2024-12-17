import React, { useState, useRef, useContext, useEffect } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Axios from "../../../utils/AxiosApi";
import { AuthContext } from "../../../context/AuthContext";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { verifyotp } from "../../../store/slices/AuthSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const { Loading, UserInfo, Status, error } = useSelector((state) => state.AUTH)





  const [email, setEmail] = useState("");

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    opacity: ".8",
  };

  const formStyle = {
    width: "100%",
    marginTop: '3%',
    position: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const submitButtonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: 3,
    display: "flex",
    textAlign: "center",
    // backgroundColor: Colors.palette.secondary.main,
  };

  // const resendOtp = async () => {
  //   try {
  //     const response = await Axios.post("/otp-forgot-password", {
  //       userName: formData.userName,
  //     });

  //     console.log("Resend OTP response:", response.data);
  //     alert("OTP Resent Successfully");
  //   } catch (error) {
  //     console.error("Resend OTP failed:", error);
  //   }
  // };
  // const textInputRefs = useRef(
  //   Array.from({ length: 6 }).map(() => React.createRef())
  // );
  // const onChange = (e, index) => {
  //   const inputValue = e.target.value;

  //   if (inputValue.length === 1 && /^[0-9]$/.test(inputValue)) {
  //     setNumber({
  //       ...number,
  //       [index]: parseInt(inputValue),
  //     });
  //     setValidationErrors({
  //       ...validationErrors,
  //       [index]: "",
  //     });
  //     if (index < 5 && textInputRefs.current[index + 1]?.current) {
  //       textInputRefs.current[index + 1].current.focus();
  //     }
  //   } else {
  //     setNumber({
  //       ...number,
  //       [index]: "",
  //     });
  //     setValidationErrors({
  //       ...validationErrors,
  //       [index]: "Field is required and must be a single digit (0-9).",
  //     });
  //   }
  // };

  // const enteredOtp = Object.values(number).join("").trim();
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   if (enteredOtp == otp) {
  //     verifyotp(formData, otp, navigate);
  //   } else {
  //     alert("Otp not match");
  //   }
  // };

  // const isSubmitDisabled = Object.values(validationErrors).some(
  //   (error) => !!error
  // );

  const formik = useFormik({
    initialValues: {
      otp: ""
    },

    onSubmit: (values) => {
      const data = {
        otp: values.otp,

      };

      dispatch(verifyotp(data)).then(unwrapResult).then((res) => {
        toast(res.message)
        if (res?.Status) {
          navigate('/login')
        }
      })

      values.otp = ''

    }
  });
  // useEffect(() => {
  //   if (!error) {
  //     navigate('/login')
  //   } else {
  //     console.log('some function error')
  //   }
  // }, [error])

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {ContactData?.map((item, index) => {
          return (
            <Card key={index}>
              <CardContent>
                <Typography>{item?.email}</Typography>
                <Typography>{item?.firstname}</Typography>
              </CardContent>
            </Card>
          );
        })} */}

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
            <Grid
              container
              style={{
                // backgroundImage: `url(${Sedan})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            >
              <Paper elevation={3} sx={{ ...paperStyle, width: "100%" }}>
                <Box style={{ display: "flex" }}>
                  <Button sx={{
                    border: '0px',
                    '&:hover': {
                      border: '0px', background: 'none'
                    }

                  }} variant="outlined" startIcon={<ArrowCircleLeftOutlinedIcon />}>
                    Login
                  </Button>

                </Box>

                <Typography

                  sx={{
                    //  color: Colors.palette.secondary.main 
                    textAlign: 'center'

                  }}
                >
                  You have received an OTP on your <b>
                    {/* {formData.userName} */}
                  </b>
                </Typography>

                <form style={formStyle} noValidate
                  onSubmit={formik.handleSubmit}
                >


                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      variant="outlined"

                      id="otp"
                      name="otp"
                      label="OTP"
                      fullWidth
                      size="small"


                      // type={showPassword ? "text" : "passWord"}
                      value={formik.values.otp}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.otp && Boolean(formik.errors.otp)
                      }
                      helperText={
                        formik.touched.otp && formik.errors.otp
                      }

                    />
                  </Box>

                  <Box align="center" marginTop={5}>
                    <Typography
                      sx={{
                        // color: Colors.palette.secondary.main,
                        display: "flex",
                        mt: "1rem",
                      }}
                    >
                      Didn’t receive the OTP?
                      <span
                        style={{
                          // color: Colors.palette.secondary.blue,
                          marginRight: "1.5rem",
                          cursor: "pointer",
                        }}
                      // onClick={resendOtp}
                      >
                        &nbsp;&nbsp;Resend
                      </span>
                      <TimerOutlinedIcon /> 00:45
                    </Typography>
                  </Box>
                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  > */}
                  {/* <LoadingButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ ...submitButtonStyle }}
                      // disabled={isSubmitDisabled}
                      // loading={VerifyLoading ? true : false}
                      size="small"
                    >
                      Submit <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                    </LoadingButton> */}

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
                  {/* </Box> */}
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Otp;
