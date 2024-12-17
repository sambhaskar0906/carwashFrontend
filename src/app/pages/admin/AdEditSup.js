// import React, { useEffect, useState } from "react";

// import {
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   FormControl,
//   Select,
//   InputLabel,
//   MenuItem,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Colors from "../../utils/colors";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import AdminDash from "../../components/AdDash";
// import Axios from "../../utils/Axios";

// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .required("First Name is required")
//     .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
//   surName: Yup.string()
//     .required("Last Name is required")
//     .matches(/^[A-Za-z]+$/, "Only letters are allowed in Last Name"),
//   mobileNumber: Yup.string()
//     .required("Contact Number is required")
//     .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
//   alternateNumber: Yup.string()
//     .required("Alternate Number is required")
//     .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   locality: Yup.string().required("Address is required"),
//   city: Yup.string()
//     .required("City/Town is required")
//     .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
//   district: Yup.string()
//     .required("District is required")
//     .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
//   state: Yup.string()
//     .required("State is required")
//     .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State "),
//   pincode: Yup.string()
//     .required("Pincode is required")
//     .matches(/^[1-9]\d{5}$/, "Invalid Pincode"),
//   Service: Yup.string().required("Service Type is required"),
//   price: Yup.number()
//     .required("Price is required")
//     .positive("Price must be positive")
//     .integer("Price must be an integer"),
// });

// // const formik = {
// //   initialValues: {
// //     firstName: "",
// //     surName: "",
// //     mobileNumber: "",
// //     alternateNumber: "",

// //     email: "",
// //     locality: "",
// //     city: "",
// //     district: "",
// //     state: "",
// //     pincode: "",

// //     price: "",
// //   },
// //   validationSchema: validationSchema,
// //   onSubmit: (values) => {
// //     console.log(values);
// //   },
// // };

// const submitButtonStyle = {
//   marginTop: "20px",
//   marginBottom: "20px",
//   padding: "15px",
//   borderRadius: 5,
//   display: "flex",
//   textAlign: "center",
//   backgroundColor: Colors.palette.secondary.main,
// };

// const textFieldStyles = {
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "black",
//     },
//     "& input": {
//       color: "black",
//     },
//     "& input::placeholder": {
//       color: "darkblack",
//     },
//   },
// };

// const paperStyle = {
//   padding: "20px",
//   display: "flex",
//   flexDirection: "column",
//   borderRadius: 15,
// };
// const formStyle = {
//   width: "100%",
//   marginTop: "3%",
// };

// const AdEditSup1 = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       surName: "",
//       mobileNumber: "",
//       alternateNumber: "",
//       email: "",
//       locality: "",
//       city: "",
//       district: "",
//       state: "",
//       pincode: "",
//       price: "",
//       Service: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       Axios.put(`/edit-supervisior`, values)
//         .then((response) => {
//           console.log("Update Successful", response.data);
//         })
//         .catch((error) => {
//           console.error("Update Failed", error);
//         });
//     },
//   });


//   return (
//     <>
//       <Box
//         display="block"
//         flexDirection="row"
//         alignItems="center"
//         justifyContent="center"
//         className="wrapper"
//         sx={{
//           background: Colors.palette.secondary.cardBackground,
//           padding: "20px",
//         }}
//       >
//         <AdminDash />
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             marginLeft: { xs: "1%", sm: "1%", md: "25%", lg: "15%" },
//             marginTop: { xs: "15%", sm: "15%", md: "10%", lg: "5%" },
//           }}
//         >
//           <Container maxWidth="md">
//             <Grid container>
//               <Paper elevation={10} style={paperStyle}>
//                 <Typography
//                   variant="h6"
//                   sx={{ color: Colors.palette.secondary.main }}
//                 >
//                   Enter your credentials here:
//                 </Typography>
//                 <form
//                   style={formStyle}
//                   onSubmit={formik.handleSubmit}
//                   noValidate
//                 >
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="firstName"
//                         label="First Name"
//                         name="firstName"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.firstName}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.firstName &&
//                           Boolean(formik.errors.firstName)
//                         }
//                         helperText={
//                           formik.touched.firstName && formik.errors.firstName
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="surName"
//                         label="Last Name"
//                         name="surName"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.surName}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.surName &&
//                           Boolean(formik.errors.surName)
//                         }
//                         helperText={
//                           formik.touched.surName && formik.errors.surName
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="mobileNumber"
//                         label="Contact Number"
//                         name="mobileNumber"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.mobileNumber}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.mobileNumber &&
//                           Boolean(formik.errors.mobileNumber)
//                         }
//                         helperText={
//                           formik.touched.mobileNumber &&
//                           formik.errors.mobileNumber
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         id="alternateNumber"
//                         label="Alternate Number"
//                         name="alternateNumber"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.alternateNumber}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.alternateNumber &&
//                           Boolean(formik.errors.alternateNumber)
//                         }
//                         helperText={
//                           formik.touched.alternateNumber &&
//                           formik.errors.alternateNumber
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.email && Boolean(formik.errors.email)
//                         }
//                         helperText={formik.touched.email && formik.errors.email}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography
//                         variant="h6"
//                         sx={{ color: Colors.palette.secondary.main }}
//                       >
//                         Address
//                         <br />
//                       </Typography>
//                     </Grid>

