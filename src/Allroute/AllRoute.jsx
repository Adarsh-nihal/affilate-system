import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import UserAccount from '../Pages/UserAccount'
import UserDashboard from '../Pages/UserDashboard'
import AgentUrl from '../Pages/AgentUrl'
import DownloadPage from '../Pages/DownloadPage'
import ContactUs from '../Pages/ContactUs'
import Sidebar from '../Component/Sidebar'
const AllRoute = () => {
  return (
    <Routes>
        <Route path="/"   element={<Login/>} />
        <Route path="/dashboard"   element={<Dashboard/>} />
        <Route path="/user-dashboard"   element={<UserDashboard/>} />

        <Route path="/account"   element={<UserAccount/>} />
        <Route path="/contact-us"   element={<ContactUs/>} />
        <Route path="/more"   element={<Sidebar/>} />


        <Route path="/agent-url"   element={<AgentUrl/>} />
        <Route path="download-images" element={<DownloadPage/>} />



    </Routes>
  )
}

export default AllRoute