import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.scss";
import { useRoutes } from "react-router-dom";
import { dispatch } from "./app/Store/store";
import { DatePicker } from "antd";
import "./styles/globals.css";
import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/Loading";
import routes from "./routes/route";
// import { dispatch } from "./app/Store/store";
import { getInfor } from "./app/Reducer/authSlice";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  console.log("userInfo", userInfo);
  // const PrivateRoute = ({ children }) => {
  //   return userInfo && userInfo.RoleId === 2 ? (
  //     children
  //   ) : (
  //     <Navigate to='/login' />
  //   );
  // };
  // const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getInfor());
    } catch (err) {
      console.log(err);
    }
  }, []);
  const routing = useRoutes(routes(userInfo && userInfo.RoleId === "admin"));
  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>{routing}</Suspense>
    </div>
  );
}

export default App;
