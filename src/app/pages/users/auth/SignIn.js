import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Elipse1 from '../../../assests/images/Ellipse 437.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useFormik } from "formik";
import { LoadingButton } from '@mui/lab';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useDispatch, useSelector, } from "react-redux";
import { getUserProfile, userLogin, updateUsers } from "../../../store/slices/AuthSlice";
import AppTheme from "../../../themes/AppTheme";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { baseImagepath } from '../../../utils/Constant';

const SignIn = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const fileInputRef = useRef(null);

    const handleFilePickerClick = () => {
        fileInputRef.current.click();
    };

    const handleFileSelected = (event) => {
        const selectedFile = event.target.files[0];
        // Do something with the selected file
        console.log('Selected file:', selectedFile);
    };

    const textFieldStyles = {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black",
            },
            "& input": {
                color: "black",
            },
            "& input::placeholder": {
                color: "darkblack",
            },
        },
    };


    const dispatch = useDispatch()
    const { Loading, UserInfo, Status, userData, updatedUserData } = useSelector((state) => state.AUTH)
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            firstName: userData?.data?.name?.firstName,
            lastName: userData?.data?.name?.lastName, // Corrected field name
            locality: userData?.data?.address?.locality,
            city: userData?.data?.address?.city,
            state: userData?.data?.address?.state,
            pincode: userData?.data?.address?.pincode,
            mobileNumber: userData?.data?.mobileNumber,
            altNumber: userData?.data?.altNumber,
            profileImage: userData?.data?.profileImage
        },

        onSubmit: (values) => {
            const data = {
                name: {
                    firstName: values.firstName,
                    lastName: values.lastName
                },

                address: {
                    locality: values.locality,
                    city: values.city,
                    state: values.state,
                    pincode: values.pincode
                },
                mobileNumber: values.mobileNumber,
                altNumber: values.altNumber,
                profileImage: values.profileImage
            }

            dispatch(updateUsers(data)).then(unwrapResult).then((res) => {
                toast(res.message)

                if (res?.Status) {
                    navigate('/otp')
                }
            })

        }



    });

    const imagepath = `${baseImagepath}${userData?.data?.profileImage}`

    return (
        <>
            <Grid xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} margin={'auto'}>
                <Grid xs={8}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '20px',
                        boxShadow: '1px 1px 1px 0px #a9aba8aa',
                        overflow: 'hidden'
                    }}>
                    <ToastContainer position="top-right" />
                    <Box position={'relative'} margin={'auto'}>

                        <img src={Elipse1} alt="" height={'124px'} width={'100%'} />
                        <Box

                            sx={{
                                position: 'absolute',
                                mt: '-70px',
                                mx: '40%',
                                height: '124px',
                                width: '124px',
                                borderRadius: '50%',
                                backgroundColor: ' #D9D9D9',

                                zIndex: 10
                            }}>

                            <img src={selectedImage ? selectedImage : imagepath} height={'100%'} width={"100%"} style={{
                                position: 'absolute',
                                mt: '-70px',
                                mx: '35%',
                                height: '124px',
                                width: '124px',
                                borderRadius: '50%',
                                backgroundColor: ' #D9D9D9',
                                border: '2px solid red',
                                zIndex: 10
                            }} />



                            <Button
                                onClick={handleFilePickerClick} style={{
                                    fill: 'red',
                                    position: 'absolute',
                                    right: 5,
                                    bottom: 0,
                                    padding: 2,


                                    zIndex: 10
                                }}>
                                <CameraAltIcon
                                    style={{
                                        fill: 'red',
                                        position: 'absolute',
                                        right: 5,
                                        bottom: 0,
                                        padding: 2,
                                        backgroundColor: 'white',
                                        border: '2px solid red',
                                        borderRadius: '50%',
                                        zIndex: 10
                                    }} />

                            </Button>







                        </Box>

                    </Box>
                    <form
                        encType="multipart/form-data"
                        style={{
                            // color: Colors.palette.secondary.main
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <Box
                            sx={{
                                mt: 10,
                                mx: 3,
                            }}>

                            <Stack spacing={2} direction={'row'}>
                                <TextField
                                    variant="outlined"
                                    required

                                    size="small"
                                    id="firstName"
                                    label="First Name"
                                    placeholder="First Name"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                    error={
                                        formik.touched.firstName &&
                                        Boolean(formik.errors.firstName)
                                    }
                                    helperText={
                                        formik.touched.firstName && formik.errors.firstName
                                    }
                                    sx={textFieldStyles}
                                />

                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName || userData?.data?.name?.lastName}
                                    error={
                                        formik.touched.surName &&
                                        Boolean(formik.errors.lastName)
                                    }
                                    helperText={
                                        formik.touched.lastName && formik.errors.lastName
                                    }
                                    sx={textFieldStyles}
                                />
                            </Stack>
                            <Stack direction={'row'} spacing={2} marginTop={1}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    id="mobileNumber"
                                    label="Contact Number"
                                    // type="Mobile"
                                    name="mobileNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobileNumber}
                                    error={
                                        formik.touched.mobileNumber &&
                                        Boolean(formik.errors.mobileNumber)
                                    }
                                    helperText={
                                        formik.touched.mobileNumber &&
                                        formik.errors.mobileNumber
                                    }
                                    sx={textFieldStyles}
                                />

                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    id="altNumber"
                                    label="Alternate Number"
                                    name="altNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.altNumber}
                                    error={
                                        formik.touched.altNumber &&
                                        Boolean(formik.errors.altNumber)
                                    }
                                    helperText={
                                        formik.touched.altNumber &&
                                        formik.errors.altNumber
                                    }
                                    sx={textFieldStyles}
                                />
                            </Stack>

                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                                mx: 3,
                            }}>

                            <Stack spacing={2}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    required
                                    fullWidth
                                    id="locality"
                                    label="locality / Building / Street / Society"
                                    name="locality"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.locality}
                                    error={
                                        formik.touched.locality &&
                                        Boolean(formik.errors.locality)
                                    }
                                    helperText={
                                        formik.touched.locality && formik.errors.locality
                                    }
                                    sx={textFieldStyles}
                                />
                            </Stack>
                            <Stack direction={'row'} spacing={2} marginTop={1}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    id="city"
                                    label="city / Town  District"
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.city && Boolean(formik.errors.city)
                                    }
                                    helperText={formik.touched.city && formik.errors.city}
                                    sx={textFieldStyles}
                                />
                                <TextField

                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    id="pincode"
                                    label="pincode"
                                    name="pincode"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.pincode && Boolean(formik.errors.pincode)
                                    }
                                    helperText={formik.touched.pincode && formik.errors.pincode}
                                    sx={textFieldStyles}
                                />

                            </Stack>
                            <Stack direction={'row'} spacing={2} marginTop={1}>

                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    id="state"
                                    label="state"
                                    name="state"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.state &&
                                        Boolean(formik.errors.state)
                                    }
                                    helperText={
                                        formik.touched.state && formik.errors.state
                                    }
                                    sx={textFieldStyles}
                                />

                            </Stack>

                            <Stack direction={'row'} spacing={2} marginTop={1}>

                                {
                                    console.log('URI', formik.values.profileImage)
                                }
                                <input
                                    id="profileImage"
                                    name="profileImage"
                                    type="file"

                                    onChange={(event) => {
                                        formik.setFieldValue("profileImage", event.currentTarget.files[0]);
                                        const reader = new FileReader();
                                        reader.onload = () => {
                                            setSelectedImage(reader.result);
                                        };
                                        reader.readAsDataURL(event.target.files[0]);

                                    }}
                                    onBlur={formik.handleBlur}
                                    ref={fileInputRef}
                                    // onChange={handleFileSelected}
                                    style={{ display: 'none' }}
                                />


                            </Stack>
                            <Stack margin={3}>
                                <LoadingButton
                                    type="submit"
                                    variant="contained"
                                    style={{ backgroundColor: 'red', margin: 'auto', my: '2', width: '170px' }}

                                    loading={Loading ? true : false}

                                >
                                    Submit

                                </LoadingButton>

                            </Stack>

                        </Box>
                    </form>
                </Grid>
            </Grid >
        </>
    )
}

export default SignIn;
