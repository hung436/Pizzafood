import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./views/Dashboard";
// import Maps from './views/Maps';
import Settings from "./views/Settings";
import Tables from "./views/Tables";
import React from "react";
import { Helmet } from "react-helmet";

import Sidebar from "./components/Sidebar/Sidebar";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import HeaderStats from "./components/Headers/HeaderStats";
import FooterAdmin from "./components/Footers/FooterAdmin";
import NotFound from "../Notfound";
const Category = React.lazy(() => import("./views/Category"));
const Product = React.lazy(() => import("./views/Product"));
const User = React.lazy(() => import("./views/User"));

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>ADMIN</title>
      </Helmet>
      <Sidebar />
      <div className=' md:ml-64 bg-blueGray-100 relative'>
        <AdminNavbar />
        {/* Header */}
        <div className='pt-20'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
