import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../utils/AxiosApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const submitButtonStyle = {
  marginTop: "20px",
  marginBottom: "20px",
  padding: "15px",
  borderRadius: 5,
  display: "flex",
  textAlign: "center",
  // backgroundColor: Colors.palette.secondary.main,
};

const Mobile = () => {
  const MobileUser = async () => {
    const data = {
      mobileNumber: formik.values.mobileNumber,
    };
    try {
      const response = await Axios.post("src/routes/resbymobnum", data);
      console.log("response", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
  });
  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("On Submit Values: ", values);
      formik.resetForm();
    },
  });

  return (
    <>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <Box
              sx={{
                background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                borderRadius: "20px",
                backgroundSize: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
              }}
            >
              <Box style={{ display: "flex" }}>
                <Button
                  sx={{
                    // color: Colors.palette.secondary.main,
                    justifyContent: "flex-start",
                  }}
                >
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      // color: Colors.palette.secondary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                  </NavLink>
                </Button>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  marginTop: "10%",
                  textAlign: "center",
                  // color: Colors.palette.secondary.main,
                }}
              >
                Enter your mobile number here
              </Typography>
              <br />
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    maxWidth: "300px",
                  },
                  marginBottom: "5%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  variant="outlined"
                  fullWidth
                  name="mobileNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobileNumber}
                  error={
                    formik.touched.mobileNumber &&
                    Boolean(formik.errors.mobileNumber)
                  }
                  helperText={
                    formik.touched.mobileNumber && formik.errors.mobileNumber
                  }
                />
              </Box>
              <Box
                onClick={MobileUser}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                >
                  <NavLink
                    to="/otp"
                    style={{
                      textDecoration: "none",
                      // color: Colors.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                  </NavLink>
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  // color: Colors.palette.secondary.main,
                }}
              >
                Already have an account?&nbsp;&nbsp;
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    // color: Colors.palette.secondary.main,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  Login
                </NavLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Mobile;
