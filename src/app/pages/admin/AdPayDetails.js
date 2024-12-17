import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import AdDash from "../../components/AdDash";
import { useLocation } from "react-router-dom";
import Axios from "../../utils/AxiosApi";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Loader from "../../components/Loader";
import Logo from "../../assests/images/Logo.png";
import { NavLink } from "react-router-dom";

const AdPayDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(userId);
        const response = await Axios.get(
          `/view-details-success&unsuccess-transaction/${userId}`
        );
        setUserData(response.data);
        console.log(response.data);
        // console.log(userData);
        console.log(userId);
      } catch (error) {
        console.error("Error fetching user details: ", error);
      }
    };
    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  return !userData ? (
    <Loader />
  ) : (
    <>
      <Box
        display="block"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="wrapper"
      >
        <AdDash />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: "15%", sm: "10%", md: "8%" },
            marginLeft: { sm: "0%", md: "21.5%", lg: "17%" },
          }}
        >
          <Box align="center">
            <Button
              variant="outlined"
              size="large"
              sx={{
                // backgroundColor: Colors.palette.secondary.main,
                // color: Colors.palette.primary.main,
                borderRadius: "5px",
                // "&:hover": { backgroundColor: Colors.palette.secondary.blue },
                mt: "5%",
              }}
            >
              Print
            </Button>
          </Box>

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
                width: { xs: "100%", sm: "100%", md: "60%" },
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
                  <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{
                      flexGrow: 1,
                      // background: Colors.palette.secondary.main,
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={Logo}
                      alt=""
                      style={{
                        marginTop: "15px",
                        width: "150px",
                        maxWidth: "100%",
                        height: "50px",
                      }}
                    />
                  </Typography>
                </Typography>
                <Typography>Booking ID: {userId}</Typography>
              </Box>

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
                  Booking Date:
                  {userData?.transactionDetails?.transactions?.createdAt}{" "}
                </Typography>
                <Typography>
                  Scheduled Date:{" "}
                  {userData?.transactionDetails?.transactions?.updatedAt}
                </Typography>
              </Box>

              <Paper sx={{ height: "auto", padding: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
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
                    <PhoneIcon sx={{ mr: 1 }} />
                    {userData?.transactionDetails?.user?.mobileNumber} /{" "}
                    {userData?.transactionDetails?.user?.alternateNumber}
                  </Typography>
                </Box>
                <br />

                <Box
                  sx={{
                    display: { xs: "block", sm: "flex", md: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    // color: Colors.palette.primary.darkBlue,
                    // padding: "10px",
                  }}
                >
                  <Typography>
                    {userData?.transactionDetails?.user?.firstName}{" "}
                    {userData?.transactionDetails?.user?.surName}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MailIcon sx={{ mr: 1 }} />
                    {userData?.transactionDetails?.user?.userName}
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "2%" }}>
                  <Grid item xs={12}>
                    {/* <Typography
                      variant="h6"
                      sx={{ color: Colors.palette.secondary.main }}
                    >
                      Address
                    </Typography> */}
                  </Grid>
                  <br />
                  <Typography>
                    {userData?.transactionDetails?.user?.address?.locality}
                  </Typography>{" "}
                  <br />
                  <Typography>
                    {userData?.transactionDetails?.user?.address?.district}
                  </Typography>{" "}
                  <br />
                  <Typography>
                    {userData?.transactionDetails?.user?.address?.state} ,{" "}
                    {userData?.transactionDetails?.user?.address?.pincode}
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
                <Typography>
                  {
                    userData?.transactionDetails?.serviceRequestDetails
                      ?.serviceType
                  }
                </Typography>
                <Typography>
                  {userData?.transactionDetails?.serviceRequestDetails?.Amount}
                </Typography>
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
                  <Typography>
                    {
                      userData?.transactionDetails?.serviceRequestDetails
                        ?.Amount
                    }
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Mode Of Payment :</Typography>
                  <Typography>
                    {
                      userData?.transactionDetails?.serviceRequestDetails
                        ?.paymentMode
                    }
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Status :</Typography>
                  <Typography sx={{ color: "red" }}>Pending</Typography>
                </div>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AdPayDetails;
