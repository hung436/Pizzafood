import React, { useEffect, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { register } from "../../api/Auth";
import ReCAPTCHA from "react-google-recaptcha";
const ResetPassword = () => {
  const [Eye, setEye] = useState(false);
  useEffect(() => {
    document.title = "Đăng ký - Blogme";
    window.recaptchaOptions = { lang: "vi" };
  }, []);
  const showPassword = () => setEye(!Eye);
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Tên là bắt buộc"),
    username: Yup.string().required("Tên tài khoản là bắt buộc"),
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
    const res = await register(values);
    alert(JSON.stringify(res));
  };
  return (
    <div className='flex  md:h-screen justify-center items-center'>
      <div className='md:w-[445px]  border-2 flex flex-col justify-between items-center px-5 py-10 space-y-2 shadow-md rounded-md'>
        <h1 className='font-semibold text-xl'>Quên mật khẩu</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            username: "",
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
                  placeholder='Email của bạn'
                />
              </div>
              {errors.name && touched.name ? (
                <div className='text-red-500'>{errors.name}</div>
              ) : null}
               <ReCAPTCHA sitekey='6LckfVUjAAAAAAiG6CfNHxhHZec3LXvdvQG7YaU6' />,
              <button
                type='submit'
                className='font-bold text-white w-full border-gray-300 bg-[#5488c7] p-2  shadow-sm hover:bg-[#5488c098] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 h-10 rounded-lg'
              >
                Gửi mật khẩu
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
