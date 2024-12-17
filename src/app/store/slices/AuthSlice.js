import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosApi from "../../utils/AxiosApi";
import { Navigate } from "react-router";
import store from "..";


export const userLogin = createAsyncThunk('usersLogin', async (data, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        const res = await AxiosApi.post('users/user-login', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
}
)

export const userRegister = createAsyncThunk('usersRegister', async (data, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        console.log("UserRegisterData", data); // Check if it's a File object
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data', // Corrected header name
                'Accept': 'application/json',
            }
        };

        const formData = new FormData();
        formData.append('firstName', data.name.firstName);
        formData.append('lastName', data.name.lastName);
        formData.append('city', data.address.city);
        formData.append('locality', data.address.locality);
        formData.append('pincode', data.address.pincode);
        formData.append('state', data.address.state);
        formData.append('altNumber', data.altNumber);
        formData.append('cpassword', data.cpassword);
        formData.append('description', data.description);
        formData.append('email', data.email);
        formData.append('mobileNumber', data.mobileNumber);
        formData.append('password', data.password);
        formData.append('role', data.role);

        formData.append('profileImage', data.profileImage);

        formData.append('status', data.status);


        const response = await AxiosApi.post('users/create-user', formData, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const verifyotp = createAsyncThunk('userOtpVerify', async (data, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        const response = await AxiosApi.post('users/verfy-otp', data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const getUserProfile = createAsyncThunk('getUserProfile', async (_, { rejectWithValue, getState, dispatch }) => {
    const tokens = getState()?.AUTH?.UserInfo?.data
    const header = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokens}`
        }
    };
    try {

        const res = await AxiosApi.get('users/current-user', header)
        return res.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})

export const getAlluserActive = createAsyncThunk('getAlluserActive', async (_, { rejectWithValue, getState, dispatch }) => {

    try {

        const res = await AxiosApi.get('users/getallusers')
        return res?.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})

export const InactiveStatus = createAsyncThunk('inactiveStatus', async (id, { rejectWithValue }) => {
    try {
        const res = await AxiosApi.post('users/updatestatus', { id }); // Pass id as data object

        return res.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);

        return rejectWithValue(error.response.data);
    }
});

export const verifyEmail = createAsyncThunk('emailverify', async (email, { rejectWithValue }) => {
    try {
        const res = await AxiosApi.post('users/send-otp-resetpassword', email);
        return res.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});

export const ConfirmingPassword = createAsyncThunk('confirmPass', async (data, { rejectWithValue }) => {
    try {
        const res = await AxiosApi.post('users/change-password-with-otp', data);
        return res.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);

        return rejectWithValue(error.response.data);
    }
});

export const updateUsers = createAsyncThunk('updateUsers', async (data, { rejectWithValue, getState, dispatch }) => {
    const tokens = getState()?.AUTH?.UserInfo?.data
    var deep = 'dskjbdvsnjldvb'
    const header = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokens}`,
            'Content-Type': "multipart/form-data",
        }
    };
    try {


        const res = await AxiosApi.post('users/update-user', deep, header);
        return res.data;

    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);

        return rejectWithValue(error.response.data);
    }
});

export const CarType = createAsyncThunk('cartype', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json", // Change content type to application/json
            }
        };

        var obj = {
            cartype: data
        }

        const res = await AxiosApi.post('carcategory/create', obj, header); // Pass 'data' directly
        return res?.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});

export const cleanTypeSubmit = createAsyncThunk('cleantype', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json", // Change content type to application/json
            }
        };

        var obj = {
            cleaningType: data
        }

        const res = await AxiosApi.post('cleantype/create', obj, header);
        return res.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});

export const packageTypeSubmit = createAsyncThunk('packagetypesubmit', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json", // Change content type to application/json
            }
        };

        var obj = {
            packagetype: data
        }

        const res = await AxiosApi.post('packagetype/create', obj, header);
        return res.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});

export const DeletePackageType = createAsyncThunk('deletepackagetype', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json",
            }
        };



        const res = await AxiosApi.delete('packagetype/delete', header);
        return res.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});


export const DeleteCarType = createAsyncThunk('deletecartype', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json",
            }
        };
        const res = await AxiosApi.delete('carcategory/delete', header);
        console.log('res', res?.data)
        return res?.data;
    } catch (error) {
        // console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error?.response?.data);
    }
});



export const DeleteCleanType = createAsyncThunk('deletecleantype', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json",
            }
        };
        const res = await AxiosApi.delete('cleantype/delete', header);
        return res?.data;
    } catch (error) {
        // console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});


export const getAllCarType = createAsyncThunk('getallcartype', async (_, { rejectWithValue, getState, dispatch }) => {

    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json",
            }
        };

        const res = await AxiosApi.get('carcategory/getall', header)
        return res?.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})


export const getAllCleanType = createAsyncThunk('getallcleantype', async (_, { rejectWithValue, getState, dispatch }) => {

    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json",
            }
        };

        const res = await AxiosApi.get('cleantype/getall', header)
        return res?.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})


