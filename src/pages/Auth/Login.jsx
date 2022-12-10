import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import {
  BsFacebook,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsGithub,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfor,
  LoginFacebook,
  loginUser,
} from "../../app/Reducer/authSlice";
import { Helmet } from "react-helmet";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Eye, setEye] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  //========================================================================================================
  useEffect(() => {
    if (userInfo && userInfo.RoleId) {
      if (userInfo.RoleId === "admin") navigate("/admin");
      else navigate("/");
    }
  }, [navigate, userInfo]);
  useEffect(() => {
    dispatch(getInfor());
  }, [dispatch]);
  const showPassword = () => setEye(!Eye);
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6, "Tối thiểu 6 kí tự").required(),
  });
  //======================================================================================================
  const loginSubmit = async (values) => {
    const action = loginUser(values);
    dispatch(action);
  };

  const responseFacebook = async (response) => {
    try {
      const action = LoginFacebook(response);

      await dispatch(action);
      toast.success("Đăng nhập thành công");
    } catch (error) {}
  };

  return (
    <>
      <Helmet>
        <title>FUDO - Đăng nhập</title>
      </Helmet>
      <div className='flex  h-screen justify-center items-center'>
        <div className='w-[445px]  border-2 flex flex-col justify-between items-center px-5 py-10 space-y-2 shadow-md rounded-md'>
          {/* <img
            className='w-[120px] flex justify-center'
            src='https://viblo.asia/logo_full.svg'
            alt=''
          /> */}

          <h1 className='font-semibold text-xl text-center'>Đăng nhập</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={(values) => {
              loginSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className='space-y-2 w-full'>
                <div className='flex w-full h-9 items-center'>
                  <FaUserCircle className='w-1/5 text-xl bg-[#409eff] h-9 p-2 rounded-l-lg' />
                  <Field
                    type='text'
                    className=' flex-1 rounded-r-lg h-9'
                    name='email'
                    placeholder='Nhập email'
                  />
                </div>
                {errors.username && touched.username ? (
                  <div className='text-red-500'>{errors.username}</div>
                ) : null}
                <div className='flex w-full h-9 items-center relative'>
                  <RiLockPasswordFill className='w-1/5 text-xl bg-[#409eff] h-9 p-2 rounded-l-lg' />
                  <Field
                    type={Eye ? "text" : "password"}
                    className=' flex-1 rounded-r-lg h-9'
                    name='password'
                    placeholder='Nhập mật khẩu'
                  />

                  {Eye ? (
                    <BsFillEyeFill
                      className='absolute right-3 cursor-pointer '
                      onClick={showPassword}
                    />
                  ) : (
                    <BsFillEyeSlashFill
                      className='absolute right-3 cursor-pointer'
                      onClick={showPassword}
                    />
                  )}
                </div>
                {errors.password && touched.password ? (
                  <div className='text-red-500'>{errors.password}</div>
                ) : null}
                <button
                  type='submit'
                  className='text-white w-full bg-[#409eff] h-10 rounded-lg '
                >
                  Đăng nhập
                </button>
              </Form>
            )}
          </Formik>
          <div className='flex justify-between w-full'>
            <Link to={"/reset-password"} className='text-[#409eff]'>
              Quên mật khẩu?
            </Link>
            <Link className='text-[#409eff]' to='/register'>
              Tạo tài khoản
            </Link>
          </div>
          <p>Đăng nhập bằng</p>
          <div className='flex space-x-1 w-full justify-between'>
            <FacebookLogin
              appId='1158486995018850'
              fields='name,email,picture'
              // onClick={componentClicked}
              callback={responseFacebook}
              render={(renderProps) => (
                <button
                  className='flex justify-center items-center space-x-3  border-[1px] px-2 py-1 border-slate-500 flex-1'
                  onClick={renderProps.onClick}
                >
                  <BsFacebook className='text-[#66b1ff] text-2xl' />{" "}
                  <p>Facebook</p>
                </button>
              )}
            />

            <GoogleLogin
              clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
              render={(renderProps) => (
                <button
                  className='flex justify-center items-center space-x-3  border-[1px] p-2 border-slate-500  flex-1 hover:bg-[#66b1ff]'
                  onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <FaGooglePlus className='text-red-500 text-2xl' />{" "}
                  <p>Google</p>
                </button>
              )}
              buttonText='Login'
              // onSuccess={responseGoogle}
              // onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <button className='flex justify-center items-center space-x-3  border-[1px] p-2 border-slate-500  flex-1'>
              <BsGithub className='text-black text-2xl' />
              <p>Github</p>
            </button>
          </div>
        </div>
      </div>
      {/* <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          loginSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
            <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl'>
              <h1 className='text-3xl font-semibold text-center text-purple-700 uppercase'>
                Sign in
              </h1>
              <form className='mt-6'>
                <div className='mb-2'>
                  <label
                    for='email'
                    className='block text-sm font-semibold text-gray-800'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>
                <div className='mb-2'>
                  <label
                    for='password'
                    className='block text-sm font-semibold text-gray-800'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>
                <Link
                  to='/reset-password'
                  className='text-xs text-purple-600 hover:underline'
                >
                  Quên mật khẩu?
                </Link>
                <div className='mt-6'>
                  <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>
                    Đăng nhập
                  </button>
                </div>
              </form>
              <div className='relative flex items-center justify-center w-full mt-6 border border-t'>
                <div className='absolute px-5 bg-white'>Hoặc</div>
              </div>
              <div className='flex mt-4 gap-x-2'>
                <button
                  type='button'
                  className='flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 32 32'
                    className='w-5 h-5 fill-current'
                  >
                    <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                  </svg>
                </button>
                <button className='flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 32 32'
                    className='w-5 h-5 fill-current'
                  >
                    <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                  </svg>
                </button>
                <button className='flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 32 32'
                    className='w-5 h-5 fill-current'
                  >
                    <path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'></path>
                  </svg>
                </button>
              </div>

              <p className='mt-8 text-xs font-light text-center text-gray-700'>
                {" "}
                Chưa có tài?{" "}
                <Link
                  to='/register'
                  href='#'
                  className='font-medium text-purple-600 hover:underline'
                >
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        )}
      </Formik> */}
    </>
  );
};

export default Login;
