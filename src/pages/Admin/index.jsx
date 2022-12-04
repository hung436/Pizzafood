import { Routes, Route, Outlet } from "react-router-dom";

import React from "react";
import { Helmet } from "react-helmet";

import Sidebar from "./components/Sidebar/Sidebar";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";

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
