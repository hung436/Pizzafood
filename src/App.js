import Header from './components/Header';
import './styles/App.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/Notfound';
import Login from './pages/Auth/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
