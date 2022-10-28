import React from "react";
import { Modal as Modals, Button } from "flowbite-react";
export default function Modal({ showModal, hideShow, option }) {
  return (
    <>
      <Modals show={showModal} size='7xl' onClose={hideShow}>
        <Modals.Header>{option ? "Tạo mới" : "Cập nhật"}</Modals.Header>
        <Modals.Body>
          <div className='space-y-6 p-6'></div>
        </Modals.Body>
        <Modals.Footer>
          <Button>I accept</Button>
          <Button color='gray' onClick={hideShow}>
            Decline
          </Button>
        </Modals.Footer>
      </Modals>
    </>
  );
}
