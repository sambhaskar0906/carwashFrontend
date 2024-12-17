import React from 'react'
import { Route, Routes } from 'react-router'

function UserRouters() {
    return (
        <Routes>
            <Route path="/" element={<Guest1 />}>
                <Route path="/guest2" element={<Guest2 />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/contactus" element={<Contactus />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/editprofile" element={<EditProfile />}></Route>
                <Route path="/servicelocation" element={<ServiceLocation />}></Route>
                <Route path="/serviceinvoice" element={<ServiceInvoice />}></Route>
                <Route path="/subscriptions" element={<Subscriptions />}></Route>
                <Route path="/booking" element={<Booking />}></Route>
                <Route path="/history" element={<History />}></Route>
                <Route path="/faqs" element={<FAQs />}></Route>
                <Route path="/ourservices" element={<OurServices />}></Route>
                <Route path="*" element={<Home />} />

            </Route>

        </Routes>
    )
}

export default UserRouters