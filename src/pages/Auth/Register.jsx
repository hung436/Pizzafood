import React, { useEffect, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { register } from "../../api/Auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [Eye, setEye] = useState(false);
  useEffect(() => {
    document.title = "Đăng ký - Blogme";
  }, []);
  const showPassword = () => setEye(!Eye);
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Tên là bắt buộc"),

    email: Yup.string()
      .email("Phải là một email hợp lệ")
      .required("Email là bắt buộc"),
    password: Yup.string()
      .min(6, "Tối thiểu 6 kí tự")
      .required("Mật khẩu là bắt buộc"),
    password_confirmation: Yup.string()
      .min(6, "Tối thiểu 6 kí tự")
      .required("Nhập lại mật khẩu là bắt buộc")
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
    rules: Yup.bool()
      .required()
      .oneOf([true], "Vui lòng đồng ý với Điều khoản dịch vụ của chúng tôi "),
  });
  const registerSubmit = async (values) => {
    try {
      const res = await register(values);
      toast.success("Đăng ký thành công");
      navigate("/login");
    } catch (error) {}
  };
  return (
    <div className='flex  md:h-screen justify-center items-center'>
      <div className='md:w-[445px]  border-2 flex flex-col justify-between items-center px-5 py-10 space-y-2 shadow-md rounded-md'>
        <h1 className='font-semibold text-xl'>Đăng ký tài khoản cho FUDO</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",

            password: "",
            password_confirmation: "",
            rules: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            registerSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className='space-y-2 w-full'>
              <div className='flex w-full h-9 items-center'>
                <Field
                  type='text'
                  className=' flex-1 rounded-lg h-9'
                  name='name'
                  placeholder='Tên của bạn'
                />
              </div>
              {errors.name && touched.name ? (
                <div className='text-red-500'>{errors.name}</div>
              ) : null}
              <div className='flex w-full h-9 items-center'>
                <Field
                  type='email'
                  className=' flex-1 rounded-lg h-9'
                  name='email'
                  placeholder='Email'
                />
              </div>
              {errors.email && touched.email ? (
                <div className='text-red-500'>{errors.email}</div>
              ) : null}

              <div className='flex w-full h-9 items-center relative'>
                <Field
                  type={Eye ? "text" : "password"}
                  className=' flex-1 rounded-lg h-9'
                  name='password'
                  placeholder='Mật khẩu'
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
              <div className='flex w-full h-9 items-center relative'>
                <Field
                  type={Eye ? "text" : "password"}
                  className=' flex-1 rounded-lg h-9'
                  name='password_confirmation'
                  placeholder='Xác nhận mật khẩu cuả bạn'
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
              {errors.password_confirmation && touched.password_confirmation ? (
                <div className='text-red-500'>
                  {errors.password_confirmation}
                </div>
              ) : null}
              <div className='flex w-full h-9 items-center space-x-1'>
                <Field type='checkbox' name='rules' />
                <p>Tôi đồng ý với những diều khoản</p>
              </div>
              {errors.rules && touched.rules ? (
                <div className='text-red-500'>{errors.rules}</div>
              ) : null}
              <button
                type='submit'
                className='font-bold text-white w-full border-gray-300 bg-[#5488c7] p-2  shadow-sm hover:bg-[#5488c098] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 h-10 rounded-lg'
              >
                Đăng ký
              </button>
            </Form>
          )}
        </Formik>

        <p>Đăng nhập bằng</p>
        <button>Facebook</button>
        <button>Google</button>
        <button>Github</button>
      </div>
    </div>
  );
};

export default Register;
