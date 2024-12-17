import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Axios from "../../utils/AxiosApi";
import Loader from "../../components/Loader";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useLocation, NavLink } from "react-router-dom";

const ServiceInvoice = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [completeAddress, setCompleteAddress] = useState({});
  const [open, setOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const location = useLocation();
  const response = new URLSearchParams(location.search).get("response");

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const responseId = urlParams.get("id");
      const response = await Axios.get(`/get-service-request/${responseId}`);
      console.log("Response Data:", response.data);
      setUserData(response.data);

      const completeAddressResponse = await Axios.get(
        "/get-service-request/" + response.data._id
      );
      console.log(
        "Complete Address Data:",
        completeAddressResponse.data.address
      );
      setCompleteAddress(completeAddressResponse.data.address);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (response === "success") {
      setBookingSuccess(true);
      handleClickOpen();
    }
    // else if (response === "#") {
    //   setBookingSuccess(false);
    //   handleClickOpen();
    // }
  }, [response]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {bookingSuccess ? (
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              // background: Colors.palette.primary.main,
              padding: "20px",
            },
          }}
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{
              //  color: Colors.palette.secondary.main 
              }}
          >
            <Typography variant="h3" gutterBottom textAlign="center">
              Thank you!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              // style={{ color: Colors.palette.secondary.main }}
            >
              <Typography variant="h5" gutterBottom>
                Your booking has been placed!
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{
                // backgroundColor: Colors.palette.secondary.main,
                // color: Colors.palette.primary.main,
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              // background: Colors.palette.primary.main,
              padding: "20px",
            },
          }}
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{
              //  color: Colors.palette.secondary.main 
              }}
          >
            <Typography variant="h4" gutterBottom textAlign="center">
              Booking was Unsuccessful
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              style={{ 
                // color: Colors.palette.secondary.main 
              }}
            >
              <Typography variant="h6" gutterBottom textAlign="center">
                Your booking could not be completed. Please try again later.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <NavLink
              to="/servicelocation"
              style={{
                textDecoration: "none",
                // color: Colors.palette.secondary.main,
              }}
            >
              <Button
                onClick={handleClose}
                style={{
                  // backgroundColor: Colors.palette.secondary.main,
                  // color: Colors.palette.primary.main,
                  marginRight: "10px",
                }}
              >
                Book Again
              </Button>
            </NavLink>
            <Button
              onClick={handleClose}
              style={{
                // backgroundColor: Colors.palette.secondary.main,
                // color: Colors.palette.primary.main,
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Box align="center">
        <Button
          variant="outlined"
          size="large"
          sx={{
            // backgroundColor: Colors.palette.secondary.main,
            // color: Colors.palette.primary.main,
            borderRadius: "5px",
            "&:hover": { 
              // backgroundColor: Colors.palette.secondary.blue
             },
            mt: "5%",
          }}
        >
          Print
        </Button>
      </Box>
      {bookingSuccess && (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "3%",
            mb: "5%",
          }}
        >
          <Box
            sx={{
              // background: Colors.palette.secondary.cardBackground,
              width: "70%",
              height: "100%",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: { xs: "block", sm: "flex", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                // color: Colors.palette.primary.darkBlue,
                padding: "10px",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                LOGO
              </Typography>
              <Typography>Booking ID: #{userData._id}</Typography>
            </Box>

            <Box
              sx={{
                // display: { xs: "block", sm: "flex", md: "flex" },
                justifyContent: "spacebetween",
                alignItems: "center",
                // color: Colors.palette.primary.darkBlue,
                padding: "10px",
              }}
            >
              <Typography>Booking Date: {userData.updatedAt}</Typography>
              <br />
              <Typography>Scheduled Date:</Typography>
            </Box>

            <Paper sx={{ height: "auto", padding: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flexend",
                  padding: "5px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // color: Colors.palette.primary.darkBlue,
                  }}
                >
                  <PhoneIcon sx={{}} />
                  {userData.mobileNumber}
                </Typography>
              </Box>
              <br />

              <Box
                sx={{
                  display: { xs: "block", sm: "flex", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  // color: Colors.palette.primary.darkBlue,
                  padding: "10px",
                }}
              >
                <Typography>
                  {userData.firstName} {userData.surName}
                </Typography>
                <Typography>
                  {" "}
                  <MailIcon />
                  {userData.userName}
                </Typography>
              </Box>

              <Box sx={{ marginTop: "2%" }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    // sx={{ color: Colors.palette.secondary.main }}
                  >
                    Address
                  </Typography>
                </Grid>
                <br />
                <Typography>{completeAddress.city}</Typography> <br />
                <Typography>
                  {completeAddress.district} {completeAddress.locality}
                </Typography>{" "}
                <br />
                <Typography>
                  {completeAddress.state} {completeAddress.pincode}
                </Typography>
              </Box>
            </Paper>

            <Box
              sx={{
                marginTop: "5%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // color: Colors.palette.primary.main,
                // background: Colors.palette.primary.darkBlue,
                padding: "5px",
              }}
            >
              <Typography variant="h6">Service Type</Typography>
              <Typography variant="h6">Amount (in Rupee)</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px",
                // background: Colors.palette.primary.main,
              }}
            >
              <Typography>{userData.serviceType}</Typography>
              <Typography>Rs. 499</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
                padding: "20px",
                // background: Colors.palette.primary.main,
                marginTop: "5%",
                marginLeft: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography>Total Amount :</Typography>
                <Typography>Rs. 499</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography>Mode Of Payment :</Typography>
                <Typography>Cash on Delivery</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography>Status :</Typography>
                <Typography sx={{ color: "red" }}>{userData.status}</Typography>
              </div>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ServiceInvoice;
