import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaGooglePlus } from 'react-icons/fa';
import GoogleLogin from 'react-google-login';
import {
  BsFacebook,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsGithub,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { login } from '../../api/Auth';
const Login = () => {
  const [Eye, setEye] = useState(false);
  useEffect(() => {
    document.title = 'Đăng nhập - Blogme';
  }, []);
  const showPassword = () => setEye(!Eye);
  const SigninSchema = Yup.object().shape({
    username: Yup.string().required('Invalid username'),
    password: Yup.string().min(6, 'Tối thiểu 6 kí tự').required('Required'),
  });
  const loginSubmit = async (values) => {
    const res = await login(values);
    alert(res);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className='flex  h-screen justify-center items-center'>
      <div className='w-[445px]  border-2 flex flex-col justify-between items-center px-5 py-10 space-y-2 shadow-md rounded-md'>
        <img
          className='w-[120px] flex justify-center'
          src='https://viblo.asia/logo_full.svg'
          alt=''
        />
        <h1 className='font-semibold text-xl text-center'>
          Đăng nhập vào 12A1
        </h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={SigninSchema}
          onSubmit={(values) => {
            loginSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className='space-y-2 w-full'>
              <div className='flex w-full h-9 items-center'>
                <FaUserCircle className='w-1/5 text-xl bg-[#5488c7] h-9 p-2 rounded-l-lg' />
                <Field
                  type='text'
                  className=' flex-1 rounded-r-lg h-9'
                  name='username'
                />
              </div>
              {errors.username && touched.username ? (
                <div className='text-red-500'>{errors.username}</div>
              ) : null}
              <div className='flex w-full h-9 items-center relative'>
                <RiLockPasswordFill className='w-1/5 text-xl bg-[#5488c7] h-9 p-2 rounded-l-lg' />
                <Field
                  type={Eye ? 'text' : 'password'}
                  className=' flex-1 rounded-r-lg h-9'
                  name='password'
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
                className='text-white w-full bg-[#5488c7] h-10 rounded-lg '
              >
                Đăng nhập
              </button>
            </Form>
          )}
        </Formik>
        <div className='flex justify-between w-full'>
          <p>Quên mật khẩu?</p>
          <Link to='/register'>Tạo tài khoản</Link>
        </div>
        <p>Đăng nhập bằng</p>

        <FacebookLogin
          appId='1158486995018850'
          // autoLoad={true}
          fields='name,email,picture'
          // onClick={componentClicked}
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              className='flex justify-center items-center space-x-3'
              onClick={renderProps.onClick}
            >
              <BsFacebook className='text-blue-500 text-2xl' /> <p>Facebook</p>
            </button>
          )}
        />

        <GoogleLogin
          clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
          render={(renderProps) => (
            <button
              className='flex justify-center items-center space-x-3'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FaGooglePlus className='text-red-500 text-2xl' /> <p>Google</p>
            </button>
          )}
          buttonText='Login'
          // onSuccess={responseGoogle}
          // onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <button className='flex justify-center items-center space-x-3'>
          <BsGithub className='text-black text-2xl' />
          <p>Github</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
