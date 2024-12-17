import React, { useContext, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  useMediaQuery,
  Toolbar,

} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import CallIcon from "@mui/icons-material/Call";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Footer from "../../partials/Footer";
import Nav from "../../partials/Nav";
import Ourplan from "../../components/ContactusContent";
import Question from "../../components/Question";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation } from "react-router-dom";
import ContactUsImg from "../../assests/images/Contact.png";
import { AuthContext } from "../../context/AuthContext";
import AppTheme from "../../themes/AppTheme";
import { useDispatch, useSelector } from "react-redux";
import { sendmailformContact } from "../../store/slices/Sendmailcontact";
import CircularProgress from '@mui/material/CircularProgress';

const cardStyles = {
  p: 2,
  marginBottom: "5% !important",
  borderRadius: "20px !important",
  width: "95% !important",
  marginRight: "5% !important",
};

const mobileCardStyles = {
  width: "auto !important",
  p: "0 !important",
  marginBottom: "2% !important",
  borderRadius: "20px !important",
  marginRight: "0 !important",
};

const boxStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

const formStyle = {
  width: "100%",
  marginTop: "5%",
};

const buttonBoxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: '20px'
};

const submitButtonStyle = {
  width: "auto",
  textTransform: "capitalize",
  fontSize: "16px",
  padding: "10px",
  margin: "20px 0",
  // color: Colors.palette.primary.main,
  borderRadius: "10px",
  backgroundColor: AppTheme.palette.primary.main,
};

