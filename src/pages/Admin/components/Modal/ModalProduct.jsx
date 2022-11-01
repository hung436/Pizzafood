import React from "react";
import { Modal as Modals, Button } from "flowbite-react";
import { Form, Formik } from "formik";
const handleSubmit = (values) => {
  alert("asd");
};
const defaultValues = {};
export default function Modal({ showModal, hideShow, option }) {
  return (
    <>
      <Formik
        initialValues={defaultValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Modals show={showModal} size='w-screen' onClose={hideShow}>
              <Modals.Header>{option ? "Tạo mới" : "Cập nhật"}</Modals.Header>
              <Modals.Body>
                <div className='space-y-6 p-6'></div>
              </Modals.Body>

              <Modals.Footer>
                <button type='submit'>I accept</button>
                <Button color='gray' onClick={hideShow}>
                  Decline
                </Button>
              </Modals.Footer>
            </Modals>
          </Form>
        )}
      </Formik>
    </>
  );
}
