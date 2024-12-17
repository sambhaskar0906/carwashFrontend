import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, Card, CardContent, Dialog, Menu, MenuItem, Paper, Select, Stack, Tab, Tooltip, styled, useMediaQuery, useTheme } from '@mui/material';
import { AccessibilitySharp, AccountCircle, AdminPanelSettingsSharp, CurtainsClosedSharp, Dashboard, DesignServicesRounded, ListSharp, LocalActivityTwoTone, NotificationsActiveOutlined, Payment, PaymentSharp, RequestPageSharp, Shop, SupervisorAccountSharp, TvOffOutlined, UsbOffRounded } from '@mui/icons-material';
// import { AuthContext } from './AuthContext';
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AppTheme from '../themes/AppTheme';
import { useDispatch, useSelector } from 'react-redux';
import { currentuser, getUserProfile, userLogout } from "../store/slices/AuthSlice";
import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import ViewProfile from '../pages/users/auth/ViewProfile';
import SignIn from '../pages/users/auth/SignIn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { baseImagepath } from '../utils/Constant';






export default function AdminAppDrawer({ children }) {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { logoutloading, UserInfo, Status, userData } = useSelector((state) => state.AUTH)
    const imagepath = `${baseImagepath}${userData?.data?.profileImage}`
    console.log("new image path", imagepath)


    const [operation, setOperation] = useState(false)
    const [copen, csetOpen] = React.useState(false);
    const [dopen, dsetOpen] = React.useState(false);
    const [eopen, esetOpen] = React.useState(false);
    const [fopen, fsetOpen] = React.useState(false);
    const [openDailog, setOpenDailog] = React.useState(false);
    const [value, setValue] = React.useState('1');
    const [anchorElx, setAnchorElx] = React.useState(null);

    function onLogoutHander() {
        dispatch(userLogout())
        navigate('/login')
    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleClick = () => {
        csetOpen(!copen);
    };

    const secondHandleClick = () => {
        dsetOpen(!dopen);
    };
    const thirdHandleClick = () => {
        esetOpen(!eopen);
    };

    const fourthHandleClick = () => {
        fsetOpen(!fopen);
    };

    const handleClickOpenDialog = () => {
        setOpenDailog(true);
    };
    const handleCloseDialog = () => {
        setOpenDailog(false);
    };

    const openx = Boolean(anchorElx);
    const handleClickx = (event) => {
        setAnchorElx(event.currentTarget);
    };
    const handleClosex = () => {
        setAnchorElx(null);
    };
    var buttonStylex = {
        backgroundColor: AppTheme.palette.primary.dark,
        color: '#fff',
        fontWeight: 'bold',
        "&:hover": {
            border: '2px solid #fff',
            color: '#fff',
            fontWeight: 'bold'
        },
        // "&.active": {
        //     border: '2px solid #fff',
        //     color: '#fff',
        //     fontWeight: 'bold'

        // },
    };

    var buttonStyle = {

        border: '2px solid #fff',
        color: '#fff',
        fontWeight: 'bold'

    }


    const opertionHandle = () => {

        setOperation(true)



    };
    const adminHandle = () => {

        setOperation(false)

    };


    console.log(operation)




    const drawerWidth = 240;
    const { breakpoints, shape: { borderRadius } } = useTheme()
    const [open, setOpen] = React.useState(true);
    const location = useLocation()


    const laptopSize = useMediaQuery(breakpoints.down('xl'))
    const isLarge = useMediaQuery(breakpoints.up('xl'))
    const matchUpMd = useMediaQuery(breakpoints.up('lg'))

    // Close the drawer when the screen size is tablet
    React.useEffect(() => {
        if (laptopSize) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [laptopSize])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const createHandleMenuClick = (menuItem) => {
        return () => {
            console.log(`Clicked on ${menuItem}`);
        };
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: AppTheme.palette.primary.dark,


                }}
            >
                <Toolbar sx={{ columnGap: 2 }}>
                    <Stack sx={{ width: '200px' }} direction={'row'} flex={1} columnGap={1} alignItems={'center'} justifyContent={'start'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={open ? handleDrawerClose : handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ textTransform: "uppercase" }} noWrap component="div">
                            Admin
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} flex={1} spacing={2} alignItems={'center'} justifyContent={'center'} sx={{ display: { xs: 'none', md: 'block' } }} >
                        {/* -------------------------------------------------------------------------------- */}

                        <Button
                            component={NavLink}
                            to={'/admindashboard'}
                            size="small"
                            sx={operation ? { ...buttonStyle } : { ...buttonStylex }}
                            onClick={opertionHandle}


                        >
                            User Operation
                        </Button>
                        <Button
                            component={NavLink}
                            to={'/admindashboard'}
                            activeClassName="active"
                            size="small"
                            sx={operation ? { ...buttonStylex } : { ...buttonStyle }}
                            onClick={adminHandle}
                        >
                            Admin Operation
                        </Button>





                    </Stack>
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
                                alt=""
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
                            <Stack sx={{ width: 250, padding: 3, rowGap: 2 }}>
                                <Card sx={{ justifyContent: 'center', display: "flex" }}>
                                    <CardContent>
                                        <Stack rowGap={2} alignItems={'center'}>
                                            <Tooltip
                                                title={userData?.data?.email}
                                            >
                                                <IconButton sx={{ p: 0 }}>
                                                    <Avatar variant='circular'
                                                        sx={{ width: 60, height: 'auto' }}
                                                        alt="Sooraj"
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
                                    <MenuItem onClick={handleClickOpenDialog}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Box>
                                <LoadingButton
                                    onClick={onLogoutHander}
                                    variant='contained' sx={{ bgcolor: 'error.main' }}
                                    loading={logoutloading ? true : false}

                                >
                                    Logout

                                </LoadingButton>

                            </Stack>
                        </Menu>
                    </Stack>
                    {/* ----------------------------------------------------------------------------------------- */}

                    <MoreVertIcon
                        sx={{ cursor: 'pointer', display: { md: 'none', xs: 'block' } }}
                        id="basic-buttonx"
                        aria-controls={openx ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openx ? 'true' : undefined}
                        onClick={handleClickx}

                    />

                    <Menu

                        id="basic-menu"
                        anchorEl={anchorElx}
                        open={openx}
                        onClose={handleClosex}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClosex} > <Button
                            component={NavLink}
                            to={'/admindashboard'}
                            size="small"
                            // sx={operation ? { ...buttonStyle } : { ...buttonStylex }}
                            onClick={opertionHandle}


                        >
                            User Operation
                        </Button></MenuItem>
                        <MenuItem onClick={handleClosex}><Button
                            component={NavLink}
                            to={'/admindashboard'}
                            activeClassName="active"
                            size="small"
                            // sx={operation ? { ...buttonStylex } : { ...buttonStyle }}
                            onClick={adminHandle}
                        >
                            Admin Operation
                        </Button></MenuItem>

                    </Menu>

                </Toolbar>
            </AppBar>
            <BootstrapDialog
                fullScreen
                onClose={handleCloseDialog}
                aria-labelledby="customized-dialog-title"
                open={openDailog}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    My Profile
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog}
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
            </BootstrapDialog>

            <Drawer
                variant={matchUpMd ? 'persistent' : 'temporary'}
                open={open}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                    width: open ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth },
                }}
            >
                <Toolbar />

                <Box sx={{ overflow: 'auto', padding: '20px' }}>
                    <List
                        sx={{
                            // selected and (selected + hover) states
                            '&& .Mui-selected, && .Mui-selected:hover': {
                                bgcolor: AppTheme.palette.primary.dark,
                                // color: 'black',
                                '&, & .MuiListItemIcon-root': {
                                    color: 'background.default',
                                },
                            },
                            // hover states 
                            '& .MuiListItemButton-root:hover': {
                                bgcolor: '',
                                '&, & .MuiListItemIcon-root': {
                                    color: AppTheme.palette.primary.dark,
                                },
                                '&, & .ListItemText-root': {
                                    color: AppTheme.palette.primary.dark,
                                },
                            },

                        }}
                    >


                        <ListItemButton
                            sx={{ borderRadius: borderRadius }}
                            LinkComponent={Link}
                            to='/admindashboard'
                            onClick={() => isLarge ? null : setOpen(false)}
                            selected={location.pathname === '/admindashboard'}

                        >
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} sx={{ marginLeft: '-20px' }} />
                        </ListItemButton>

                        {operation ? <>
                            <ListItemButton onClick={handleClick} sx={{ marginTop: '10px' }}>
                                <ListItemIcon>
                                    <PaymentSharp />
                                </ListItemIcon>
                                <ListItemText primary="Payments" sx={{ marginLeft: '-20px' }} />
                                {copen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={copen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/adminpaysuccessful'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/adminpaysuccessful'}
                                    >
                                        <ListItemIcon>
                                            <CheckOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Successfull Payments" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/unsuccessfullpayments'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/unsuccessfullpayments'}
                                    >
                                        <ListItemIcon>
                                            <ClearOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Unsuccessfull Payments" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItemButton onClick={secondHandleClick} sx={{ marginTop: '10px' }}>
                                <ListItemIcon>
                                    <AdminPanelSettingsSharp />
                                </ListItemIcon>
                                <ListItemText primary="User" sx={{ marginLeft: '-20px' }} />
                                {dopen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={dopen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {/* ============================================================== */}
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/adminuserall'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/adminuserall'}
                                    >
                                        <ListItemIcon>
                                            <LocalActivityTwoTone />
                                        </ListItemIcon>
                                        <ListItemText primary="All Users" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                    {/* ================================================================= */}
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='adminuseractive'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === 'adminuseractive'}
                                    >
                                        <ListItemIcon>
                                            <LocalActivityTwoTone />
                                        </ListItemIcon>
                                        <ListItemText primary="Active Users" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>



                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/adminuserinactive'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/adminuserinactive'}
                                    >
                                        <ListItemIcon>
                                            <TvOffOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="Inactive Users" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                        </> : <>



                            <ListItemButton onClick={thirdHandleClick} sx={{ marginTop: '10px' }}>
                                <ListItemIcon>
                                    <DesignServicesRounded />
                                </ListItemIcon>
                                <ListItemText primary="Services" sx={{ marginLeft: '-20px' }} />
                                {eopen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={eopen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/adminallservice'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/adminallservice'}
                                    >
                                        <ListItemIcon>
                                            <ListSharp />
                                        </ListItemIcon>
                                        <ListItemText primary="All Services" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>

                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/createservice'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/createservice'}
                                    >
                                        <ListItemIcon>
                                            <ListSharp />
                                        </ListItemIcon>
                                        <ListItemText primary="Create Services" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>


                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/adminrequestesservices'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/adminrequestesservices'}
                                    >
                                        <ListItemIcon>
                                            <RequestPageSharp />
                                        </ListItemIcon>
                                        <ListItemText primary="Requested Services" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>


                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/adminacceptedservices'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/adminacceptedservices'}
                                    >
                                        <ListItemIcon>
                                            <AccessibilitySharp />
                                        </ListItemIcon>
                                        <ListItemText primary="Accepted services" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/admindeniedservices'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/admindeniedservices'}
                                    >
                                        <ListItemIcon>
                                            <CurtainsClosedSharp />
                                        </ListItemIcon>
                                        <ListItemText primary="Denied Services" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>


                                </List>
                            </Collapse>


                            <ListItemButton onClick={fourthHandleClick} sx={{ marginTop: '10px' }}>
                                <ListItemIcon>
                                    <SupervisorAccountSharp />
                                </ListItemIcon>
                                <ListItemText primary="Supervisor" sx={{ marginLeft: '-20px' }} />
                                {fopen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={fopen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/addallsupervisor'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/addallsupervisor'}
                                    >
                                        <ListItemIcon>
                                            <CheckOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="All Supervisor" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                    <ListItemButton
                                        sx={{ pl: 2, border: '2px solid #fff', borderRadius: '8px' }}
                                        LinkComponent={Link}
                                        to='/createsupervisor'
                                        onClick={() => isLarge ? null : setOpen(false)}
                                        selected={location.pathname === '/createsupervisor'}
                                    >
                                        <ListItemIcon>
                                            <ClearOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Create Supervisor" sx={{ marginLeft: '-20px' }} />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                        </>}

                    </List>

                </Box>

            </Drawer>

            <Box component="main"
                sx={{
                    flexGrow: 1, p: 3,
                }}
            >
                <Toolbar />

                {children}

            </Box>

        </Box>
    );
}
