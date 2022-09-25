import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.scss";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/Notfound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
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
              <Footer />
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
