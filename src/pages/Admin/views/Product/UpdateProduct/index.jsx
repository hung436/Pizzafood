import { useEffect, useState, useRef } from "react";
import { Modal as Modals, Button } from "flowbite-react";
import { Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";

import MyEditor from "../../../../../components/form-control/RickText";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { dispatch } from "../../../../../app/Store/store";
import { getCategoryList } from "../../../../../app/Reducer/categorySlice";
import MultiSelect from "../../../../../components/form-control/MultiSelect/MultiSelect";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import productApi from "../../../../../api/Product";

export default function UpdateProduct({ showModal, hideShow, option = true }) {
  const { id } = useParams();
  const [imgProduct, setImgProduct] = useState();
  const [priceInput, setPriceInput] = useState();
  const [sizeInput, setSizeInput] = useState();
  const [product, setProduct] = useState({});
  const [inputSizeArray, setInputSizeArray] = useState([]);
  const imgRef = useRef();
  const navigate = useNavigate();
  const categoryList = useSelector((state) => state.category.categories);
  console.log("catelist", categoryList);
  //=================================================================================

  const getProductById = async () => {
    try {
      const { data } = await productApi.getProductById(id);
      setProduct(data);
    } catch (error) {}
  };
  useEffect(() => {
    getProductById();
    dispatch(getCategoryList());
  }, []);
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
    console.log(sizeInput);
  }, [sizeInput]);
  useEffect(() => {
    return () => {
      imgProduct && URL.revokeObjectURL(imgProduct.preview);
    };
  }, [imgProduct]);
  const Submit = (values) => {
    // console.log(values);
    const { name, category, title, promotionPrice, price } = values;
    const data = new FormData();
    data.append("name", name);
    data.append("category", category);
    data.append("title", title);
    data.append("promotionPrice", promotionPrice);
    data.append("price", price);
    console.log(...data);
  };
  //========================================
  const options = [
    { value: 1, label: "S" },
    { value: 2, label: "M" },
    { value: 3, label: "L" },
  ];
  const defaultValues = {
    name: "",
    price: [],
    category: "",
    promotionPrice: "",
    title: "",
  };
  const Schema = Yup.object().shape({
    // name: Yup.string().email().required("Email Không để trống"),
    // password: Yup.string().min(6, "Tối thiểu 6 kí tự").required("Không để trống"),
  });

  return (
    <>
      <Formik
        initialValues={defaultValues}
        validationSchema={Schema}
        onSubmit={(values) => {
          Submit(values);
        }}
      >
        {({ errors, touched, handleSubmit, handleChange, values }) => (
          <Form className='bg-white'>
            <h3 className='font-extrabold font-sans text-2xl  text-blue-600 ml-10'>
              {option ? "Tạo mới" : "Cập nhật"}
            </h3>
            <div className='overflow-y-scroll'>
              <div className='space-y-6 p-6'>
                <h2 className='font-medium text-white p-2 bg-blue-500'>
                  1. Thông tin chung
                </h2>
                <div className='grid md:grid-cols-4 grid-cols-1 md:gap-6'>
                  <div className='relative z-0 mb-6 w-full group ' draggable>
                    <Field
                      type='text'
                      name='name'
                      id='floating_name'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                    />
                    <label
                      for='floating_name'
                      className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Tên sản phẩm
                    </label>
                  </div>
                  <div className='relative z-0 mb-6 w-full group'>
                    <Field
                      as='select'
                      defaultValue={1}
                      id='underline_select'
                      name='category'
                      className='block p-2.5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer '
                    >
                      <option selected>Chọn Loai</option>
                      {categoryList.map((cate) => (
                        <option key={cate.id} value={cate.id}>
                          {cate.name}
                        </option>
                      ))}

                      {/* <option value='DE'>XL</option> */}
                    </Field>
                  </div>
                  <div className='relative z-0 mb-6 w-full group'>
                    <Field
                      type='text'
                      name='title'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                    />
                    <label
                      for='floating_title'
                      className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Tiêu đề
                    </label>
                  </div>

                  <div className='relative z-0 mb-6 w-full group'>
                    <Field
                      type='number'
                      name='promotionPrice'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Giảm giá (%)
                    </label>
                  </div>

                  {/* <div className='relative z-0 mb-6 w-full group'>
                    <Field
                      type='text'
                      name='floating_company'
                      id='floating_company'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                    />
                    <label
                      for='floating_company'
                      className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Company (Ex. Google)
                    </label>
                  </div> */}
                  <div className='md:col-span-2 p-2 border-2'>
                    <div className='mb-6 w-full '>
                      <MultiSelect
                        value={sizeInput}
                        options={options}
                        handleChange={(value) => setSizeInput(value)}
                      />
                    </div>
                    <FieldArray
                      name='price'
                      render={() => (
                        <div>
                          {sizeInput &&
                            sizeInput.length > 0 &&
                            sizeInput.map((price, index) => (
                              <div
                                key={price.value}
                                className='relative z-0 mb-6 w-full group'
                              >
                                <Field
                                  type='number'
                                  name={`price.${price.value}`}
                                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                  placeholder=' '
                                />
                                <label
                                  for='floating_pricel'
                                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                                >
                                  Giá {" Size " + price.label}
                                </label>
                              </div>
                            ))}
                        </div>
                      )}
                    />
                  </div>

                  <div className='md:col-span-4'>
                    <h2 className='font-medium text-white p-2 bg-blue-500 mb-2'>
                      2. Chi tiết
                    </h2>
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
                            onChange={(e) => {
                              handleInputImgChange();
                              handleChange(e);
                            }}
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
            </div>

            <div className='flex justify-center space-x-5'>
              <span className='sm:ml-3'>
                <button
                  type='submit'
                  className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <AiOutlineCheck
                    className='-ml-1 mr-2 h-5 w-5'
                    aria-hidden='true'
                  />
                  Lưu
                </button>
              </span>
              <span className='sm:ml-3'>
                <button
                  onClick={() => navigate(-1)}
                  type='button'
                  className='inline-flex items-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <AiOutlineClose
                    className='-ml-1 mr-2 h-5 w-5'
                    aria-hidden='true'
                  />
                  Đóng
                </button>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
