import React from 'react'
import AdminAppDrawer from '../adminPages/AdminAppDrawer'
import { Outlet } from 'react-router'

function AdminLayout() {
    return (
        <>
            <AdminAppDrawer>
                <Outlet />
            </AdminAppDrawer>




        </>
    )
}

export default AdminLayout