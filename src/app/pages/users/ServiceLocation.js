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
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import PaymentOptions from "../../components/Paymentoption";
import Axios from "../../utils/AxiosApi";

function ServiceLocation() {
  const navigate = useNavigate();

  const createServiceLocation = async () => {
    const data = {
      firstName: formik.values.firstName,
      surName: formik.values.lastName,
      mobileNumber: formik.values.contactNumber,
      alternateNumber: formik.values.alternateNumber,
      userName: formik.values.email,

      address: {
        locality: formik.values.locality,
        city: formik.values.city,
        district: formik.values.District,
        state: formik.values.State,
        pincode: formik.values.Pincode,
      },

      PickUp_location: {
        locality: formik.values.PickupLocality,
        city: formik.values.PickupCity,
        district: formik.values.PickupDistrict,
        state: formik.values.PickupState,
        pincode: formik.values.PickupPincode,
      },

      paymentMode: formik.values.payment,
    };

    try {
      const response = await Axios.post("/service-request", data);
      console.log("API Response:", response.data);
      navigate(`/serviceinvoice?id=${response.data.id}&response=success`);
    } catch (error) {
      console.error("Error:", error?.response?.data?.message);
      alert("Something Went Wrong");
    }
  };

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

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in Last Name"),
    contactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    locality: Yup.string().required("Locality is required"),
    city: Yup.string()
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
      .test(
        "valid-pincode",
        "Invalid Pincode",
        (value) => value && /^[1-9][0-9]{5}$/.test(value)
      ),
    PickupLocality: Yup.string().required("Locality is required"),
    PickupCity: Yup.string()
      .required("City is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
    PickupDistrict: Yup.string()
      .required("District is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
    PickupState: Yup.string()
      .required("State is required")
      .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State"),
    PickupPincode: Yup.string()
      .required("Pincode is required")
      .test(
        "valid-pickup-pincode",
        "Invalid Pincode",
        (value) => value && /^[1-9][0-9]{5}$/.test(value)
      ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      locality: "",
      city: "",
      District: "",
      State: "",
      Pincode: "",
      PickupLocality: "",
      PickupCity: "",
      PickupDistrict: "",
      PickupState: "",
      PickupPincode: "",
      payment: "",
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
        background:
          "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25",
      }}
    >
      <Container component="main" maxWidth="md" sx={{ mt: "5%", mb: "5%" }}>
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Typography
              variant="h6"
              // sx={{ color: Colors.palette.secondary.main }}
            >
              Enter your credentials here:
            </Typography>
            <form style={formStyle} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    size="small"
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
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
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
                    id="contactNumber"
                    label="Contact Number"
                    type="tel"
                    name="contactNumber"
                    size="small"
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
                    sx={textFieldStyles}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <PaymentOptions />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    // sx={{ color: Colors.palette.secondary.main }}
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
                    id="locality"
                    label="Locality / Building / Street / Society"
                    name="locality"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.locality}
                    error={
                      formik.touched.locality && Boolean(formik.errors.locality)
                    }
                    helperText={
                      formik.touched.locality && formik.errors.locality
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city"
                    label="City / Town  District"
                    name="city"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="District"
                    label="District"
                    name="District"
                    size="small"
                    sx={textFieldStyles}
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
                    label="State"
                    name="State"
                    size="small"
                    sx={textFieldStyles}
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
                    label=" Pincode"
                    name="Pincode"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Pincode}
                    error={
                      formik.touched.Pincode && Boolean(formik.errors.Pincode)
                    }
                    helperText={formik.touched.Pincode && formik.errors.Pincode}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Typography variant="h6">
                    Do you want the service at:
                    <br />
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup row aria-label="location" name="location">
                      <FormControlLabel
                        value="My place"
                        control={<Radio />}
                        label="My place"
                      />
                      <FormControlLabel
                        value="CarWash centre"
                        control={<Radio />}
                        label="CarWash centre"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    // sx={{ color: Colors.palette.secondary.main }}
                  >
                    Pickup Location
                    <br />
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupLocality"
                    label="Locality / Building / Street / Society"
                    name="PickupLocality"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupLocality}
                    error={
                      formik.touched.PickupLocality &&
                      Boolean(formik.errors.PickupLocality)
                    }
                    helperText={
                      formik.touched.PickupLocality &&
                      formik.errors.PickupLocality
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupCity"
                    label="City / Town  District"
                    name="PickupCity"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupCity}
                    error={
                      formik.touched.PickupCity &&
                      Boolean(formik.errors.PickupCity)
                    }
                    helperText={
                      formik.touched.PickupCity && formik.errors.PickupCity
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupDistrict"
                    label=" District"
                    name="PickupDistrict"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupDistrict}
                    error={
                      formik.touched.PickupDistrict &&
                      Boolean(formik.errors.PickupDistrict)
                    }
                    helperText={
                      formik.touched.PickupDistrict &&
                      formik.errors.PickupDistrict
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupState"
                    label="State"
                    name="PickupState"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupState}
                    error={
                      formik.touched.PickupState &&
                      Boolean(formik.errors.PickupState)
                    }
                    helperText={
                      formik.touched.PickupState && formik.errors.PickupState
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="PickupPincode"
                    label=" Pincode"
                    name="PickupPincode"
                    size="small"
                    sx={textFieldStyles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PickupPincode}
                    error={
                      formik.touched.PickupPincode &&
                      Boolean(formik.errors.PickupPincode)
                    }
                    helperText={
                      formik.touched.PickupPincode &&
                      formik.errors.PickupPincode
                    }
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
                {/* <NavLink
                  to={
                    apiResponseId
                      ? `/serviceinvoice?id=${apiResponseId}&response=success`
                      : "#"
                  }
                  style={{
                    textDecoration: "none",
                    color: Colors.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                  }}
                > */}

                <Button
                  type="button"
                  variant="contained"
                  sx={{ ...submitButtonStyle }}
                  onClick={createServiceLocation}
                >
                  Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                </Button>
                {/* </NavLink> */}
              </Box>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiceLocation;