//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="locality"
//                         label="Locality / Building / Street / Society"
//                         name="locality"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.locality}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.locality &&
//                           Boolean(formik.errors.locality)
//                         }
//                         helperText={
//                           formik.touched.locality && formik.errors.locality
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="city"
//                         label="City / Town  District"
//                         name="city"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.city}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.city && Boolean(formik.errors.city)
//                         }
//                         helperText={formik.touched.city && formik.errors.city}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="district"
//                         label="District"
//                         name="district"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.district}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.district &&
//                           Boolean(formik.errors.district)
//                         }
//                         helperText={
//                           formik.touched.district && formik.errors.district
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="state"
//                         label="State"
//                         name="state"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.state}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.state && Boolean(formik.errors.state)
//                         }
//                         helperText={formik.touched.state && formik.errors.state}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="pincode"
//                         label="Pincode"
//                         name="pincode"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.pincode}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.pincode &&
//                           Boolean(formik.errors.pincode)
//                         }
//                         helperText={
//                           formik.touched.pincode && formik.errors.pincode
//                         }
//                       />
//                     </Grid>

//                     <Grid item xs={12}>
//                       <Typography
//                         variant="h6"
//                         sx={{ color: Colors.palette.secondary.main }}
//                       >
//                         Services
//                         <br />
//                       </Typography>
//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                       <FormControl fullWidth size="small" sx={textFieldStyles}>
//                         <InputLabel id="demo-simple-select-label">
//                           Select Service Type
//                         </InputLabel>
//                         <Select
//                           labelId="demo-simple-select-label"
//                           id="Service"
//                           name="Service"
//                           value={formik.values.Service}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           label="Select Service Type"
//                           error={
//                             formik.touched.Service &&
//                             Boolean(formik.errors.Service)
//                           }
//                         >
//                           <MenuItem value={10}>Routine Clean</MenuItem>
//                           <MenuItem value={20}>Dry Clean</MenuItem>
//                           <MenuItem value={30}>Deep Clean</MenuItem>
//                         </Select>
//                         {formik.touched.Service && formik.errors.Service && (
//                           <Typography variant="caption" color="error">
//                             {formik.errors.Service}
//                           </Typography>
//                         )}
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         variant="outlined"
//                         required
//                         fullWidth
//                         id="price"
//                         label="Price (in Rupee)"
//                         name="price"
//                         size="small"
//                         sx={textFieldStyles}
//                         value={formik.values.price}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.price && Boolean(formik.errors.price)
//                         }
//                         helperText={formik.touched.price && formik.errors.price}
//                       />
//                     </Grid>
//                   </Grid>

//                   <Box align="center">
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       sx={{ ...submitButtonStyle }}
//                       onClick={AdEditSup1}
//                     >
//                       Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
//                     </Button>
//                   </Box>
//                 </form>
//               </Paper>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AdEditSup1;




import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFormik } from "formik";
import * as Yup from "yup";
import AdminDash from "../../components/AdDash";
import Axios from "../../utils/AxiosApi";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .matches(/^[A-Za-z]+$/, "Only letters are allowed in First Name"),
  surName: Yup.string()
    .required("Last Name is required")
    .matches(/^[A-Za-z]+$/, "Only letters are allowed in Last Name"),
  mobileNumber: Yup.string()
    .required("Contact Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
  alternateNumber: Yup.string()
    .required("Alternate Number is required")
    .matches(/^[1-9]\d{9}$/, "Invalid Alternate Number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  locality: Yup.string().required("Address is required"),
  city: Yup.string()
    .required("City/Town is required")
    .matches(/^[A-Za-z]+$/, "Only letters are allowed in City"),
  district: Yup.string()
    .required("District is required")
    .matches(/^[A-Za-z]+$/, "Only letters are allowed in District"),
  state: Yup.string()
    .required("State is required")
    .matches(/^[A-Za-z ]+$/, "Only letters are allowed in State "),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9]\d{5}$/, "Invalid Pincode"),
  Service: Yup.string().required("Service Type is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive")
    .integer("Price must be an integer"),
});

