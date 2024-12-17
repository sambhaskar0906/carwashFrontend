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
  useTheme
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import OurServices from "../components/OurServices";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import BookingCard from "./card/Bookingcard";
import AppTheme from "../themes/AppTheme";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicePackage } from "../store/slices/AuthSlice";
import { createOrder, getKey } from "../store/slices/paymentSlice";
import { unwrapResult } from "@reduxjs/toolkit";
// import Razorpay from "razorpay";
import red from "../assests/images/red1.png";
import yellow from "../assests/images/yellow1.png";
import blue from "../assests/images/blue1.png";

const Card1 = () => {
  const dispatch = useDispatch()

  const { getcarname, getallcleantype, getservicepackage, UserInfo } = useSelector((state) => state?.AUTH)
  const { dataofcreateorder } = useSelector((state) => state?.PAYMENT)

  var getFilterdObject = []
  getservicepackage?.data?.map((e) => {

    if (e?.cartype == getcarname[0] && e?.cleaningtype == getcarname[1]) {
      var obj = {
        idTrac: e?._id,
        plantypeTrac: e?.plantype,
        messageTrac: e?.message,
        priceTrac: e?.price
      }
      getFilterdObject.push(obj)
    }
  })


  const handleBookNow = async (eve, amount, plan) => {
    let data = {
      amount: amount * 100,
      currency: "INR",
      receipt: "order_wowkaar_1"
    };

    const order = await dispatch(createOrder(data));
    const info = unwrapResult(order);
    console.log("info", info?.data?.id)


    console.log("data of createOrderon frontend page", dataofcreateorder);

    const getkey = await dispatch(getKey());
    const paymentkey = unwrapResult(getkey);
    console.log("key", paymentkey?.key)
    console.log("userinfo", UserInfo?.details?.name?.firstName, "dlkwifhijew", getcarname)





    const options = {

      key: paymentkey?.key,
      amount: info?.data?.amount,
      name: UserInfo?.details?.name?.firstName,
      description: "Test Transaction",
      image: getcarname == "XUV / LUX" ? { blue } : "MUV/ Seddan" ? { yellow } : { red },
      order_id: info?.data?.id,
      callback_url: "http://localhost:4000/v1/payments/paymentverification",
      prefill: {
        name: UserInfo?.details?.name?.firstName,
        email: "gaurav.kumar@example.com",
        contact: 9000090000
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.open();





  }





  useEffect(() => {
    dispatch(getAllServicePackage())
  }, [getcarname])

  return (
    <>
      <OurServices />
      <Container maxWidth={'lg'}>
        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {/*  <Grid item xs={12} sm={12} md={4}>
            <BookingCard>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "5%",
                  textAlign: "center",
                  color: AppTheme.palette.primary.main,
                }}
              >
                <b sx={{
                  color: AppTheme.palette.primary.main,
                }}>

                  Basic
                  <br />₹ 499
                </b>
              </Typography>
              <Typography>
                <List>
                  <ListItem>
                    <DoneAllOutlinedIcon />
                    <ListItemText
                      style={{ marginLeft: '15px', color: 'Black' }}
                      primary="Exterior Wash, removing dust and grime."
                    />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />

                    <ListItemText
                      style={{ marginLeft: '15px', color: 'Black' }}
                      primary="Interior Vacuuming, dusting seats and carpets and floor mats."
                    />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />

                    <ListItemText
                      style={{ marginLeft: '15px', color: 'Black' }}
                      primary="Cleaning and Polishing all windows and mirrors."
                    />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />

                    <ListItemText
                      style={{ marginLeft: '15px', color: 'Black' }}
                      primary="Cleaning and Shining tires and rims."
                    />
                  </ListItem>
                  <ListItem>
                    <DoneAllOutlinedIcon />

                    <ListItemText
                      style={{ marginLeft: '15px', color: 'Black' }}
                      primary="Wiping down interior surfaces, including dashboard and door panels."
                    />
                  </ListItem>
                </List>
              </Typography>{" "}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  to='/servicelocation'
                  LinkComponent={Link}
                  variant="contained"
                  sx={{
                    borderRadius: "22px",
                    background: AppTheme.palette.primary.main,
                    height: "55px",
                    width: "150px",
                    color: '#fff',
                    "&:hover": {
                      backgroundColor: '#fff',
                      color: AppTheme.palette.primary.main,
                    },
                  }}
                >
                  Book now &nbsp;
                  <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
                </Button>
              </Box>

            </BookingCard>
          </Grid> */}
          {getFilterdObject.map((e) => (
            <Grid item xs={12} sm={12} md={4} key={e?.plantypeTrac}>
              <BookingCard>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "5%",
                    textAlign: "center",
                    color: AppTheme.palette.primary.main,
                  }}
                >
                  <b>
                    {e?.plantypeTrac}
                    <br />₹ {e?.priceTrac}
                  </b>
                </Typography>
                <Typography>
                  <List>
                    {e.messageTrac.map((ep, index) => (
                      <ListItem key={index}>
                        <DoneAllOutlinedIcon />
                        <ListItemText
                          style={{ marginLeft: '15px', color: 'Black' }}
                          primary={ep}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button

                    onClick={() => handleBookNow(e?.idTrac, e?.priceTrac, e?.plantypeTrac)}
                    variant="contained"
                    sx={{
                      borderRadius: "22px",
                      background: AppTheme.palette.primary.main,
                      height: "55px",
                      width: "150px",
                      color: '#fff',
                      "&:hover": {
                        backgroundColor: '#fff',
                        color: AppTheme.palette.primary.main,
                      },
                    }}
                  >
                    Book now &nbsp;
                    <ArrowForwardIosIcon sx={{ fontSize: "small" }} />
                  </Button>
                </Box>

              </BookingCard>
            </Grid>
          ))}
        </Grid >

      </Container >
    </>
  );
};

export default Card1;
