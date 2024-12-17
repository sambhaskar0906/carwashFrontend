import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  CircularProgress,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "../../../utils/AxiosApi";
import { useDispatch, useSelector, } from "react-redux";
import { getUserProfile, userLogin } from "../../../store/slices/AuthSlice";
import AppTheme from "../../../themes/AppTheme";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from "../../../context/AuthContext";

function Login() {
  // const { userLogin, Loading, UserInfo, } = useContext(AuthContext)
  const dispatch = useDispatch()
  const { Loading, UserInfo, Status } = useSelector((state) => state.AUTH)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const paperStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 25,
  };

  const formStyle = {
    width: "100%",
    marginTop: "10%",
    position: "center",
  };

  const submitButtonStyle = {
    padding: "12px",
    margin: "20px 0",
    borderRadius: 15,
    fontWeight: "600",
    backgroundColor: AppTheme.palette.primary.main,
    display: "block",
    textAlign: "center",
    marginTop: "5%",
    marginLeft: { xs: "20%", sm: "30%" },
  };



  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.passWord,
      };

      dispatch(userLogin(data)).then(unwrapResult).then((res) => {

        if (res.Status) {
          dispatch(getUserProfile())
          setTimeout(() => {
            navigate('/')
          }, 2000)

        } else {
          toast(res.message)
        }
      })


      values.email = ''
      values.passWord = ''
    }
  });

  return (
    <>
      <Box
        sx={{
          background:
            `radial-gradient(circle at 100% 100%,${AppTheme.palette.primary.main},${AppTheme.palette.primary.main}, #F5F5F5)`,
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToastContainer position="top-right" />
          <Container maxWidth="sm" >
            <Grid container>
              <Paper
                elevation={3}
                style={paperStyle}
                sx={{
                  width: "100%",
                  background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
                }}
              >
                <Box sx={{ display: "flex" }}>

                  <Button
                    sx={{

                      justifyContent: "flex-start",
                    }}
                    onClick={() => navigate("/")}
                  >
                    <ArrowBackIosIcon />
                  </Button>
                  <Typography
                    variant="h4"
                    sx={{

                      flex: 0.8,
                      textAlign: "center",
                    }}
                  >
                    Log In
                  </Typography>
                </Box>

                <form
                  style={formStyle}
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Username/Email"
                    id="email"
                    name="email"
                    fullWidth
                    size="small"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    autoComplete={false}
                    error={
                      formik.touched.userName && Boolean(formik.errors.userName)
                    }
                    helperText={
                      formik.touched.userName && formik.errors.userName
                    }
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Password"
                    id="passWord"
                    name="passWord"
                    fullWidth
                    size="small"
                    autoComplete={false}

                    type={showPassword ? "text" : "passWord"}
                    value={formik.values.passWord}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.passWord && Boolean(formik.errors.passWord)
                    }
                    helperText={
                      formik.touched.passWord && formik.errors.passWord
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    sx={{

                      display: "flex",
                      mt: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate('/email')}
                  >
                    <LockIcon sx={{ mr: "1rem" }} />
                    Forgot password ?
                  </Typography>
                  <Box align="center" sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>

                    {
                      Loading ? <CircularProgress variant="solid" background={AppTheme.palette.primary.main} /> :
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          style={{ ...submitButtonStyle }}

                        >
                          Login
                        </Button>
                    }


                  </Box>
                  <Box align="center">
                    <Typography
                      sx={{

                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/registerpage`)}
                    >
                      Don't have an account?&nbsp;&nbsp; Register here
                    </Typography>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Login;
