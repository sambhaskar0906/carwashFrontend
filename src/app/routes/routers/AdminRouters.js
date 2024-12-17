import React from 'react'
import { Route, Router, Routes } from 'react-router'
import AdminLayout from '../../layouts/AdminLayout'
import AdPaySucc from '../../pages/admin/AdPaySucc.js'
import AdminDashboard from '../../pages/admin/AdminDashboard.js'
import AdPayUnsucc from "../../pages/admin/AdPayUnsucc";
import AdAllUsers from "../../pages/admin/AdAllUsers";
import AdUserInact from "../../pages/admin/AdUserDec";
import AdAllService from "../../pages/admin/AdAllService";
import AdDeniedService from "../../pages/admin/AdDeniedService";
import AdAccptService from "../../pages/admin/AdAccptService";
import AdReqService from "../../pages/admin/AdReqService";
import AdAllSup from "../../pages/admin/AdAllSup";
import AdCreateSup from "../../pages/admin/AdCreateSup";
import AdUserAct from '../../pages/admin/AdUserAct.js'
import EditSupervisorCredentials from '../../components/EditSupervisorCredentials.js'
import CreateServiceAdmin from '../../pages/admin/CreateServices.js'


function AdminRouters() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="/adminpaysuccessful" element={<AdPaySucc />} />

                <Route path="/unsuccessfullpayments" element={<AdPayUnsucc />} />
                <Route path="/adminuserall" element={<AdAllUsers />} />
                <Route path="/adminuserinactive" element={<AdUserInact />} />
                <Route path="/adminallservice" element={<AdAllService />} />
                <Route path='/admindeniedservices' element={<AdDeniedService />} />
                <Route path='/adminacceptedservices' element={<AdAccptService />} />
                <Route path='/adminrequestesservices' element={<AdReqService />} />
                <Route path='/addallsupervisor' element={<AdAllSup />} />
                <Route path='/createsupervisor' element={<AdCreateSup />} />
                <Route path='/adminuseractive' element={<AdUserAct />} />
                <Route path="/EditSupervisor" element={<EditSupervisorCredentials />} />
                <Route path="/createservice" element={<CreateServiceAdmin />} />
                <Route path="*" element={<AdminDashboard />} />





            </Route>
        </Routes>
    )
}

export default AdminRouters
