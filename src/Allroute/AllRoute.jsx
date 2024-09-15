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
const routes = [
  { path: "/", component: Login, permission: "needed" },
  { path: "/dashboard", component: Dashboard, permission: "needed" },
  { path: "user-dashboard", component: UserDashboard, permission: "needed" },
  { path: "account", component: UserAccount, permission: "needed" },
  { path: "contact-us", component: ContactUs, permission: "needed" },
  { path: "more", component: Sidebar, permission: "needed" },
  { path: "agent-url", component: AgentUrl, permission: "needed" },
  { path: "download-images", component: DownloadPage, permission: "needed" },
];
const AllRoute = () => {
  return (
    <Routes>
     {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            route.permission
              ?  <route.component />
              :<PermissionWrapper component={route.component} permissionName={route.permission} />
          }
        />
      ))}
    </Routes>
  );
};

export default AllRoute;
