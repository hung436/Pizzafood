import { Modal } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-admin";
import { useDispatch, useSelector } from "react-redux";
import css from "./OrderModal.module.scss";
import * as Yup from "yup";
import { cartTotalSelector } from "../../app/Reducer/selector";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { paymentSuccess } from "../../app/Reducer/cartSlice";
// import Order from "../../pages/Order"
import { Link } from "react-router-dom";
import Address from "../Address";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function OrderModal({ opened, setOpened, showModal }) {
  const { userInfo } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SigninSchema = Yup.object().shape({
    // name: Yup.string().email().required(),
    // password: Yup.string().min(6, "Tối thiểu 6 kí tự").required(),
    name: Yup.string().required(),
    phone: Yup.string().required(),
    province: Yup.string().required(),
    district: Yup.string().required(),
    street_address: Yup.string().required(),
  });
  const price = useSelector(cartTotalSelector);

  const [province, setProvince] = useState();
  const [provinceSelected, setProvinceSelected] = useState();
  const [district, setDistrict] = useState();

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
    <Modal
      title='Xác nhận thông tin'
      open={opened}
      onCancel={() => {
        setOpened(false);
      }}
      footer={[]}
    >
      <Formik
        initialValues={{
          name: userInfo?.Name || "",
          phone: userInfo?.Phone || "",
          province: userInfo?.Address?.split(",")[2] || "",
          district: userInfo?.Address?.split(",")[1] || "",
          street_address: userInfo?.Address?.split(",")[0] || "",
        }}
        validationSchema={SigninSchema}
        onSubmit={async (values) => {
          try {
            let data = {};
            if (values) {
              data = {
                total: price,
                payment_method: "Thanh toán khi nhận hàng",
                phone: values.phone,
                address:
                  values.street_address +
                  "," +
                  values.district +
                  "," +
                  values.province,
                products: [...carts],
              };
            }
            await dispatch(paymentSuccess(data));
            toast.success("Đặt hàng thành công");

            navigate("/cart/success");
          } catch (error) {}
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.formContainer}>
            <Field type='text' name='name' placeholder='Name' />
            <ErrorMessage name='name' />
            <Field type='text' name='phone' placeholder='Phone Number' />
            <ErrorMessage name='phone' />
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
            <ErrorMessage name='province' />
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
                  <option key={item.DistrictID} value={item.DistrictName}>
                    {item.DistrictName}
                  </option>
                ))}
            </Field>{" "}
            <ErrorMessage name='district' />
            <Field
              type='text'
              name='street_address'
              placeholder='Tên đuòng, Xã'
            />
            <ErrorMessage name='street_address' />
            <textarea name='note' rows={3} placeholder='Ghi chú'></textarea>
            <span>
              Bạn sẽ trả <span>{price}</span> đồng khi nhận hàng
            </span>
            <button type='submit' className='btn'>
              Đặt hàng
            </button>
          </Form>
        )}
      </Formik>
      {/* Modal content */}
    </Modal>
  );
}

export default OrderModal;
