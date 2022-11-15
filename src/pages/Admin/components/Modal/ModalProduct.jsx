import { useEffect, useState, useRef } from "react";
import { Modal as Modals, Button } from "flowbite-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import MyEditor from "../../../../components/form-control/RickText";

export default function Modal({ showModal, hideShow, option }) {
  const [imgProduct, setImgProduct] = useState();
  const imgRef = useRef();
  const handleInputImgChange = () => {
    const selectedFIles = [];
    const targetFiles = imgRef.current.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    // files.forEach((item) => {});
    // file.preview = URL.createObjectURL(file);
    // console.log(file.preview);
    setImgProduct(selectedFIles);
  };
  useEffect(() => {
    return () => {
      imgProduct && URL.revokeObjectURL(imgProduct.preview);
    };
  }, [imgProduct]);
  const Submit = (values) => {
    alert("asd");
  };
  const defaultValues = { name: "" };
  const Schema = Yup.object().shape({
    // name: Yup.string().email().required("Email Không để trống"),
    // password: Yup.string().min(6, "Tối thiểu 6 kí tự").required("Không để trống"),
  });
  const handleRLDDChange = (newItems) => {
    setImgProduct(newItems);
  };
  return (
    <>
      <Modals
        position='top-center'
        show={showModal}
        size='w-screen'
        onClose={hideShow}
      >
        <Formik
          initialValues={defaultValues}
          validationSchema={Schema}
          onSubmit={(values) => {
            Submit(values);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form>
              <Modals.Header>{option ? "Tạo mới" : "Cập nhật"}</Modals.Header>
              <Modals.Body className='overflow-y-scroll'>
                <div className='space-y-6 p-6'>
                  <h2 className='font-medium text-blue-500'>
                    1. Thông tin chung
                  </h2>
                  <div className='grid md:grid-cols-4 grid-cols-1 md:gap-6'>
                    <div className='relative z-0 mb-6 w-full group ' draggable>
                      <input
                        type='text'
                        name='name'
                        // id='floating_email'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label
                        // for='floating_email'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Tên sản phẩm
                      </label>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                      <select
                        defaultValue={"US"}
                        id='underline_select'
                        className='block p-2.5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer '
                      >
                        <option selected>Chọn Loai</option>
                        <option value='US'>Pizza</option>
                        <option value='CA'>Nuoc</option>
                        <option value='FR'>Mi</option>
                        {/* <option value='DE'>XL</option> */}
                      </select>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                      <input
                        type='text'
                        name='title'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_repeat_password'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Tiêu Tiêu đề
                      </label>
                    </div>

                    <div className='relative z-0 mb-6 w-full group'>
                      {/* <label for='underline_select' className='sr-only'>
                          Underline select
                        </label> */}
                      <select
                        defaultValue={"US"}
                        id='underline_select'
                        className='block p-2.5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer '
                      >
                        <option selected>Chọn size</option>
                        <option value='US'>S</option>
                        <option value='CA'>M</option>
                        <option value='FR'>L</option>
                        <option value='DE'>XL</option>
                      </select>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                      <input
                        type='number'
                        name='floating_last_name'
                        id='floating_last_name'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_last_name'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Giá
                      </label>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                      <input
                        type='number'
                        name='floating_phone'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Giảm giá (%)
                      </label>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                      <input
                        type='text'
                        name='floating_company'
                        id='floating_company'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_company'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Company (Ex. Google)
                      </label>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                      <input
                        type='text'
                        name='floating_company'
                        id='floating_company'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_company'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Company (Ex. Google)
                      </label>
                    </div>
                    <div className='md:col-span-4'>
                      <MyEditor />
                    </div>
                    <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                      <div className='space-y-1 text-center'>
                        <svg
                          className='mx-auto h-12 w-12 text-gray-400'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <div className='flex text-sm text-gray-600'>
                          <label
                            htmlFor='file-upload'
                            className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                          >
                            <span>Upload a file</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              onChange={handleInputImgChange}
                              ref={imgRef}
                              accept='image/*'
                              multiple
                            />
                          </label>
                          <p className='pl-1'>or drag and drop</p>
                        </div>
                        <p className='text-xs text-gray-500'>
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    <div className='md:col-span-3 flex flex-wrap'>
                      {
                        imgProduct &&
                          // <RLDD
                          //   items={imgProduct}
                          //   itemRenderer={(item, index) => {
                          //     return (
                          imgProduct.map((item, index) => (
                            <img key={index} width={"25%"} src={item} alt='' />
                          ))

                        //     );
                        //   }}
                        //   onChange={handleRLDDChange}
                        // />
                      }
                    </div>
                  </div>
                </div>
              </Modals.Body>

              <Modals.Footer>
                <Button type='submit'>Tạo</Button>
                <Button color='gray' onClick={hideShow}>
                  Đóng
                </Button>
              </Modals.Footer>
            </Form>
          )}
        </Formik>
      </Modals>
    </>
  );
}
