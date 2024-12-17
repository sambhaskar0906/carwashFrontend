import React from "react";
import { Link, Route, Routes, json, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// import Searcher from "../components/Searcher";
// import BackgroundImg from "../components/Background";
// import PaymentOptions from "../components/Paymentoption";
// import AboutGuest from "../components/About";
// import Dryclean from "../components/Home/Dryclean";
// import Nav from "../partials/Nav";
// import Question from "../components/Question";
// import Footer from "../partials/Footer";
// import Rectanglefield from "../components/Rectanglefield";
// import Ourplan from "../components/Ourplan";
// import OurServices from "../components/OurServices";
// import Card1 from "../components/Card";
// import Review from "../components/Review";
// import Ourplans from "../components/Ourplans";
// import Subscribe from "../pages/users/Subscribe";
// import HomeCards from "../components/Home/HomeCards";

import Guest1 from "../pages/users/Guest1";
import Home from "../pages/users/Home";
import Guest2 from "../pages/users/Guest2";
import Services from "../pages/users/Services";
import AboutUs from "../components/Home/Homepage";
import Contactus from "../pages/users/Contactus";
import Login from "../pages/users/auth/Login";
import Email from "../pages/users/auth/Email";
import PasswordReset from "../pages/users/auth/PasswordReset";
import Profile from "../pages/users/Profile";
import ServiceLocation from "../pages/users/ServiceLocation";
import ServiceInvoice from "../pages/users/ServiceInvoice";
import RegisterPage from "../pages/users/auth/Register";
import Mobile from "../pages/users/auth/Mobile";
import Otp from "../pages/users/auth/otp";
import Subscriptions from "../pages/users/Subscription";
import Booking from "../pages/users/Booking";

import History from "../components/Table";
import EditProfile from "../pages/users/EditProfile";
import FAQs from "../components/FAQ1";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdPaySucc from "../pages/admin/AdPaySucc";
import AdPayUnsucc from "../pages/admin/AdPayUnsucc";
import AdUserReq from "../pages/admin/AdUserReq";
import AdAllUsers from "../pages/admin/AdAllUsers";
import AdUserInact from "../pages/admin/AdUserDec";
import AdAllSup from "../pages/admin/AdAllSup";
import AdEditSup from "../pages/admin/AdEditSup";
import AdCreateSup from "../pages/admin/AdCreateSup";
import AdPayDetails from "../pages/admin/AdPayDetails";
import AdUserDetails from "../pages/admin/AdUserDetail";
import AdAllService from "../pages/admin/AdAllService";
import AdReqService from "../pages/admin/AdReqService";
import AdAccptService from "../pages/admin/AdAccptService";
import AdDeniedService from "../pages/admin/AdDeniedService";

import SupervisorDashboard from "../pages/supervisor/SupervisorDashboard";
import SupPaySucc from "../pages/supervisor/SupPaySucc";
import SupPayUnsucc from "../pages/supervisor/SupPayUnsucc";
import SupUserReq from "../pages/supervisor/SupUserReq";
import SupUserAct from "../pages/supervisor/SupUserAct";
import SupUserInact from "../pages/supervisor/SupUserDec";
import SupPayDetails from "../pages/supervisor/SupPayDetails";
import SupUserDetails from "../pages/supervisor/SupUserDetails";
import SupAllService from "../pages/supervisor/SupAllService";
import SupReqService from "../pages/supervisor/SupReqService";
import SupAccptService from "../pages/supervisor/SupAccptService";
import SupDeniedService from "../pages/supervisor/SupDeniedService";

import AdDash from "../components/AdDash";
import SupDash from "../components/SupDash";
import Table from "../components/Table";
import OurServices from "../components/OurServices";
import Whyus from '../components/Whyus'
import Gallery from "../components/Gallery";
import PublicRouters from "./routers/PublicRouters";
import { useDispatch, useSelector } from "react-redux";
import AdminRouters from '../routes/routers/AdminRouters.js'
import SupervisorRouter from '../routes/routers/SupervisorRouter.js';
import UserLoginRouter from "./routers/UserLoginRouter.js";
import { getAllCarType, getUserProfile } from "../store/slices/AuthSlice.js";

function MainRouter() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { Loading, UserInfo, Status, userData } = useSelector((state) => state.AUTH)


  useEffect(() => {
    dispatch(getUserProfile());
  }, []);


  const userDataDom = JSON.parse(localStorage.getItem('userData'))


  return (
    <>
      {UserInfo?.Status && UserInfo?.role == 1 ? <UserLoginRouter /> : UserInfo?.Status && UserInfo?.role == 2 ? <AdminRouters /> : UserInfo?.Status && UserInfo?.role == 3 ? <SupervisorRouter /> : <PublicRouters />}

    </>

  );
}

export default MainRouter;


{/* <Route path="/addash" element={<AdDash />}></Route>
        <Route path="/supdash" element={<SupDash />}></Route>
        <Route path="/table" element={<Table />}></Route> */}