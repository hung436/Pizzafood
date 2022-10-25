import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.scss";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Footer from "./components/Footer/Footer.jsx";

import NotFound from "./pages/Notfound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import "./styles/globals.css";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
const Product = React.lazy(() => import("./pages/DetailProduct/index.jsx"));
const Home = React.lazy(() => import("./pages/Home"));
const Admin = React.lazy(() => import("./pages/Admin"));
function App() {
  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  const PrivateRoute = ({ children }) => {
    return userInfo && userInfo.RoleId === 2 ? (
      children
    ) : (
      <Navigate to='/login' />
    );
  };
  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/admin/*'
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path='/'
            element={
              <>
                <Header />
                <Outlet />

                <Footer />
              </>
            }
          >
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/home' element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
