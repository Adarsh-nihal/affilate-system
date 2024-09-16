import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import UserAccount from "../Pages/UserAccount";
import UserDashboard from "../Pages/UserDashboard";
import AgentUrl from "../Pages/AgentUrl";
import DownloadPage from "../Pages/DownloadPage";
import ContactUs from "../Pages/ContactUs";
import Sidebar from "../Component/Sidebar";
import PermissionWrapper from "./PermissionWrapper";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PermissionWrapper><Dashboard /></PermissionWrapper>} />
      <Route path="/account" element={<PermissionWrapper><UserAccount /></PermissionWrapper>} />
      <Route path="/user-dashboard" element={<PermissionWrapper><UserDashboard /></PermissionWrapper>} />
      <Route path="/contact-us" element={<PermissionWrapper><ContactUs /></PermissionWrapper>} />
      <Route path="/more" element={<PermissionWrapper><Sidebar /></PermissionWrapper>} />
      <Route path="/agent-url" element={<PermissionWrapper><AgentUrl /></PermissionWrapper>} />
      <Route path="/download-images" element={<PermissionWrapper><DownloadPage /></PermissionWrapper>} />
      <Route path="*" element={<h3>404 Page not found</h3>} />
    </Routes>
  );
};

export default AllRoute;
