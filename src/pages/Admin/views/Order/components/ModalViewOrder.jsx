import { Modal } from "antd";
import { Table } from "flowbite-react";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import React from "react";
import { useSelector } from "react-redux";

export default function ModalViewOrder({ isModalOpen, onHide }) {
  const { orderSelected } = useSelector((state) => state.order);
  return (
    <>
      <Modal
        title='Chi tiết đơn hàng'
        onCancel={onHide}
        open={isModalOpen}
        footer={null}
        width={1000}
      >
        <Table>
          <TableHead>
            <TableCell>ID Sản phẩm</TableCell>
            <TableCell>Hình ảnh</TableCell>
            <TableCell>Kích cỡ</TableCell>
            <TableCell>Số lượng</TableCell>
            <TableCell>Giá</TableCell>
          </TableHead>
          <TableBody>
            {orderSelected &&
              orderSelected.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.productId}</TableCell>
                  <TableCell>
                    <img className='w-20' src={item.imageLink} alt={item.id} />
                  </TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Modal>
    </>
  );
}
