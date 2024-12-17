import React from 'react'
import { Route, Routes } from 'react-router'
import SupervisoLayout from '../../layouts/SupervisoLayout'
import SupervisorsDashboard from '../../pages/supervisor/SupervisorDashboard'
import SupPaySucc from '../../pages/supervisor/SupPaySucc'
import SupPayUnsucc from '../../pages/supervisor/SupPayUnsucc'
import SupUserReq from '../../pages/supervisor/SupUserReq'
import SupUserAct from '../../pages/supervisor/SupUserAct'
import SupUserInact from "../../pages/supervisor/SupUserDec";
import SupAllService from '../../pages/supervisor/SupAllService'
import SupReqService from '../../pages/supervisor/SupReqService'
import SupAccptService from '../../pages/supervisor/SupAccptService'
import SupDeniedService from '../../pages/supervisor/SupDeniedService'
import SupPayDetails from '../../pages/supervisor/SupPayDetails'
import SupUserDetails from "../../pages/supervisor/SupUserDetails";

// import Newdeep from '../../pages/supervisor/Newdeeptest'

function SupervisorRouter() {
    return (
        <Routes>

            <Route path="/" element={<SupervisoLayout />}>
                <Route index element={<SupervisorsDashboard />} />
                <Route path='/supervisordashboard' element={<SupervisorsDashboard />} />
                <Route path="/supervisorpaysuccessful" element={<SupPaySucc />} />
                <Route path="/supervisorpayunsuccessful" element={<SupPayUnsucc />} />
                <Route path="/supervisoruserrequest" element={<SupUserReq />} />
                <Route path="/supervisoruseractive" element={<SupUserAct />} />
                <Route path="/supervisoruserinactive" element={<SupUserInact />} />
                <Route path="/supervisorallservice" element={<SupAllService />} />
                <Route path="/supervisorrequestedservice" element={<SupReqService />} />
                <Route path="/supervisoracceptservice" element={<SupAccptService />} />
                <Route path="/supervisordeniedservice" element={<SupDeniedService />} />
                <Route path="/supervisorpaymentdetails" element={<SupPayDetails />} />
                <Route path="/supervisoruserdetails" element={<SupUserDetails />} />
                <Route path="*" element={<SupervisorsDashboard />} />


            </Route>

            {/* 
                
                

                
                
                

                
                
                
                

              
                 */}



        </Routes>
    )
}

export default SupervisorRouter