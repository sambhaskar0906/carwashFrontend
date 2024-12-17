import React from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  List,
  ListItemText,
  Typography,
  ListItem

} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import SubCard from "../../components/card/Subscribecard";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Subscribe = () => {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", marginTop: "5%" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={4}>
              <SubCard 
              // shadowColor={Colors.palette.background.lightGreen}
              // sx={{
              //   borderRadius: "20px",
              //   background: Colors.palette.primary.main,
              //   boxShadow:'green'
              // }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: '#E41A00',
                    }}
                  >
                    <b> Basic </b>
                    <br />₹ 1199 / month
                  </Typography>
                  <Typography sx={{ marginTop: "8%" }}>

                    <List >
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }}>Exterior Wash, removing dust and grime.</ListItemText> <br />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Cleaning and Polishing all windows and mirrors." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary="Cleaning and Shining tires and rims.." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary="Cleaning and Shining tires and rims." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                    </List>
                  </Typography>

                  <Typography sx={{ textAlign: "left", marginLeft: "4%", color: 'Black' }}>
                    Expiring on: 04/10/2023
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5%",
                    }}
                  >
                    <Button
                      to='/servicelocation'
                      LinkComponent={Link}
                      variant="contained"
                      sx={{
                        borderRadius: "22px",
                        background: '#E41A00',
                        height: "55px",
                        width: "150px",
                        color: '#fff',
                        "&:hover": {
                          backgroundColor: '#fff',
                          color: '#E41A00',
                        },
                      }}
                    >




                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />

                    </Button>
                  </Box>
                </CardContent>
              </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SubCard 
              // shadowColor={Colors.palette.secondary.yellow}
              // sx={{
              //   borderRadius: "20px",
              //   // background: Colors.palette.primary.main,

              // }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: '#E41A00',
                    }}
                  >
                    <b>{/* hlo */} Gold </b> <br />₹ 1499 / month
                  </Typography>
                  <Typography sx={{ marginTop: "8%" }}>
                    <List>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }}>Exterior Wash, removing dust and grime.</ListItemText> <br />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Cleaning and Polishing all windows and mirrors." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary="Cleaning and Shining tires and rims.." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary="Cleaning and Shining tires and rims." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                    </List>
                  </Typography>

                  <Typography sx={{ textAlign: "left", marginLeft: "4%", color: 'Black' }}>
                    Expiring on: 04/10/2023
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5%",
                    }}
                  >
                    <Button
                      to='/servicelocation'
                      LinkComponent={Link}
                      variant="contained"
                      sx={{
                        borderRadius: "22px",
                        background: '#E41A00',
                        height: "55px",
                        width: "150px",
                        color: '#fff',
                        "&:hover": {
                          backgroundColor: '#fff',
                          color: '#E41A00',
                        },
                      }}
                    >




                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />

                    </Button>
                  </Box>
                </CardContent>
              </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SubCard
              //  shadowColor={Colors.palette.secondary.darkPurple}
              // sx={{
              //   borderRadius: "20px",
              //   background: Colors.palette.primary.main,
              // }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      color: '#E41A00',
                    }}
                  >
                    <b> Platinum </b> <br />₹ 2199 / month
                  </Typography>
                  <Typography sx={{ marginTop: "8%" }}>
                    <List>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }}>Exterior Wash, removing dust and grime.</ListItemText> <br />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Cleaning and Polishing all windows and mirrors." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary="Cleaning and Shining tires and rims.." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary="Cleaning and Shining tires and rims." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                      <ListItem>
                        <DoneAllOutlinedIcon />{" "}
                        <ListItemText style={{ marginLeft: '15px', color: 'Black' }} primary=" Wiping down interior surface, including dashboard and
                        door panels." />
                      </ListItem>
                    </List>
                  </Typography>

                  <Typography sx={{ textAlign: "left", marginLeft: "4%", color: 'Black' }}>
                    Expiring on: 04/10/2023
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5%",
                    }}
                  >
                    <Button
                      to='/servicelocation'
                      LinkComponent={Link}
                      variant="contained"
                      sx={{
                        borderRadius: "22px",
                        background: '#E41A00',
                        height: "55px",
                        width: "150px",
                        color: '#fff',
                        "&:hover": {
                          backgroundColor: '#fff',
                          color: '#E41A00',
                        },
                      }}
                    >




                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />

                    </Button>
                  </Box>
                </CardContent>
              </SubCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Subscribe;
