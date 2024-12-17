import React, { useRef } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router';
import PublicAppBar from '../components/public/PublicAppBar';
import Footer from '../partials/Footer';

function PublicLayout() {
    const footerRef = useRef(null);
    const location = useLocation();


    function handleContactUsClick() {

        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }

    }

    const isLogin = location.pathname === '/login' || location.pathname === '/registerpage';

    return (
        <>
            <PublicAppBar handleContactUsClick={handleContactUsClick} />
            <Outlet />
            {!isLogin && <Footer footerRef={footerRef} />}
        </>
    );
}

export default PublicLayout;
