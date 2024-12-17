import React, { useEffect, useRef } from 'react'
import UserAppBar from '../adminPages/UserAppBar'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { currentuser, getUserProfile, userLogout } from "../store/slices/AuthSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../partials/Footer';
function UserLayout() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { Loading, UserInfo, Status, userData } = useSelector((state) => state.AUTH)

    useEffect(() => {
        dispatch(getUserProfile());
    }, []);

    const footerRef = useRef(null);
    const location = useLocation();

    function handleContactUsClick() {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <UserAppBar handleContactUsClick={handleContactUsClick} />
            <Outlet />
            <Footer footerRef={footerRef} />
        </>
    )
}

export default UserLayout