function ContactUs() {
  const dispatch = useDispatch();

  const { emailloading } = useSelector((state) => state.SENDMAIL)

  const footerRef = useRef(null)
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToFooter = params.get('scrollToFooter');

    if (scrollToFooter) {
      if (footerRef.current) {
        footerRef?.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search, footerRef]);




  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
    contactNumber: Yup.string()
      .required("Contact Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
    alternateNumber: Yup.string()
      .required("Alternate Number is required")
      .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
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
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      contactNumber: "",
      alternateNumber: "",
      email: "",
      locality: "",
      District: "",
      city: "",
      State: "",
      Pincode: "",
      message: "",
    },

    onSubmit: (values) => {


      const data = {
        firstname: values.firstName,
        lastname: values.surName,
        contact: values.contactNumber,
        alternatenumber: values.alternateNumber,
        email: values.email,
        message: values.message,
        address: {
          locality: values.locality,
          city: values.city,
          district: values.District,
          state: values.State,
          pincode: values.Pincode,
        },
      };


      dispatch(sendmailformContact(data))
    },
  });

  return (
    <>
      {/* <Nav /> */}
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url(${ContactUsImg})`,
          backgroundSize: "cover",
          minHeight: "400px",
          backgroundPosition: "center",
          // position: "relative",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            justifyContent="center"
            textAlign={"center"}
            sx={{ mt: "200px", display: "flex" }}
          ></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Ourplan />
          <Box sx={{ mt: 2 }}>
            <Container>
              <Grid container spacing={4} maxWidth={'lg'}>
                <Grid item xs={12} sm={12} md={6}>

                  <Card
                    sx={{

                      ...cardStyles,
                      ...(isSmallScreen && mobileCardStyles),
                      marginRight: isSmallScreen ? "0" : "5%",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        {" "}
                        <Container>
                          <Grid container wrap="nowrap" spacing={10}>
                            <Grid item marginTop="5%">
                              <HourglassFullIcon
                                sx={{
                                  // color: Colors.palette.secondary.main,
                                  fontSize: "30px",
                                }}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                              // sx={{ color: Colors.palette.secondary.main }}
                              >
                                <b>Hours</b>
                                <br />
                                Mon-Fri : 9 AM - 7 PM
                                <br />
                                Sat : 9 AM - 2 PM
                              </Typography>
                            </Grid>
                          </Grid>
                        </Container>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card
                    sx={{
                      // width: "70%",
                      ...cardStyles,
                      ...(isSmallScreen && mobileCardStyles),
                      marginRight: isSmallScreen ? "0" : "5%",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        {" "}
                        <Container>
                          <Grid container wrap="nowrap" spacing={10}>
                            <Grid item marginTop="5%">
                              <CallIcon
                                sx={{
                                  // color: Colors.palette.secondary.main,
                                  fontSize: "30px",
                                }}
                              />
                            </Grid>
                            <Grid item xs>
                              <Typography
                              // sx={{ color: Colors.palette.secondary.main }}
                              >
                                <b>Contact:</b>
                                <br />
                                wowkaar@info.com
                                <br />
                                +91 7017866149
                              </Typography>
                            </Grid>
                          </Grid>
                        </Container>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card
                    sx={{
                      // width: "70%",
                      ...cardStyles,
                      ...(isSmallScreen && mobileCardStyles),
                      marginRight: isSmallScreen ? "0" : "5%",
                    }}
                  >
                    {" "}
                    <CardActionArea>
                      <CardContent>
                        <Container>
                          <Grid container wrap="nowrap" spacing={10}>
                            <Grid item marginTop="5%">
                              <ExploreIcon
                                sx={{
                                  // color: Colors.palette.secondary.main,
                                  fontSize: "30px",
                                }}
                              />
                            </Grid>
                            <Grid item xs>
                              <Typography
                              // sx={{ color: Colors.palette.secondary.main }}
                              >
                                <b>Address:</b>
                                <br />
                                Noida,
                                <br /> Delhi NCR, UP
                              </Typography>
                            </Grid>
                          </Grid>
                        </Container>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <div className="card">
                    <iframe
                      width="100%"
                      height="400"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Noida&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      title="Map"
                    ></iframe>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Card>
                    <Container component="main" maxWidth="sm">
                      <Grid container>
                        <Box
                          style={{
                            ...boxStyle,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <form
                            style={formStyle}
                            noValidate
                            onSubmit={formik.handleSubmit}
                          >
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
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="lastName"
                                  placeholder="Last Name"
                                  name="surName"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.lastName}
                                  error={
                                    formik.touched.lastName &&
                                    Boolean(formik.errors.lastName)
                                  }
                                  helperText={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="contactNumber"
                                  placeholder="Contact Number"
                                  type="tel"
                                  name="contactNumber"
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
                                  value={formik.values.alternateNumber}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
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
                                  placeholder="Email Address"
                                  type="email"
                                  name="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                  }
                                  helperText={
                                    formik.touched.email && formik.errors.email
                                  }
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h5">
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
                                  placeholder="Locality / Building / Street / Society"
                                  name="locality"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.locality}
                                  error={
                                    formik.touched.locality &&
                                    Boolean(formik.errors.locality)
                                  }
                                  helperText={
                                    formik.touched.locality &&
                                    formik.errors.locality
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="city"
                                  placeholder="City / Town  District"
                                  name="city"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.city}
                                  error={
                                    formik.touched.city &&
                                    Boolean(formik.errors.city)
                                  }
                                  helperText={
                                    formik.touched.city && formik.errors.city
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="District"
                                  placeholder=" District"
                                  name="District"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.District}
                                  error={
                                    formik.touched.District &&
                                    Boolean(formik.errors.District)
                                  }
                                  helperText={
                                    formik.touched.District &&
                                    formik.errors.District
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
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.State}
                                  error={
                                    formik.touched.State &&
                                    Boolean(formik.errors.State)
                                  }
                                  helperText={
                                    formik.touched.State && formik.errors.State
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  id="Pincode"
                                  placeholder="Pincode"
                                  name="Pincode"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.Pincode}
                                  error={
                                    formik.touched.Pincode &&
                                    Boolean(formik.errors.Pincode)
                                  }
                                  helperText={
                                    formik.touched.Pincode &&
                                    formik.errors.Pincode
                                  }
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h5">
                                  Message
                                  <br />
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  multiline
                                  rows={4}
                                  placeholder="Send us your queries and suggestions.."
                                  id="message"
                                  name="message"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.message}
                                  error={
                                    formik.touched.message &&
                                    Boolean(formik.errors.message)
                                  }
                                  helperText={
                                    formik.touched.message &&
                                    formik.errors.message
                                  }
                                />
                              </Grid>
                            </Grid>

                            <Box style={buttonBoxStyles}>
                              {emailloading ? <CircularProgress /> : <Button
                                type="submit"
                                variant="contained"
                                style={submitButtonStyle}


                              >
                                Submit

                              </Button>}
                            </Box>

                          </form>
                        </Box>
                      </Grid>
                    </Container>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Question />
        </Box>
      </Box>

    </>
  );
}

export default ContactUs;
