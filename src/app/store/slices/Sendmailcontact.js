import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosApi from "../../utils/AxiosApi";



export const sendmailformContact = createAsyncThunk('sendMail', async (data, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        const res = await AxiosApi.post('sendmailcontact/sendmail', data)
        return res.data

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
}

)

const Sendmail = createSlice({
    name: 'Sendmail',
    initialState: {
        emailloading: false
    },
    reducers: {},
    extraReducers: (Builder) => {
        Builder.addCase(sendmailformContact.pending, (state, action) => {
            state.emailloading = true
        })
        Builder.addCase(sendmailformContact.fulfilled, (state, action) => {
            state.emailloading = false;
            alert(action.payload.message);


        })
        Builder.addCase(sendmailformContact.rejected, (state, action) => {
            state.emailloading = false;
            alert(action.payload.message);
        })


    }

})

export default Sendmail.reducer