import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import UpdateProduct from "../pages/Admin/views/Product/UpdateProduct";
import CreateUser from "../pages/Admin/views/User/CreateUser/CreateUser";
import UpdateUser from "../pages/Admin/views/User/UpdateUser/UpdateUser";
import Profile from "../pages/Profile";
import Order from "../pages/Admin/views/Order";
const CreateProduct = React.lazy(() =>
  import("../pages/Admin/views/Product/CreateProduct")
);

const Login = React.lazy(() => import("../pages/Auth/Login"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
const NotFound = React.lazy(() => import("../pages/Notfound"));
const Menu = React.lazy(() => import("../pages/Menu/menu"));
const Dashboard = React.lazy(() => import("../pages/Admin/views/Dashboard"));
const User = React.lazy(() => import("../pages/Admin/views/User/User"));
// import Product from "../pages/DetailProduct";
const Product = React.lazy(() => import("../pages/DetailProduct/index.jsx"));
const ProductADmin = React.lazy(() => import("../pages/Admin/views/Product"));
const Home = React.lazy(() => import("../pages/Home"));
const AdminPage = React.lazy(() => import("../pages/Admin"));
const Cart = React.lazy(() => import("../pages/Cart/Cart.jsx"));
const Contacts = React.lazy(() => import("../pages/Contacts/contacts.jsx"));
const About = React.lazy(() => import("../pages/About/about.jsx"));
const Order = React.lazy(()=> import("../pages/Order/Order.jsx"))
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
      { path: "/profile", element: <Profile /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/about", element: <About /> },
      {path:"/order", element:<Order/>}
    ],
  },
  {
    path: "admin",
    element: isAdmin ? <AdminPage /> : <Navigate to='/login' />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "user", element: <User /> },
      { path: "user/create", element: <CreateUser /> },
      { path: "user/update/:id", element: <UpdateUser /> },
      {
        path: "product",
        element: <ProductADmin />,
      },
      { path: "product/create", element: <CreateProduct /> },
      { path: "product/update/:id", element: <UpdateProduct /> },
      { path: "order", element: <Order /> },
      // { path: "*", element: <NotFound /> },
    ],
  },

  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
