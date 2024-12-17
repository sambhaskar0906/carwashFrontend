import React, { useState } from "react";
import SupDash from "../../components/SupDash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Box, Typography, Grid, styled, Paper } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Fab from "@mui/material/Fab";
import PaymentsIcon from '@mui/icons-material/Payments';
import Apptheme from '../../themes/AppTheme.js'
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { Line, Bar, Pie } from 'react-chartjs-2';

const cardStyle = {
  borderRadius: "10px",
  boxShadow: "2px 2px 2px grey",
};

const headingStyles = {
  // color: Colors.palette.secondary.main,
  fontWeight: "600",
};

const subHeading = {
  // color: Colors.palette.secondary.main,
  fontWeight: "600",
};

const iconBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
const iconsStyles = {
  padding: "2px",
  // color: Colors.palette.primary.main,
  // backgroundColor: Colors.palette.secondary.main,
  borderRadius: "50%",
  border: `2px solid blue`// ${Colors.palette.secondary.main}`,
};

const AdminDashboard = () => {
  const [SuccData, setSuccData] = useState({});
  const [UnsuccData, setUnsuccData] = useState({});
  const [SupervisorData, setSupervisorData] = useState({});
  const [UserReqData, setUserReqData] = useState({});
  const [ActUserData, setActUserData] = useState({});
  const [DecUserData, setDecUserData] = useState({});

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const gridstyle = {
    border: '1px solid black',
    height: '200px',

  }

  var successfulldata = {
    count: 120,
  }



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),

    height: '150px'
  }));


  const Chart = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),

    height: { xs: 'auto', md: '25rem' }
  }));

  const Pichart = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),

    height: '415px',
  }));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [23, 54, 21, 76, 47, 98, 32],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [76, 24, 85, 35, 28, 30, 45],
        borderColor: Apptheme.palette.primary.dark,
        backgroundColor: Apptheme.palette.primary.dark,
      },
    ],
  };

  return (
    <>

      <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={12} md={4}
              component={Link}
              to={"/adminpaysuccessful"}
              sx={{ textDecoration: 'none' }}
            >
              <Item sx={{ color: Apptheme.palette.primary.dark }}>
                Payment Successful
                <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                  <Grid sx={{ fontWeight: 'bold', fontSize: '40px' }}>{successfulldata.count}
                    <Typography sx={{ textAlign: 'center', color: Apptheme.palette.info.main }}>25%</Typography>

                  </Grid>
                  <Grid>
                    <PaymentsIcon sx={{ fontWeight: 'bold', fontSize: '80px', color: Apptheme.palette.primary.dark }} />
                  </Grid>
                </Grid>

              </Item>
            </Grid>
            <Grid item xs={12} md={4}
              component={Link}
              to={"/unsuccessfullpayments"}
              sx={{ textDecoration: 'none' }}
            >
              <Item sx={{ color: Apptheme.palette.primary.dark }}>
                Payment Unsuccessful
                <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                  <Grid sx={{ fontWeight: 'bold', fontSize: '40px' }}>{successfulldata.count}
                    <Typography sx={{ textAlign: 'center', color: Apptheme.palette.info.main }}>35%</Typography>

                  </Grid>
                  <Grid>
                    <SmsFailedIcon sx={{ fontWeight: 'bold', fontSize: '80px', color: Apptheme.palette.primary.dark }} />
                  </Grid>
                </Grid>

              </Item>
            </Grid>
            <Grid item xs={12} md={4}
              component={Link}
              to={"/adminuseractive"}
              sx={{ textDecoration: 'none' }}
            >
              <Item sx={{ color: Apptheme.palette.primary.dark }}>
                Actiive Users
                <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                  <Grid sx={{ fontWeight: 'bold', fontSize: '40px' }}>{successfulldata.count}
                    <Typography sx={{ textAlign: 'center', color: Apptheme.palette.info.main }}>25%</Typography>

                  </Grid>
                  <Grid>
                    <AddReactionIcon sx={{ fontWeight: 'bold', fontSize: '80px', color: Apptheme.palette.primary.dark }} />
                  </Grid>
                </Grid>

              </Item>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={12} md={4}
              component={Link}
              to={"/adminuseractive"}
              sx={{ textDecoration: 'none' }}>

              <Item sx={{ color: Apptheme.palette.primary.dark }}>
                Inactive
                <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                  <Grid sx={{ fontWeight: 'bold', fontSize: '40px' }}>{successfulldata.count}
                    <Typography sx={{ textAlign: 'center', color: Apptheme.palette.info.main }}>60%</Typography>

                  </Grid>
                  <Grid>
                    <AppBlockingIcon sx={{ fontWeight: 'bold', fontSize: '80px', color: Apptheme.palette.primary.dark }} />
                  </Grid>
                </Grid>

              </Item>
            </Grid>
            <Grid item xs={12} md={4}
              component={Link}
              to="/addallsupervisor"
              style={{
                textDecoration: "none",

              }}>
              <Item sx={{ color: Apptheme.palette.primary.dark }}>
                All Supervisor
                <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                  <Grid sx={{ fontWeight: 'bold', fontSize: '40px' }}>{successfulldata.count}
                    <Typography sx={{ textAlign: 'center', color: Apptheme.palette.info.main }}>25%</Typography>

                  </Grid>
                  <Grid>
                    <SupervisorAccountIcon sx={{ fontWeight: 'bold', fontSize: '80px', color: Apptheme.palette.primary.dark }} />
                  </Grid>
                </Grid>

              </Item>
            </Grid>
            <Grid item xs={12} md={4}
              component={Link}
              to="/createsupervisor"
              style={{
                textDecoration: "none",

              }}

            >
              <Item sx={{ color: Apptheme.palette.primary.dark }}>
                Create Supervisor
                <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
                  <Grid sx={{ fontWeight: 'bold', fontSize: '40px' }}>{successfulldata.count}
                    <Typography sx={{ textAlign: 'center', color: Apptheme.palette.info.main }}>25%</Typography>

                  </Grid>
                  <Grid>
                    <SupervisedUserCircleIcon sx={{ fontWeight: 'bold', fontSize: '80px', color: Apptheme.palette.primary.dark }} />
                  </Grid>
                </Grid>

              </Item>
            </Grid>
          </Grid>

        </Grid>
        {/* ==========================================================================================================chartbox================= */}
        <Grid container mt={2} justifyContent={'center'} alignItems={'center'}>
          <Grid container item spacing={3} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={8} justifyContent={'center'} alignItems={'center'}>
              <Chart>
                <Bar options={options} data={data} />
              </Chart>



            </Grid>


            <Grid item xs={12} md={4} justifyContent={'center'} alignItems={'center'} >
              <Pichart >
                <Pie options={options} data={data} />
              </Pichart>

            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminDashboard;
