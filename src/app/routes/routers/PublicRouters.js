import React from 'react'
import { Route, Routes } from 'react-router'
import PublicLayout from '../../layouts/PublicLayout'
import RegisterPage from '../../pages/users/auth/Register'
import Mobile from '../../pages/users/auth/Mobile'
import Otp from '../../pages/users/auth/otp'
import PasswordReset from '../../pages/users/auth/PasswordReset'
import Whyus from '../../components/Whyus'
import Gallery from '../../components/Gallery'
import Login from '../../pages/users/auth/Login'
import Email from '../../pages/users/auth/Email'
import Home from '../../pages/users/Home.js'
import OurServices from '../../pages/users/Services.js'
import Aboutus from '../../components/Home/Homepage.js'
import Contactus from '../../pages/users/Contactus.js'
import FAQs from "../../components/FAQ1.js";
import EditSupervisorCredentials from '../../components/EditSupervisorCredentials.js'



function PublicRouters() {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path='/registerpage' element={<RegisterPage />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/email" element={<Email />} />
                <Route path="/passwordreset" element={<PasswordReset />} />
                <Route path="/Whyus" element={<Whyus />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="*" element={<Home />} />


            </Route>
        </Routes>
    )
}

export default PublicRouters