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
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { login, loginFB } from "../../api/Auth";
import { useDispatch } from "react-redux";
import { LoginFacebook } from "../../app/Reducer/authSlice";
const Login = () => {
  const [Eye, setEye] = useState(false);
  useEffect(() => {
    document.title = "Đăng nhập - Blogme";
  }, []);
  const showPassword = () => setEye(!Eye);
  const SigninSchema = Yup.object().shape({
    username: Yup.string().required("Email Không để trống"),
    password: Yup.string()
      .min(6, "Tối thiểu 6 kí tự")
      .required("Không để trống"),
  });
  const loginSubmit = async (values) => {
    const res = await login(values);
    toast.warn("hung");
  };
  const dispatch = useDispatch();
  const responseFacebook = async (response) => {
    const action = LoginFacebook(response);

    let res = await dispatch(action);
    console.log("res", res);
  };
  return (
    <div className='flex  h-screen justify-center items-center'>
      <div className='w-[445px]  border-2 flex flex-col justify-between items-center px-5 py-10 space-y-2 shadow-md rounded-md'>
        <img
          className='w-[120px] flex justify-center'
          src='https://viblo.asia/logo_full.svg'
          alt=''
        />
        <h1 className='font-semibold text-xl text-center'>Đăng nhập</h1>
        <Formik
          initialValues={{
            username: "",
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
                  name='username'
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
          <p className='text-[#409eff]'>Quên mật khẩu?</p>
          <Link className='text-[#409eff]' to='/register'>
            Tạo tài khoản
          </Link>
        </div>
        <p>Đăng nhập bằng</p>
        <div className='flex space-x-1 w-full justify-between'>
          <FacebookLogin
            appId='1158486995018850'
            autoLoad={true}
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
                <FaGooglePlus className='text-red-500 text-2xl' /> <p>Google</p>
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
  );
};

export default Login;