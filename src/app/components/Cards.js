import React, { useEffect } from "react";
import { Box, Button, Container, Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import BookingCard from "./card/Bookingcard";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import AppTheme from "../themes/AppTheme";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicePackage } from "../store/slices/AuthSlice";

const Cards = () => {
  const dispatch = useDispatch();

  const { getservicepackage, getinfoservice } = useSelector((state) => state?.AUTH || {});
  useEffect(() => {
    dispatch(getAllServicePackage());
  }, [getinfoservice]);

  const filteredData = getservicepackage?.data.filter(e => {
    if (getinfoservice && getinfoservice.length > 0) {
      return e?.cleaningtype === getinfoservice[0]?.label && e?.cartype === getinfoservice[1]?.label;
    } else {
      return e?.cartype === "XUV/ LUX" && e?.cleaningtype == "Routine Cleaning";

    }
  }) || [];


  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <Grid container item spacing={2} sx={{ justifyContent: "center" }}>
            {filteredData.map((e, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <BookingCard>
                  <Typography variant="h5" sx={{ marginTop: "5%", textAlign: "center", color: AppTheme.palette.primary.main }}>
                    <b>{e.plantype}<br />₹ {e.price}</b>
                  </Typography>
                  <Typography>
                    <List>
                      {e.message.map((ep, idx) => (
                        <ListItem key={idx}>
                          <DoneAllOutlinedIcon />
                          <ListItemText
                            style={{ marginLeft: '15px', color: 'Black' }}
                            primary={ep} />
                        </ListItem>
                      ))}
                    </List>
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button to='/servicelocation' component={Link} variant="contained" sx={{
                      borderRadius: "22px",
                      background: AppTheme.palette.primary.main,
                      height: "55px",
                      width: "150px",
                      color: '#fff',
                      "&:hover": {
                        backgroundColor: '#fff',
                        color: AppTheme.palette.primary.main,
                      },
                    }}>
                      Book now &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                    </Button>
                  </Box>
                </BookingCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Cards;
