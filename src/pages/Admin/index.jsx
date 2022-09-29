import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
// import Maps from './views/Maps';
import Settings from "./views/Settings";
import Tables from "./views/Tables";

import Sidebar from "./components/Sidebar/Sidebar";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import HeaderStats from "./components/Headers/HeaderStats";
import FooterAdmin from "./components/Footers/FooterAdmin";
import Category from "./views/Category";
import Product from "./views/Product";
import User from "./views/User";
import NotFound from "../Notfound";
const AdminPage = () => {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
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
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
