import React, { useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, InputAdornment, TextField, useTheme } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link, NavLink, useLocation } from "react-router-dom";
import Wave from "react-wavify";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../assests/images/Newlogocar.png";
import styled from 'styled-components';
import AppTheme from "../themes/AppTheme";

const Footer = ({ footerRef }) => {
  const { palette: { primary, secondary, info, common } } = useTheme()

 

  const StyledWave = styled(Wave)
    `display: flex;
  margin-top: 100px;
  border-bottom: 1px solid ${(props) => info.main};`

    const handleCall = () => {
    window.open("tel:+012022588234");
  };

  return (

  
    <>
     <Wave
  fill={info.main}
  paused={false}
  style={{
    display: "flex",
    marginTop: 50,
    borderBottom: `1px solid ${info.main}`,
  }}
  options={{
    height: 12,
    speed: 0.5,
    points: 3,
  }}
/>


      <Box
        ref={footerRef}
        sx={{
          bgcolor: 'info.main',
          width: "100%",
          overflow: "hidden",
          color: 'common.white'

        }}

      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={6} md={3} sx={{
            }}>
              <img
                src={Logo}
                alt=""
                style={{
                  width: "200px",
                  padding: "2px",
                }}
              />
              <Typography sx={{fontSize: "12px" }}>
                Our premier car wash service center in Noida <br />
                offers an unparalleled car cleaning experience <br />
                with three comprehensive packages: Routine <br />
                clean, Dry clean, and Deep clean. Our cutting-
                <br />
                edge technology and skilled staff ensure top-
                <br />
                notch results for every vehicle
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2%",
                  color: 'common.white',
                }}
              >
                <CopyrightIcon sx={{ mr: 1, fontSize: "18px" }} /> 2021 Car Wash. All Rights Reserved
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" gutterBottom sx={{
                marginTop: "5%",
              }}>
                <b> PAGES</b>
              </Typography>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: {
                      xs: "2%",
                      sm: "11%",
                    },
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Services
                </Typography>
              </NavLink>
              <NavLink to="/aboutus" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  About Us
                </Typography>
              </NavLink>
              <NavLink to="/contactus" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Contact Us
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" sx={{
                color: 'common.white',
                marginTop: '5%'
              }}>
                <b> CARS</b>
              </Typography>
              <NavLink to="/ourservices" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: {
                      xs: "2%",
                      sm: "11%",
                    },
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  HatchBack
                </Typography>
              </NavLink>
              <NavLink to="/ourservices" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Sedan
                </Typography>
              </NavLink>
              <NavLink to="/ourservices" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  SUV
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" sx={{

                color: 'common.white',
                marginTop: '5%'
              }}>
                <b>SERVICES </b>
              </Typography>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    marginTop: {
                      xs: "2%",
                      sm: "11%",
                    },
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Routine Clean
                </Typography>
              </NavLink>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Dry Clean
                </Typography>
              </NavLink>
              <NavLink to="/services" style={{ textDecoration: "none", cursor: "pointer" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: 'common.white',
                    "&:hover": { fontSize: 15, opacity: 0.75 },
                  }}
                >
                  Deep Clean
                </Typography>
              </NavLink>
            </Grid>

            <Grid item xs={12} sm={6} md={3} marginBottom={5}>

             
            <Button
              component={Link}
              to={'/contactus'}
                variant="body2"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  background:AppTheme.palette.common.white,
                  color:AppTheme.palette.primary.dark,
                 '&:hover':{
                     background:AppTheme.palette.primary.dark,
                     color:AppTheme.palette.common.white,
                 }

                }}
              >
               Contact Us
              </Button>
               <Typography
               mt={2}
                variant="body2"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  color: '#fff',
                  cursor:'pointer'
                }}
                 onClick={handleCall}
              >
                012022588234
              </Typography>


               {/*  <TextField
                placeholder="Type Your Email"
                type="text"
                sx={{ mt: "5%" }}
                variant="outlined"
                InputProps={{
                  sx: {
                    height: 38,
                    backgroundColor: "white",
                    width: "100%",
                    border: '1px solid #fff' 
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          border: '1px solid #fff',
                          backgroundColor: 'primary.main',
                          height: 37,
                          color: "white",
                          "&:hover": { color: "white", },
                          position: "relative",
                          left: 14,
                        }}
                      >
                        <SendIcon sx={{
                          fontSize: 20,
                          color: '#fff'


                        }} />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              /> */}

              <Typography
                variant="body2"
                gutterBottom
               
              >
                wowkaar@info.com
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
               
              >
                Noida, Delhi NCR, UP
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                mt={5}
               
              >
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <InstagramIcon
                    sx={{
                      color: 'common.white',
                    }}
                  />
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <FacebookOutlinedIcon
                    sx={{
                      marginLeft: "10%",
                      color: 'common.white',
                    }}
                  />{" "}
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <YouTubeIcon
                    sx={{
                      marginLeft: "10%",
                      color: 'common.white',
                    }}
                  />{" "}
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <TwitterIcon
                    sx={{
                      marginLeft: "10%",
                      color: 'common.white',
                    }}
                  />
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );

};

export default Footer;
