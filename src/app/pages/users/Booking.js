import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import Nav from "../../partials/Nav";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Bookingcard from '../../components/Card/Bookingcard';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import Cancel from "../../components/Button/Cancel";


const Booking = () => {
  return (
    <>
      <Nav />

      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBlock: "2rem",
            // color: Colors.palette.primary.main,
          }}
        >
          Bookings
        </Typography>
      </Box>

      <Container sx={{ sm: "5" }}>
        <Grid container item spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "20px", bgcolor: " #FFFFFF" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: " #013C6B",
                  }}
                >
                  <b>
                    {" "}
                    Routine Clean
                    <br />₹ 499
                  </b>
                </Typography>

                {/* <Bookingcard/> */}
                <Typography>
                
                   <List>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}}primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Wiping down interior surface, including dashboard and door panels." />
                  </ListItem>
                </List>
                </Typography>{" "}
                <br /> <br />
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Typography>
                    {" "}
                    <CalendarMonthIcon />
                    <b>29-09-2023</b>
                  </Typography>
                  <Typography>
                    {" "}
                    <AccessAlarmIcon />
                    <b>2:00 PM</b>
                  </Typography>
                </Box>{" "}
                <br /> <br />
                <Typography>
                  <LocationOnIcon /> Lorem ipsum dolor sit amet At laboriosam
                  maiores
                </Typography>
                <Typography align="center">
                  {/* <Button
                      variant="outlined" size="large" sx={{backgroundColor: Colors.palette.primary.main, color: Colors.palette.primary.color, marginBlock: "3rem"}}>
                    sx={{
                      color:"white",
                      borderRadius: "22px",
                      bgcolor: "#353535",
                      height: "55px",
                      width: "150px",
                      marginInline: "30%",
                    }}
                  >
                    cancel
                  </Button> */}
                  <Cancel/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "20px", bgcolor: "#FFFFFF" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: " #013C6B",
                  }}
                >
                  <b>
                    {" "}
                    Routine Clean
                    <br />₹ 499
                  </b>
                </Typography>
                <Typography>
                
                   <List>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Wiping down interior surface, including dashboard and door panels." />
                  </ListItem>
                </List>
                </Typography>
                <br /> <br />
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Typography>
                    {" "}
                    <CalendarMonthIcon />
                    <b>29-09-2023</b>
                  </Typography>
                  <Typography>
                    {" "}
                    <AccessAlarmIcon />
                    <b>2:00 PM</b>
                  </Typography>
                </Box>{" "}
                <br /> <br />
                <Typography>
                  <LocationOnIcon /> Lorem ipsum dolor sit amet At laboriosam
                  maiores
                </Typography>
                <Typography align="center">
                  {/* <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: "22px",
                      bgcolor: "#353535",
                      height: "55px",
                      width: "150px",
                      marginInline: "30%",
                    }}
                  >
                    sx={{backgroundColor: Colors.palette.primary.main, color: Colors.palette.primary.color, marginBlock: "3rem"}}>
                    cancel
                  </Button> */}
                  <Cancel/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "20px", bgcolor: "#FFFFFF" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: " #013C6B",
                  }}
                >
                  <b>
                    {" "}
                    Routine Clean
                    <br />₹ 499
                  </b>
                </Typography>
                <Typography>
                
                   <List>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Exterior Wash, removing dust and grime." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Interior Vacuuming, dusting seats and carpets and floor mats." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Cleaning and Polishing all windows and mirrors." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Cleaning and Shining tires and rims." />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />{" "}
                    <ListItemText  style={{marginLeft:'15px'}} primary="Wiping down interior surface, including dashboard and door panels." />
                  </ListItem>
                </List>
                </Typography>{" "}
                <br /> <br />
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Typography>
                    {" "}
                    <CalendarMonthIcon />
                    <b>29-09-2023</b>
                  </Typography>
                  <Typography>
                    {" "}
                    <AccessAlarmIcon />
                    <b>2:00 PM</b>
                  </Typography>
                </Box>{" "}
                <br /> <br />
                <Typography justifyContent={"center"}>
                  <LocationOnIcon />
                  Lorem ipsum dolor sit amet At laboriosam maiores
                </Typography>
                <Typography align="center">
                  {/* <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: "22px",
                      bgcolor: "#353535",
                      height: "55px",
                      width: "150px",
                      marginInline: "30%",
                    }}
                  >
                    sx={{backgroundColor: Colors.palette.primary.main, color: Colors.palette.primary.color, marginBlock: "3rem"}}
                    cancel
                  </Button> */}
                  <Cancel/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Booking;
