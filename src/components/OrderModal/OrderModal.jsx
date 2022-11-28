import { Modal } from "antd";
import { Formik, Form, Field } from "formik";
import { Button } from "react-admin";
import { useDispatch, useSelector } from "react-redux";
import css from "./OrderModal.module.scss";
import * as Yup from "yup";
import { cartTotalSelector } from "../../app/Reducer/selector";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { paymentSuccess } from "../../app/Reducer/cartSlice";
function OrderModal({ opened, setOpened, showModal }) {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SigninSchema = Yup.object().shape({
    // name: Yup.string().email().required(),
    // password: Yup.string().min(6, "Tối thiểu 6 kí tự").required(),
  });
  const price = useSelector(cartTotalSelector);

  return (
    <Modal
      title='Đặt hàng'
      open={opened}
      onCancel={() => {
        setOpened(false);
      }}
      footer={[]}
    >
      <Formik
        initialValues={{
          name: userInfo?.Name || "dfadssd",
          phone: userInfo?.Phone || "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          toast.success("Đặt hàng thành công");
          dispatch(paymentSuccess());
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.formContainer}>
            <Field type='text' name='name' placeholder='Name' />
            <Field type='text' name='phone' placeholder='Phone Number' />

            {/* <div>
          <select
            class='form-select form-select-sm mb-3'
            id='city'
            aria-label='.form-select-sm'
          >
            <option value='' selected>
              Chọn tỉnh thành
            </option>
          </select>

          <select
            class='form-select form-select-sm mb-3'
            id='district'
            aria-label='.form-select-sm'
          >
            <option value='' selected>
              Chọn quận huyện
            </option>
          </select>

          <select
            class='form-select form-select-sm'
            id='ward'
            aria-label='.form-select-sm'
          >
            <option value='' selected>
              Chọn phường xã
            </option>
          </select>
        </div> */}
            <Field type='text' name='address' placeholder='address' />
            <textarea name='address' rows={3} placeholder='Ghi chú'></textarea>

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
