import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import Axios from "../../utils/AxiosApi";
import { useNavigate } from "react-router-dom";


function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(
        "/get-user-Data/6548872d291e67aa66316c6d"
      );
      console.log("Response Data:", response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

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
                height: "25%",
                // backgroundColor: Colors.palette.secondary.main,
                borderRadius: "0 0 40% 40%",
              }}
            ></div>

            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              {/* <NavLink
                to="/editprofile"
                style={{
                  textDecoration: "none",
                  color: Colors.palette.secondary.main,
                }}
              > */}
              <Button
                variant="text"
                startIcon={<EditIcon />}
                sx={{
                  // background: Colors.palette.secondary.main,
                  // color: Colors.palette.primary.main,
                  fontWeight: "600",
                  fontSize: "16px",
                  marginTop: "3%",
                }}
                onClick={() => navigate(`/editprofile`)}
              >
                Edit
              </Button>
              {/* </NavLink> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                marginBottom: "2rem",
              }}
            >
              <CircleIcon
                sx={{
                  // backgroundColor: Colors.palette.secondary.lightGrey,
                  fontSize: "200px",
                  // color: Colors.palette.secondary.lightGrey,
                  borderRadius: "60%",
                  // border: `2px solid ${Colors.palette.secondary.main}`,
                  position: "relative",
                }}
              />
            </Box>
            {loading ? (
              <Typography>Loading</Typography>
            ) : (
              <form style={formStyle} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={{ margin: "15px", color: "red" }}>
                      {userData.firstName} {userData.surName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.mobileNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.alternateNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.userName}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Address
                      <br />
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.address && userData.address.locality}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.address && userData.address.city}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.address && userData.address.district}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.address && userData.address.state}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{ margin: "15px" }}>
                      {userData.address && userData.address.pincode}
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile;
