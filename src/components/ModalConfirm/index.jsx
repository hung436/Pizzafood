import { Button, Modal } from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { confirmable } from "react-confirm";
const ModalConfirm = ({ open, onClose, content, result }) => {
  return (
    <>
      <Modal show={open} size='md' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {content}
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => {
                  result();
                  onClose();
                }}
              >
                Đồng ý
              </Button>
              <Button
                color='gray'
                onClick={() => {
                  onClose();
                }}
              >
                Hủy
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalConfirm;
