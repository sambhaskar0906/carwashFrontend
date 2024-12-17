import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Axios from "../../utils/AxiosApi";
import { useState, useEffect } from "react";

const submitButtonStyle = {
  width: "80px",
  textTransform: "capitalize",
  fontSize: "16px",
  padding: "10px",
  margin: "20px 0",
  color: "white",
  borderRadius: "10px",
  // backgroundColor: Colors.palette.secondary.main,
};

function Profile2() {
  const createProfile = async () => {
    const data = {
      firstName: formik.values.firstName,
      surName: formik.values.surname,
      mobileNumber: formik.values.contactNumber,
      alternateNumber: formik.values.alternateNumber,
      email: formik.values.email,

      address: {
        locality: formik.values.Locality,
        city: formik.values.City,
        district: formik.values.District,
        state: formik.values.State,
        pincode: formik.values.Pincode,
      },
    };

    try {
      const response = await Axios.post("/src/routes/createData", data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const paperStyle = {
    padding: "20px",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "0.5%",
  };

  const formStyle = {
    width: "100%",
    marginTop: "3%",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    surname: Yup.string()
      .required("Surname Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in Surname"),
    contactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
    alternateNumber: Yup.string()
      .required("Alternate Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
    email: Yup.string().email("Invalid email ").required("Email is required"),
    Locality: Yup.string().required("Locality is required"),
    City: Yup.string()
      .required("City is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
    District: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    State: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State"),
    Pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^[1-9]\d{5}$/, "Invalid Pincode"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      contactNumber: "",
      alternateNumber: "",
      email: "",
      Locality: "",
      City: "",
      District: "",
      State: "",
      Pincode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("On Submit Values: ", values);
      formik.resetForm();
    },
  });

  return (
    <Box
      sx={{
        // backgroundColor: Colors.palette.secondary.cardBackground,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="sm">
        <Grid container sx={{ marginBlock: "20%" }}>
          <Paper
            elevation={10}
            style={paperStyle}
            sx={{ borderRadius: "30px" }}
          >
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "0",
                right: "0",
                width: "100%",
                height: "23%",
                // backgroundColor: Colors.palette.secondary.main,
                borderRadius: "0 0 40% 40%",
              }}
            ></div>
            <Button
              variant="contained"
              sx={{
                position: "relative",
                marginLeft: "80%",
                // background: Colors.palette.primary.main,
                // color: Colors.palette.primary.darkBlue,
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "16px",
                marginTop: "3%",
              }}
            >
              Done
            </Button>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                marginBottom: "2rem",
              }}
            >
              <CircleIcon
                sx={{
                  // backgroundColor: Colors.palette.secondary.lightGrey,
                  fontSize: "200px",
                  // color: Colors.palette.secondary.lightGrey,
                  position: "relative",
                  borderRadius: "60%",
                  // border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />

              <PhotoCameraIcon
                sx={{
                  padding: "2px",
                  // color: Colors.palette.secondary.main,
                  // backgroundColor: Colors.palette.secondary.lightGrey,
                  position: "absolute",
                  bottom: 0,
                  left: "80%",
                  top: "80%",
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  // border: `3px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </Box>
            <form style={formStyle} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="surname"
                    placeholder="Surname"
                    name="surname"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                    error={
                      formik.touched.surname && Boolean(formik.errors.surname)
                    }
                    helperText={formik.touched.surname && formik.errors.surname}
                  />
                  {/* .... */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    placeholder="Contact Number"
                    name="contactNumber"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactNumber}
                    error={
                      formik.touched.contactNumber &&
                      Boolean(formik.errors.contactNumber)
                    }
                    helperText={
                      formik.touched.contactNumber &&
                      formik.errors.contactNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    placeholder="Alternate Number"
                    name="alternateNumber"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.alternateNumber}
                    error={
                      formik.touched.alternateNumber &&
                      Boolean(formik.errors.alternateNumber)
                    }
                    helperText={
                      formik.touched.alternateNumber &&
                      formik.errors.alternateNumber
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    placeholder="Email ID"
                    name="email"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      // color: Colors.palette.primary.darkBlue,
                      fontWeight: "600",
                    }}
                  >
                    Address
                    <br />
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Locality"
                    placeholder="Locality / Building / Street / Society"
                    name="Locality"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Locality}
                    error={
                      formik.touched.Locality && Boolean(formik.errors.Locality)
                    }
                    helperText={
                      formik.touched.Locality && formik.errors.Locality
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="City"
                    placeholder="City / Town  District"
                    name="City"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.City}
                    error={formik.touched.City && Boolean(formik.errors.City)}
                    helperText={formik.touched.City && formik.errors.City}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="District"
                    placeholder="District"
                    name="District"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.District}
                    error={
                      formik.touched.District && Boolean(formik.errors.District)
                    }
                    helperText={
                      formik.touched.District && formik.errors.District
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="State"
                    placeholder="State"
                    name="State"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.State}
                    error={formik.touched.State && Boolean(formik.errors.State)}
                    helperText={formik.touched.State && formik.errors.State}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pincode"
                    placeholder=" Pincode"
                    name="Pincode"
                    // sx={{ border: "1px solid black" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Pincode}
                    error={
                      formik.touched.Pincode && Boolean(formik.errors.Pincode)
                    }
                    helperText={formik.touched.Pincode && formik.errors.Pincode}
                  />
                </Grid>
              </Grid>
              <Box align="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ ...submitButtonStyle }}
                  // onClick={formik.handleSubmit}
                  // onClick={createProfile}
                >
                  Update Data
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile2;
