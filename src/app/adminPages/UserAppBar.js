import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Tab, styled, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComp from "../partials/Drawer"
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assests/images/Newlogocar.png";
import { Link } from "react-router-dom/dist";
import IconButton from '@mui/material/IconButton';
import { AccountCircle, Dashboard, Payment, Shop } from '@mui/icons-material';
import SignIn from "../pages/users/auth/SignIn";
import { Avatar, Card, CardContent, Menu, MenuItem, Paper, Stack, Tooltip, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { currentuser, getUserProfile, userLogout } from "../store/slices/AuthSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab";
import ViewProfile from "../pages/users/auth/ViewProfile";
import { baseImagepath } from "../utils/Constant";

const useStyles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const UserAppBar = ({ handleContactUsClick }) => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { palette: { primary, secondary, info, common } } = useTheme()


    const [open, setOpen] = React.useState(false);


    const { Loading, UserInfo, Status, userData } = useSelector((state) => state.AUTH)

    console.log("userData", userData?.data?.profileImage)

    const imagepath = `${baseImagepath}${userData?.data?.profileImage}`


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

    function onLogoutHander() {
        dispatch(userLogout())
    }


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleCloseDialoge = () => {
        setOpen(false);
    };


    const dialog = {
        width: "400px", /* Set your desired width */
        height: "300px", /* Set your desired height */
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50 %, -50 %)",
    }

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
                                // component={NavLink}
                                // to="/contactus"
                                onClick={handleContactUsClick}
                                activeClassName="active"
                                size="small"

                                sx={buttonStyle}
                            >
                                Contact Us
                            </Button>


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

                        <Stack direction={'row'} alignItems={'center'}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >


                                <Avatar variant='circular'
                                    sx={{ width: 30, height: 30 }}
                                    alt={userData?.data?.name}
                                    src={imagepath}

                                />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Stack sx={{ width: 300, padding: 3, rowGap: 2 }}>
                                    <Card sx={{ justifyContent: 'center', display: "flex" }}>
                                        <CardContent>
                                            <Stack rowGap={2} alignItems={'center'}>
                                                <Tooltip
                                                    title={userData?.data?.email}
                                                >
                                                    <IconButton sx={{ p: 2 }}>
                                                        <Avatar variant='circular'
                                                            sx={{ width: 100, height: 100 }}
                                                            alt={userData?.data?.name}
                                                            src={imagepath}

                                                        />


                                                    </IconButton>
                                                </Tooltip>
                                                <Typography variant='body2'>
                                                    {userData?.data?.email}
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                    <Box sx={{}}>
                                        <MenuItem onClick={handleClickOpen}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My Subscriptions</MenuItem>
                                        <MenuItem onClick={handleClose}>History</MenuItem>

                                    </Box>

                                    <LoadingButton
                                        onClick={onLogoutHander}
                                        variant='contained' sx={{ bgcolor: 'error.main' }}
                                        loading={Loading ? true : false}

                                    >
                                        Logout

                                    </LoadingButton>

                                </Stack>
                            </Menu>
                        </Stack>


                        <DrawerComp />
                    </Toolbar>
                </AppBar>
            </Box>

            <BootstrapDialog

                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullScreen


            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    My Profile
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseDialoge}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Information" value="1" />
                                <Tab label="Edit" value="2" />
                                <Tab label="My Plans" value="3" />

                            </TabList>
                        </Box>
                        <TabPanel value="1"><ViewProfile /></TabPanel>
                        <TabPanel value="2"><SignIn /></TabPanel>
                        <TabPanel value="3">My Plans</TabPanel>

                    </TabContext>
                </Box>

            </BootstrapDialog >
        </>
    );
};

export default UserAppBar;
