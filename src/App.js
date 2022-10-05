import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";

import "./styles/App.scss";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
// import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/Notfound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
<<<<<<< HEAD
import css from "./styles/globals.css";
=======
import  "./styles/globals.css"
>>>>>>> 508f372322388b8ec49e4a56bf30c7716a0092d9
function App() {
  const PrivateRoute = ({ children }) => {
    const isAuthenticated = true;
    return isAuthenticated ? children : <Navigate to='/login' />;
  };
  return (
    <div className='App'>
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
<<<<<<< HEAD
              <Product />
              <Footer />
=======
              <Product/>
              {/* <Footer /> */}
>>>>>>> 508f372322388b8ec49e4a56bf30c7716a0092d9
            </>
          }
        >
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
