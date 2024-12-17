import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosApi from "../../utils/AxiosApi";



export const createOrder = createAsyncThunk(
    'createorder',
    async (data, { rejectWithValue }) => {
        try {
            const res = await AxiosApi.post('payments/create', data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getKey = createAsyncThunk(
    'getkey',
    async (_, { rejectWithValue }) => {
        try {
            const res = await AxiosApi.get('payments/getkey');
            console.log("getkey is ", res);
            return res.data; // Assuming you want to return the data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const paymentSlice = createSlice({
    name: 'paymentSlice',
    initialState: {
        createorderloading: false,
        dataofcreateorder: null,
        getkeylolading: false,
        getkeydata: null,
    },
    reducers: {},
    extraReducers: (Builder) => {
        Builder.addCase(createOrder.pending, (state, action) => {
            state.createorderloading = true
        })
        Builder.addCase(createOrder.fulfilled, (state, action) => {
            state.createorderloading = false;
            state.dataofcreateorder = action.payload


        })
        Builder.addCase(createOrder.rejected, (state, action) => {
            state.createorderloading = false;
            state.dataofcreateorder = action.payload
        })

        // getkey----------------------------------------------------------------------------------------------------------------

        Builder.addCase(getKey.pending, (state, action) => {
            state.getkeylolading = true
        })
        Builder.addCase(getKey.fulfilled, (state, action) => {
            state.getkeylolading = false;
            state.getkeydata = action.payload


        })
        Builder.addCase(getKey.rejected, (state, action) => {
            state.getkeylolading = false;
            state.getkeydata = action.payload
        })
    }

})

export default paymentSlice.reducer