export const getAllPackageType = createAsyncThunk('getallpackagetype', async (_, { rejectWithValue, getState, dispatch }) => {

    try {
        const tokens = getState()?.AUTH?.UserInfo?.data;
        const header = {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${tokens}`,
                'Content-Type': "application/json",
            }
        };

        const res = await AxiosApi.get('packagetype/getall', header)
        return res?.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})

export const servicePackage = createAsyncThunk('servicepackage', async (data, { rejectWithValue, getState, dispatch }) => {
    try {



        console.log("authslice wala servicepackage", data)
        const res = await AxiosApi.post('servicepackage/create', data);
        return res?.data;
    } catch (error) {
        console.error('Error in InactiveStatus thunk:', error);
        return rejectWithValue(error.response.data);
    }
});

export const getAllServicePackage = createAsyncThunk('getallservicepackage', async (_, { rejectWithValue, getState, dispatch }) => {

    try {


        const res = await AxiosApi.get('servicepackage/getall')
        return res?.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})

export const getCarName = createAsyncThunk('getcarname', async (data, { rejectWithValue, getState, dispatch }) => {

    try {

        console.log("Authslice wala car", data)

        return data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})

export const getInfOnService = createAsyncThunk('getinfonservice', async (data, { rejectWithValue, getState, dispatch }) => {

    try {

        console.log("service wala information", data)

        return data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        Loading: false,
        UserInfo: null,
        Status: null,
        isAuthenticate: false,
        userData: null,
        activeUsers: null,
        inactiveAlerts: null,
        emailpasschnage: null,
        confirmPassOtp: null,
        updatedUserData: null,
        cartype: null,
        cleantype: null,
        packagetype: null,
        deletepackagetype: null,
        deletecartype: null,
        deletecleantype: null,
        getallcarType: null,
        getallcleantype: null,
        getallpackagetype: null,
        createservicepackage: null,
        getservicepackage: null,
        getcarname: null,
        getinfoservice: null,
        logoutloading: false,
    },
    reducers: {
        setUserData(state, action) {
            const users = JSON.parse(localStorage.getItem('userinfo'))
            state.UserInfo = users
        },
        userLogout(state, action) {
            localStorage.removeItem('userinfo')
            state.userData = null
            state.UserInfo = null
            state.logoutloading = true
            console.log('logoutsuccess')
        }


    },
    extraReducers: (Builder) => {
        Builder.addCase(userLogin.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(userLogin.fulfilled, (state, action) => {
            state.UserInfo = action.payload;

            localStorage.setItem('userinfo', JSON.stringify(action.payload))
            state.Loading = false;
            state.logoutloading = false;

        })
        Builder.addCase(userLogin.rejected, (state, action) => {
            state.Loading = false;
        })
        // ------------------------------------------------------regPage-------------------------------------------------------------------------
        Builder.addCase(userRegister.pending, (state, action) => {
            state.Loading = true;
        })

        Builder.addCase(userRegister.fulfilled, (state, action) => {
            state.UserInfo = action.payload;
            state.Loading = false
        })

        Builder.addCase(userRegister.rejected, (state, action) => {
            state.UserInfo = action.payload;

            state.Loading = false
        })

        Builder.addCase(verifyotp.pending, (state, action) => {
            state.Loading = true
        })

        Builder.addCase(verifyotp.fulfilled, (state, action) => {
            state.UserInfo = null;

            state.Loading = false

        })

        Builder.addCase(verifyotp.rejected, (state, action) => {
            state.UserInfo = null;

            state.Loading = false
        })
        // currentuser api uses===============================================================================================

        Builder.addCase(getUserProfile.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.Loading = false
            state.userData = action.payload
        })
        Builder.addCase(getUserProfile.rejected, (state, action) => {

            state.Loading = false
            state.error = action.payload
            state.userData = null
        })

        //  getAlluserActive=========================================================================================================
        Builder.addCase(getAlluserActive.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getAlluserActive.fulfilled, (state, action) => {
            state.Loading = false
            state.activeUsers = action.payload
        })
        Builder.addCase(getAlluserActive.rejected, (state, action) => {

            state.Loading = false
            state.error = action.payload
            state.activeUsers = null
        })
        //inactive status==================================================================================================================
        Builder.addCase(InactiveStatus.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(InactiveStatus.fulfilled, (state, action) => {
            state.Loading = false
            state.inactiveAlerts = action.payload.message

        })
        Builder.addCase(InactiveStatus.rejected, (state, action) => {

            state.Loading = false
            state.error = action.payload.message

        })

        // email to passwor dchange===================================================================================================
        Builder.addCase(verifyEmail.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(verifyEmail.fulfilled, (state, action) => {
            state.Loading = false
            state.emailpasschnage = action.payload.message

        })
        Builder.addCase(verifyEmail.rejected, (state, action) => {

            state.Loading = false
            state.error = action.payload.message

        })

        //confirming Password=====================================================================================================
        Builder.addCase(ConfirmingPassword.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(ConfirmingPassword.fulfilled, (state, action) => {
            state.Loading = false
            state.confirmPassOtp = action.payload.message

        })
        Builder.addCase(ConfirmingPassword.rejected, (state, action) => {


            state.Loading = false
            state.error = action.payload.message

        })

        //update Users====================================================================================================
        Builder.addCase(updateUsers.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(updateUsers.fulfilled, (state, action) => {
            state.Loading = false
            state.updatedUserData = action.payload.message

        })
        Builder.addCase(updateUsers.rejected, (state, action) => {


            state.Loading = false
            state.error = action.payload.message

        })


        //cartpes====================================================================================================
        Builder.addCase(CarType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(CarType.fulfilled, (state, action) => {
            state.Loading = false
            state.cartype = action?.payload

            alert(action?.payload?.message)

        })
        Builder.addCase(CarType.rejected, (state, action) => {

            console.log('resRej', action.payload)

            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })

        //cleanType====================================================================================================
        Builder.addCase(cleanTypeSubmit.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(cleanTypeSubmit.fulfilled, (state, action) => {
            state.Loading = false
            state.cleantype = action?.payload
            alert(action?.payload?.message)

        })
        Builder.addCase(cleanTypeSubmit.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload
            alert(action?.payload?.message)

        })


        //packageType====================================================================================================
        Builder.addCase(packageTypeSubmit.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(packageTypeSubmit.fulfilled, (state, action) => {
            state.Loading = false
            state.packagetype = action?.payload
            alert(action?.payload?.message)

        })
        Builder.addCase(packageTypeSubmit.rejected, (state, action) => {
            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })

        //deletepackageType====================================================================================================
        Builder.addCase(DeletePackageType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(DeletePackageType.fulfilled, (state, action) => {
            state.Loading = false
            state.deletepackagetype = action?.payload
            alert(action?.payload?.message)

        })
        Builder.addCase(DeletePackageType.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })

        //deleteCarType====================================================================================================
        Builder.addCase(DeleteCarType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(DeleteCarType.fulfilled, (state, action) => {
            state.Loading = false
            state.deletecartype = action?.payload
            console.log('delCarRes', action?.payload)
            alert(action?.payload?.message)

        })
        Builder.addCase(DeleteCarType.rejected, (state, action) => {
            state.Loading = false
            state.error = action?.payload?.message
            console.log('delCarRej', action?.payload)
            alert(action?.payload?.message)

        })

        //deleteCleanType====================================================================================================
        Builder.addCase(DeleteCleanType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(DeleteCleanType.fulfilled, (state, action) => {
            state.Loading = false
            state.deletecleantype = action?.payload
            alert(action?.payload?.message)

        })
        Builder.addCase(DeleteCleanType.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })


        //getallcartype====================================================================================================
        Builder.addCase(getAllCarType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getAllCarType.fulfilled, (state, action) => {
            state.Loading = false

            state.getallcarType = action?.payload


        })
        Builder.addCase(getAllCarType.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })


        //getallcleanTuype====================================================================================================
        Builder.addCase(getAllCleanType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getAllCleanType.fulfilled, (state, action) => {
            state.Loading = false

            state.getallcleantype = action?.payload


        })
        Builder.addCase(getAllCleanType.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })

        //getallPackageType====================================================================================================
        Builder.addCase(getAllPackageType.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getAllPackageType.fulfilled, (state, action) => {
            state.Loading = false

            state.getallpackagetype = action?.payload


        })
        Builder.addCase(getAllPackageType.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })
        //gservicepackage====================================================================================================
        Builder.addCase(servicePackage.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(servicePackage.fulfilled, (state, action) => {
            state.Loading = false

            state.createservicepackage = action?.payload
            alert(action?.payload?.message)

        })
        Builder.addCase(servicePackage.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })

        //getAllservicepackage====================================================================================================
        Builder.addCase(getAllServicePackage.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getAllServicePackage.fulfilled, (state, action) => {
            state.Loading = false

            state.getservicepackage = action?.payload


        })
        Builder.addCase(getAllServicePackage.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload?.message
            alert(action?.payload?.message)

        })

        //getAllservicepackage====================================================================================================
        Builder.addCase(getCarName.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getCarName.fulfilled, (state, action) => {
            state.Loading = false

            state.getcarname = action?.payload

        })
        Builder.addCase(getCarName.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload


        })

        //getinfonservicepage====================================================================================================
        Builder.addCase(getInfOnService.pending, (state, action) => {
            state.Loading = true
        })
        Builder.addCase(getInfOnService.fulfilled, (state, action) => {
            state.Loading = false

            state.getinfoservice = action?.payload

        })
        Builder.addCase(getInfOnService.rejected, (state, action) => {


            state.Loading = false
            state.error = action?.payload


        })




    }
})

export const { setUserData, userLogout } = AuthSlice.actions
export default AuthSlice.reducer

