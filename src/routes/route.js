import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const Login = React.lazy(() => import("../pages/Auth/Login"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
const NotFound = React.lazy(() => import("../pages/Notfound"));
const Menu = React.lazy(() => import("../pages/Menu/menu"));
const Dashboard = React.lazy(() => import("../pages/Admin/views/Dashboard"));
const User = React.lazy(() => import("../pages/Admin/views/User"));
// import Product from "../pages/DetailProduct";
const Product = React.lazy(() => import("../pages/DetailProduct/index.jsx"));
const ProductADmin = React.lazy(() => import("../pages/Admin/views/Product"));
const Home = React.lazy(() => import("../pages/Home"));
const AdminPage = React.lazy(() => import("../pages/Admin"));
const routes = (isAdmin) => [
  {
    path: "",
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
  {
    path: "admin",
    element: isAdmin ? <AdminPage /> : <Navigate to='/login' />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "user", element: <User /> },
      { path: "product", element: <ProductADmin /> },
      // { path: "*", element: <NotFound /> },
    ],
  },

  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