// const formik = {
//   initialValues: {
//     firstName: "",
//     surName: "",
//     mobileNumber: "",
//     alternateNumber: "",

//     email: "",
//     locality: "",
//     city: "",
//     district: "",
//     state: "",
//     pincode: "",

//     price: "",
//   },
//   validationSchema: validationSchema,
//   onSubmit: (values) => {
//     console.log(values);
//   },
// };

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

const AdEditSup1 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      mobileNumber: "",
      alternateNumber: "",
      email: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
      price: "",
      Service: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Axios.put(`/edit-supervisior`, values)
      //   .then((response) => {
      //     console.log("Update Successful", response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Update Failed", error);
      //   });
    },
  });

  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    mobileNumber: "",
    alternateNumber: "",
    email: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    Service: "",
    price: "",
  });

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");

    if (id) {
      Axios.get(`/edit-supervisior/${id}`)
        .then((response) => {
          const data = response.data;
          setFormData({
            firstName: data.firstName,
            surName: data.surName,
            mobileNumber: data.mobileNumber.toString(),
            alternateNumber: data.altenateNumber,
            email: data.userName,
            locality: data.address.locality,
            city: data.address.city,
            district: data.address.district,
            state: data.address.state,
            pincode: data.address.pincode.toString(),
            Service: data.service,
            price: data.price.toString(),
          });
        })
        .catch((error) => {
          console.error("Failed to fetch data", error);
        });
    }
  }, []);



  return (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
        sx={{
          // background: Colors.palette.secondary.cardBackground,
          padding: "20px",
        }}
      >
        <AdminDash />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginLeft: { xs: "1%", sm: "1%", md: "25%", lg: "15%" },
            marginTop: { xs: "15%", sm: "15%", md: "10%", lg: "5%" },
          }}
        >
          <Container maxWidth="md">
            <Grid container>
              <Paper elevation={10} style={paperStyle}>
                <Typography
                  variant="h6"
                // sx={{ color: Colors.palette.secondary.main }}
                >
                  Enter your credentials here:
                </Typography>
                <form
                  style={formStyle}
                  onSubmit={formik.handleSubmit}
                  noValidate
                >
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
                        sx={textFieldStyles}
                        value={formData.firstName} // Pre-fill value from API
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                        id="surName"
                        label="Last Name"
                        name="surName"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.surName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.surName &&
                          Boolean(formik.errors.surName)
                        }
                        helperText={
                          formik.touched.surName && formik.errors.surName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="mobileNumber"
                        label="Contact Number"
                        name="mobileNumber"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.mobileNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.mobileNumber &&
                          Boolean(formik.errors.mobileNumber)
                        }
                        helperText={
                          formik.touched.mobileNumber &&
                          formik.errors.mobileNumber
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="alternateNumber"
                        label="Alternate Number"
                        name="alternateNumber"
                        size="small"
                        sx={textFieldStyles}
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
                        label="Email Address"
                        name="email"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
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
                        value={formik.values.locality}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.locality &&
                          Boolean(formik.errors.locality)
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
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="district"
                        label="District"
                        name="district"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.district}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.district &&
                          Boolean(formik.errors.district)
                        }
                        helperText={
                          formik.touched.district && formik.errors.district
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="state"
                        label="State"
                        name="state"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={formik.touched.state && formik.errors.state}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.pincode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.pincode &&
                          Boolean(formik.errors.pincode)
                        }
                        helperText={
                          formik.touched.pincode && formik.errors.pincode
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                      // sx={{ color: Colors.palette.secondary.main }}
                      >
                        Services
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth size="small" sx={textFieldStyles}>
                        <InputLabel id="demo-simple-select-label">
                          Select Service Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="Service"
                          name="Service"
                          value={formik.values.Service}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          label="Select Service Type"
                          error={
                            formik.touched.Service &&
                            Boolean(formik.errors.Service)
                          }
                        >
                          <MenuItem value={10}>Routine Clean</MenuItem>
                          <MenuItem value={20}>Dry Clean</MenuItem>
                          <MenuItem value={30}>Deep Clean</MenuItem>
                        </Select>
                        {formik.touched.Service && formik.errors.Service && (
                          <Typography variant="caption" color="error">
                            {formik.errors.Service}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="price"
                        label="Price (in Rupee)"
                        name="price"
                        size="small"
                        sx={textFieldStyles}
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                      />
                    </Grid>
                  </Grid>

                  <Box align="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ ...submitButtonStyle }}
                      onClick={AdEditSup1}
                    >
                      Submit <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AdEditSup1;

