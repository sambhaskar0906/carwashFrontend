import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Grid, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComp from "../../partials/Drawer.js";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assests/images/Newlogocar.png";
import { Link } from "react-router-dom/dist";
import PublicAppDrawer from "../user/PublicAppDrawer.js";
import Login from "../../pages/users/auth/Login.js";



const PublicAppBar = ({ handleContactUsClick }) => {
    const { palette: { primary, secondary, info, common } } = useTheme()

    const location = useLocation();



    const buttonStyle = {
        backgroundColor: 'transparent',
        color: '#fff',
        "&:hover": {
            border: '2px solid #fff',
            color: '#fff',
            fontWeight: 'bold'
        },
        "&.active": {
            backgroundColor: 'common.white',
            color: 'common.black',
            fontWeight: 'bold'

        },
    };

    return (
        <>
            <Box sx={{}}>
                <AppBar
                    position="fixed"
                    sx={{
                        p: 1,
                        background: `linear-gradient(90deg, ${primary.dark} 0%, ${primary.dark} 100%)`,


                    }}
                >
                    <Toolbar sx={{

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
                                size="small"
                                sx={buttonStyle}
                            >
                                Home
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
                                to="/services"
                                activeClassName="active"
                                size="small"

                                sx={buttonStyle}
                            >
                                Services
                            </Button>

                            <Button
                                component={NavLink}
                                to="/Gallery"
                                activeClassName="active"
                                size="small"

                                sx={buttonStyle}
                            >


                                Gallery

                            </Button>




                            <Button
                                size="small"
                                onClick={handleContactUsClick}
                                sx={buttonStyle}
                            >
                                Contact Us
                            </Button>

                            <Button
                                component={NavLink}
                                to="/login"
                                activeClassName="active"
                                size="small"

                                sx={buttonStyle}
                            >
                                Login

                            </Button>


                            {/* <Button

                                component={NavLink}
                                to="/registerpage"
                                activeClassName="active"
                                size="small"

                                sx={buttonStyle}
                            >


                                Register

                            </Button> */}

                            {/* <Button

                                component={NavLink}
                                to="/Whyus"
                                activeClassName="active"
                                size="small"

                                sx={buttonStyle}
                            >


                                Why Us

                            </Button> */}




                        </Box>
                        <PublicAppDrawer />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default PublicAppBar;
