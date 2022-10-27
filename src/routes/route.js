// import AdminPage from "../pages/Admin";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
// const Home = React.lazy(import );
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/Notfound";
import Menu from "../pages/Menu/menu";
// import Product from "../pages/DetailProduct";
const Product = React.lazy(() => import("../pages/DetailProduct/index.jsx"));
const Home = React.lazy(() => import("../pages/Home"));
const AdminPage = React.lazy(() => import("../pages/Admin"));
const routes = (isAdmin) => [
  {
    path: "/admin/*",
    element: true ? <AdminPage /> : <Navigate to='/login' />,
    // children: [
    //   { path: "/dashboard", element: <Dashboard /> },
    //   { path: "/account", element: <Account /> },
    //   { path: "/", element: <Navigate to='/app/dashboard' /> },
    //   {
    //     path: "member",
    //     element: <Outlet />,
    //     children: [
    //       { path: "/", element: <MemberGrid /> },
    //       { path: "/add", element: <AddMember /> },
    //     ],
    //   },
    // ],
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />

        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
