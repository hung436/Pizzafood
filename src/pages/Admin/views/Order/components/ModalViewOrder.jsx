import { Badge, Modal, Tag } from "antd";
import { Table } from "flowbite-react";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import React, { useRef } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { getStatus } from "../../../../../utils";
export default function ModalViewOrder({ isModalOpen, onHide }) {
  const { orderSelected } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.auth);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Modal
        title='Chi tiết đơn hàng'
        onCancel={onHide}
        open={isModalOpen}
        footer={null}
        width={1000}
        style={{
          top: 20,
        }}
      >
        <div className='flex justify-end py-1'>
          <button
            onClick={handlePrint}
            className='bg-blue-500 px-2 py-1 rounded flex space-x-1 justify-center items-center'
          >
            <AiFillPrinter size={25} /> <span>In</span>
          </button>
        </div>
        <div className='px-4 py-5 flex justify-end  sm:gap-4 sm:px-6'>
          <dt className='text-sm font-medium text-gray-500'>Trạng thái</dt>
          <dd className='mt-1 text-sm text-gray-900 sm:mt-0'>
            <Tag color='magenta'> {getStatus(orderSelected?.status)} </Tag>
          </dd>
        </div>
        <div ref={componentRef}>
          <div className='border-t border-gray-200'>
            <dl>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Mã đơn hàng
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {orderSelected?.id}
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Họ và tên khách hàng
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {orderSelected?.user?.name
                    ? orderSelected?.user?.name
                    : userInfo?.Name}
                </dd>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Số điện thoại
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {orderSelected?.phone}
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Địa chỉ email
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {orderSelected?.user?.email
                    ? orderSelected?.user?.email
                    : userInfo?.Email}
                </dd>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Địa chỉ giao hàng
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {orderSelected?.address}
                </dd>
              </div>
              <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Tổng hóa đơn
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  {(orderSelected?.totalPrice * 1).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </dd>
              </div>
              <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Ghi chú</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'></dd>
              </div>
            </dl>
          </div>
          <Table>
            <TableHead>
              <TableCell>ID Sản phẩm</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Kích cỡ</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Giá (Đồng)</TableCell>
            </TableHead>
            <TableBody>
              {orderSelected &&
                orderSelected?.orderDetails.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.productId}</TableCell>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>
                      <img
                        className='w-20'
                        src={item.imageLink}
                        alt={item.id}
                      />
                    </TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {(item.price * 1).toLocaleString({
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </Modal>
    </>
  );
}
