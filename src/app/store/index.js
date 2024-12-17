import { configureStore } from "@reduxjs/toolkit";
import AuthSlice, { setUserData, getAllCarType } from "./slices/AuthSlice";
import CarSlice from "./slices/CarSlice"
import Sendmail from "./slices/Sendmailcontact.js"
import paymentSlice from "./slices/paymentSlice.js";

const store = configureStore({
    reducer: {
        AUTH: AuthSlice,
        CAR: CarSlice,
        SENDMAIL: Sendmail,
        PAYMENT: paymentSlice

    }
})


store.dispatch(setUserData())

export default store;