import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, message } from "antd";
import User from "../User";
import userApi from "../../../../../api/User";
import { dispatch } from "../../../../../app/Store/store";
import { useSelector } from "react-redux";
import { getUserById, updateUser } from "../../../../../app/Reducer/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../../../components/Loading";
function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [province, setProvince] = useState([]);
  const { userSelected, isLoading } = useSelector((state) => state.users);

  const [provinceSelected, setProvinceSelected] = useState();
  const [district, setDistrict] = useState([]);
  useEffect(() => {
    dispatch(getUserById(id));
  }, [id]);
  ////===Form
  const defaultValues = {
    name: userSelected?.name || "",
    email: userSelected?.email || "",
    province: userSelected?.address?.split(",")[2] || "",
    district: userSelected?.address?.split(",")[1] || "",
    street_address: userSelected?.address?.split(",")[0] || "",
    phone: userSelected?.phone || "",
  };
  const Schema = Yup.object().shape({
    // name: Yup.string().email().required("Email Không để trống"),
    // password: Yup.string().min(6, "Tối thiểu 6 kí tự").required("Không để trống"),
  });
  const Submit = async (values) => {
    try {
      const body = {
        id: userSelected.id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        address:
          values.street_address + "," + values.district + "," + values.province,
      };
      await dispatch(updateUser(body));
      toast.success("Sửa thành công");
      navigate(-1);
    } catch (error) {}
  };
  useEffect(() => {
    (async () => {
      const { data } = await axios.post(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        "",
        { headers: { token: "7acd4626-47f8-11ed-8636-7617f3863de9" } }
      );
      setProvince(data.data);
    })();
    (async () => {
      const { data } = await axios.post(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
        { province_id: parseInt(provinceSelected) },
        { headers: { token: "7acd4626-47f8-11ed-8636-7617f3863de9" } }
      );
      setDistrict(data.data);
    })();
  }, [provinceSelected]);

  return (
    <div>
      {isLoading && <Loading />}
      <Formik
        enableReinitialize={true}
        initialValues={defaultValues}
        validationSchema={Schema}
        onSubmit={(values) => {
          Submit(values);
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <div className='mt-5 md:col-span-2 md:mt-0'>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Họ và Tên
                      </label>
                      <Field
                        type='text'
                        name='name'
                        id='name'
                        autoComplete='given-name'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Số điện thoại
                      </label>
                      <Field
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='family-name'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Địa chỉ email
                      </label>
                      <Field
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='province'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Tỉnh/Thành Phố
                      </label>
                      <Field
                        as='select'
                        name='province'
                        autoComplete='province-name'
                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      >
                        <option value={null} selected>
                          ---Chọn Tỉnh/Thành Phố
                        </option>
                        {province &&
                          province.map((item) => (
                            <option
                              onClick={() => {
                                setProvinceSelected(item.ProvinceID);
                              }}
                              key={item.ProvinceID}
                              value={item.ProvinceName}
                            >
                              {item.ProvinceName}
                            </option>
                          ))}
                      </Field>
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='district'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Quận/Huyện
                      </label>
                      <Field
                        as={"select"}
                        id='district'
                        name='district'
                        // disabled={provinceSelected === null}
                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      >
                        <option value={null} selected>
                          ---Chọn Quận/Huyện
                        </option>
                        {district &&
                          provinceSelected !== null &&
                          district.map((item) => (
                            <option
                              key={item.DistrictID}
                              value={item.DistrictName}
                            >
                              {item.DistrictName}
                            </option>
                          ))}
                      </Field>
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='street-address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Street address
                      </label>
                      <Field
                        type='text'
                        name='street_address'
                        id='street-address'
                        autoComplete='street-address'
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-center space-x-5'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Save
                  </button>
                  <button
                    type='button'
                    onClick={() => navigate(-1)}
                    className='inline-flex justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateUser;
