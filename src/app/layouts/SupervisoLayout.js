import React from 'react'
import SupervisorAppDrawer from '../adminPages/SupervisorAppDrawer'
import { Outlet } from 'react-router'

function SupervisoLayout() {
    return (
        <SupervisorAppDrawer>
            <Outlet />
        </SupervisorAppDrawer>
    )
}

export default SupervisoLayout