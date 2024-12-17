import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import { Typography, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Successfull from "@mui/icons-material/ThumbUp";
import Unsuccessfull from "@mui/icons-material/ThumbDown";
import Request from "@mui/icons-material/BookmarkAdd";
import Active from "@mui/icons-material/BookmarkAdded";
import Declined from "@mui/icons-material/BookmarkRemove";
import EditIcon from "@mui/icons-material/Create";
import CreateIcon from "@mui/icons-material/AddCircle";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import Logo from "../assests/images/Logo.png";

const drawerWidth = 240;

function AdDash(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openDashboard, setopenDashboard] = React.useState(false);

  const [openPayment, setopenPayment] = React.useState(false);
  const [openUsers, setopenUsers] = React.useState(false);
  const [openEditSupervisor, setopenEditSupervisor] = React.useState(false);
  const [openService, setopenService] = React.useState(false);

  const [selectedPaymentOption, setSelectedPaymentOption] =
    React.useState(null);
  const [selectedUserOption, setSelectedUserOption] = React.useState(null);
  const [editSupervisorOption, setEditSupervisorOption] = React.useState(null);
  const [openServiceOption, setServiceOption] = React.useState(null);

  const handleDashboardClick = () => {
    setopenDashboard(!openDashboard);
  };

  const handlePaymentClick = () => {
    setopenPayment(!openPayment);
  };

  const handleUserClick = () => {
    setopenUsers(!openUsers);
  };

  const handleServiceClick = () => {
    setopenService(!openService);
  };

  const handleSupervisorClick = () => {
    setopenEditSupervisor(!openEditSupervisor);
  };

  const handlePaymentOptionClick = (option) => {
    setSelectedPaymentOption(selectedPaymentOption);
  };

  const handleUserOptionClick = (option) => {
    setSelectedUserOption(selectedUserOption);
  };

  const handleEditSupervisorClick = (option) => {
    setEditSupervisorOption(editSupervisorOption);
  };

  const handleServiceOptionClick = (option) => {
    setServiceOption(openServiceOption);
  };

  const drawer = (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <List sx={{ marginTop: "30%" }}>
        <NavLink to="/admindashboard" style={{ textDecoration: "none" }}>
          <ListItem
            key="dashboard"
            disablePadding
            onClick={handleDashboardClick}
            sx={{
              // color: Colors.palette.secondary.main,
              // backgroundColor: Colors.palette.primary.main,
              // "&:hover": {
              //   color: Colors.palette.primary.main,
              //   backgroundColor: Colors.palette.secondary.main,
              // },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GridViewOutlinedIcon
                  sx={{
                    padding: "2px",
                    // color: Colors.palette.primary.main,
                    // backgroundColor: Colors.palette.secondary.main,
                    borderRadius: "50%",
                    // border: `2px solid ${Colors.palette.secondary.main}`,
                  }}
                />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* ================ Payment ================ */}

        <ListItem
          key="payment"
          disablePadding
          onClick={handlePaymentClick}
          sx={{
            // color: Colors.palette.secondary.main,
            // backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              // color: Colors.palette.primary.main,
              // backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceRoundedIcon
                sx={{
                  padding: "2px",
                  // color: Colors.palette.primary.main,
                  // backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  // border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Payment" />
            {openPayment ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon
                sx={{ fontSize: "16px", marginLeft: "4rem" }}
              />
            )}
          </ListItemButton>
        </ListItem>

        {openPayment && (
          <List component="div" disablePadding>
            <NavLink
              to="/adminpaysuccessful"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="successful" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() =>
                    handlePaymentOptionClick("Successful Payments")
                  }
                >
                  <ListItemIcon>
                    <Successfull
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Successful Payments" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              to="/adminpayunsucessful"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="unsuccessful" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() =>
                    handlePaymentOptionClick("Unsuccessful Payments")
                  }
                >
                  <ListItemIcon>
                    <Unsuccessfull
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>

                  <ListItemText primary="Unsuccessful Payments" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}

        {/* ================ Users ================ */}

        <ListItem
          key="users"
          disablePadding
          onClick={handleUserClick}
          sx={{
            // color: Colors.palette.secondary.main,
            // backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              // color: Colors.palette.primary.main,
              // backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltOutlinedIcon
                sx={{
                  padding: "2px",
                  // color: Colors.palette.primary.main,
                  // backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  // border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Users" />
            {openUsers ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
            )}
          </ListItemButton>
        </ListItem>
        {openUsers && (
          <List component="div" disablePadding>
            <NavLink to="/adminuserrequest" style={{ textDecoration: "none" }}>
              <ListItem key="request" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleUserOptionClick("Request")}
                >
                  <ListItemIcon>
                    <Request
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Request" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/adminuseractive" style={{ textDecoration: "none" }}>
              <ListItem key="activeusers" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleUserOptionClick("Active Users")}
                >
                  <ListItemIcon>
                    <Active
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Active Users" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/adminuserinactive" style={{ textDecoration: "none" }}>
              <ListItem key="inactiveusers" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleUserOptionClick("Inactive Users")}
                >
                  <ListItemIcon>
                    <Declined
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Inactive Users" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}

        {/* ================ Services ================ */}
        <ListItem
          key="service"
          disablePadding
          onClick={handleServiceClick}
          sx={{
            // color: Colors.palette.secondary.main,
            // backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              // color: Colors.palette.primary.main,
              // backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MiscellaneousServicesIcon
                sx={{
                  padding: "2px",
                  // color: Colors.palette.primary.main,
                  // backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  // border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openService ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
            )}
          </ListItemButton>
        </ListItem>
        {openService && (
          <List component="div" disablePadding>
            <NavLink to="/adminallservice" style={{ textDecoration: "none" }}>
              <ListItem key="allservices" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleServiceOptionClick("All Services")}
                >
                  <ListItemIcon>
                    <ChecklistRtlIcon
                      sx={{
                        fontSize: "18px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="All Services" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              to="/aminrequestedservice"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="requestservices" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleServiceOptionClick("Request Services")}
                >
                  <ListItemIcon>
                    <AddIcon
                      sx={{
                        fontSize: "18px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Requested Services" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              to="/adminacceptservice"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="acceptedservices" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleServiceOptionClick("Accepted Services")}
                >
                  <ListItemIcon>
                    <CheckIcon
                      sx={{
                        fontSize: "18px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Accepted Services" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              to="/admindeniedservice"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="deniedusers" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleServiceOptionClick("Denied Services")}
                >
                  <ListItemIcon>
                    <ClearIcon
                      sx={{
                        fontSize: "18px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                        fontWeight: "600",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Denied Services" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}

        {/* ================ Supervisor ================ */}

        <ListItem
          key="supervisor"
          disablePadding
          onClick={handleSupervisorClick}
          sx={{
            // color: Colors.palette.secondary.main,
            // backgroundColor: Colors.palette.primary.main,
            "&:hover": {
              // color: Colors.palette.primary.main,
              // backgroundColor: Colors.palette.secondary.main,
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlinedIcon
                sx={{
                  padding: "2px",
                  // color: Colors.palette.primary.main,
                  // backgroundColor: Colors.palette.secondary.main,
                  borderRadius: "50%",
                  // border: `2px solid ${Colors.palette.secondary.main}`,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Supervisor" />
            {openEditSupervisor ? (
              <ExpandLess />
            ) : (
              <ArrowForwardIosIcon
                sx={{
                  fontSize: "16px",
                  marginLeft: "1rem",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
        {openEditSupervisor && (
          <List component="div" disablePadding>
            <NavLink
              to="/adminallsupervisor"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="allsupervisoroption" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleEditSupervisorClick("All Supervisor")}
                >
                  <ListItemIcon>
                    <EditIcon
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="All Supervisor" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              to="/admincreatesupervisor"
              style={{ textDecoration: "none" }}
            >
              <ListItem key="createsupervisoroption" disablePadding>
                <ListItemButton
                  sx={{
                    // color: Colors.palette.secondary.main,
                    "&:hover": {
                      // color: Colors.palette.primary.main,
                      // backgroundColor: Colors.palette.background.lightBlue,
                    },
                  }}
                  onClick={() => handleEditSupervisorClick("Create Supervisor")}
                >
                  <ListItemIcon>
                    <CreateIcon
                      sx={{
                        fontSize: "16px",
                        // color: Colors.palette.secondary.main,
                        marginLeft: "5px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Create Supervisor" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // background: Colors.palette.primary.darkBlue,
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
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
                  marginTop: "15px",
                  width: "150px",
                  maxWidth: "100%",
                  height: "50px",
                }}
              />
            </NavLink>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                // backgroundColor: Colors.palette.secondary.lightBlue,
                borderRadius: "8px",
              }}
            >
              Profile
              <ArrowForwardIosIcon
                sx={{ fontSize: "12px", marginLeft: ".2rem" }}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default AdDash;
