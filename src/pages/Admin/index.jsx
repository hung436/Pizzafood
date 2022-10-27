import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
// import Maps from './views/Maps';
import Settings from "./views/Settings";
import Tables from "./views/Tables";
import React from "react";
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
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className=' md:px-10 mx-auto w-full md:-mt-24'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/category' element={<Category />} />
            <Route path='/product' element={<Product />} />
            <Route path='/user' element={<User />} />

            <Route path='/settings' element={<Settings />} />
            <Route path='/tables' element={<Tables />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
