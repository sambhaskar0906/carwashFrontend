import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComp from "./Drawer";
import { NavLink } from "react-router-dom";

import Logo from "../assests/images/Logo.png";
import { Link } from "react-router-dom/dist";

// import { Link } from "@mui/material";

const Nav = () => {

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    "&:hover": {
      border: '2px solid #fff',
      color: '#fff',
      fontWeight: 'bold'
    },
    "&.active": {
      // backgroundColor: Colors.palette.primary.main,
      // color: Colors.palette.secondary.black,
    },
  };
  return (
    <>
      <Box sx={{}}>
        <AppBar
          position="fixed"
          sx={{
            // background: `rgb(0, 0, 0)`,
            background: `linear-gradient(90deg,rgba(0, 62, 106, .8)0%,rgba(228, 26, 0, 0.8)100%)`,
            // backgroundColor: 'transparent',
            // boxShadow: 'none',
            // borderBottom: '1px solid rgba(255, 255, 255, 0.12)', // Optional: Add a border for better visibility

          }}
        >
          <Toolbar sx={{
            // backgroundImage: 'linear-gradient(to right, #ff8a00, #da1b60)', // Customize the gradient colors
            // color: 'whitesmoke'

          }}>
            <Grid variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  // color: Colors.palette.primary.main,

                }}
              >


                <img
                  src={Logo}
                  alt=""
                  style={{
                    alignSelf: "center",
                    margin: 'auto',
                    width: "150px",
                    maxWidth: "100%",
                    height: "50px",
                  }}
                />



              </NavLink>
            </Grid>

            <Box
              sx={{
                justifyContent: "center",
                gap: { md: "30px" },
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Button
                component={NavLink}
                to="/"
                exact
                activeClassName="active"
                size="small"
                sx={buttonStyle}
              >
                Home
              </Button>

              <Button
                component={NavLink}
                to="/services"
                activeClassName="active"
                size="small"

                sx={buttonStyle}
              >
                Services
              </Button>

              <Button
                component={NavLink}
                to="/aboutus"
                activeClassName="active"
                size="small"

                sx={buttonStyle}
              >
                About Us
              </Button>
              <Button
                component={NavLink}
                to="/contactus"
                activeClassName="active"
                size="small"

                sx={buttonStyle}
              >
                Contact Us
              </Button>
              <Button
                to="/login"
                size="small"
                LinkComponent={Link}

                sx={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  "&:hover": {
                    border: '2px solid #fff',
                    color: '#fff',
                    fontWeight: 'bold'
                  },
                  cursor: "pointer",

                }}
              >
                Login

              </Button>

              <Button
                to="/registerpage"
                size="small"
                LinkComponent={Link}
                sx={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  cursor: "pointer",
                  "&:hover": {
                    border: '2px solid #fff',
                    color: '#fff',
                    fontWeight: 'bold'
                  },
                }}
              >


                Register

              </Button>

              <Button
                to="/Whyus"
                size="small"
                LinkComponent={Link}
                sx={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  cursor: "pointer",
                  "&:hover": {
                    border: '2px solid #fff',
                    color: '#fff',
                    fontWeight: 'bold'
                  },
                }}
              >


                Why Us

              </Button>



              <Button
                to="/Gallery"
                size="small"
                LinkComponent={Link}
                sx={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  cursor: "pointer",
                  "&:hover": {
                    border: '2px solid #fff',
                    color: '#fff',
                    fontWeight: 'bold'
                  },
                }}
              >


                Gallery

              </Button>


            </Box>
            <DrawerComp />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
