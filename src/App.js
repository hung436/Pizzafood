import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.scss";
import { Routes, Route, Outlet, Navigate, useRoutes } from "react-router-dom";

import Footer from "./components/Footer/Footer.jsx";
import Menu from "./pages/Menu/menu.jsx";
import NotFound from "./pages/Notfound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "./styles/globals.css";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import routes from "./routes/route";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  // const PrivateRoute = ({ children }) => {
  //   return userInfo && userInfo.RoleId === 2 ? (
  //     children
  //   ) : (
  //     <Navigate to='/login' />
  //   );
  // };
  const routing = useRoutes(routes(userInfo && userInfo.RoleId === "admin"));
  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>{routing}</Suspense>
    </div>
  );
}

export default App;
