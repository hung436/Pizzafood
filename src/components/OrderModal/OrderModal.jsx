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
// import Order from "../../pages/Order"
import { Link } from "react-router-dom";
import Address from "../Address";
function OrderModal({ opened, setOpened, showModal }) {
  const { userInfo } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);
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
          address: userInfo?.Address || "",
        }}
        validationSchema={SigninSchema}
        onSubmit={async (values) => {
          try {
            let data = {};
            if (values && values.address) {
              data = {
                total: price,
                payment_method: "Thanh toán khi nhận hàng",
                phone: values.phone,
                address: values.address,
                products: [...carts],
              };
            }
            await dispatch(paymentSuccess(data));
            toast.success("Đặt hàng thành công");
            // navigate("/");
          } catch (error) {}
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.formContainer}>
            <Field type='text' name='name' placeholder='Name' />
            <Field type='text' name='phone' placeholder='Phone Number' />

            <Field type='text' name='address' placeholder='address' />

            <Address />
            <textarea name='note' rows={3} placeholder='Ghi chú'></textarea>

            <span>
              Bạn sẽ trả <span>{price}</span> đồng khi nhận hàng
            </span>
            <Link to='/order'>
              <button type='submit' className='btn'>
                Đặt hàng
              </button>
            </Link>
          </Form>
        )}
      </Formik>
      {/* Modal content */}
    </Modal>
  );
}

export default OrderModal;
