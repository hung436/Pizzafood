import { Badge, Label, Select, Table, Tooltip } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Select as SelectV2 } from "antd";
import { AiFillPrinter } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dispatch } from "../../app/Store/store";
import {
  getOrderDetails,
  getOrderSelected,
  updateStatus,
} from "../../app/Reducer/orderSlice";
import { deleteProduct, getProductList } from "../../app/Reducer/productSlice";
import ModalConfirm from "../../components/ModalConfirm";
import { formatTime, getObjKey } from "../../utils";
import ModalViewOrder from "../Admin/views/Order/components/ModalViewOrder";
import { Loading } from "react-admin";
import { Button, Pagination } from "antd";
import { getInfor } from "../../app/Reducer/authSlice";

function Order() {
  const { isLoading, orders, totalOrders } = useSelector(
    (state) => state.order
  );
  const { userOrder } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = React.useState(false);
  const [showOption, setShowOption] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleShow = () => {
    setShowModal(!showModal);
  };
  //==============Page
  const [pageSizes, setPageSizes] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getInfor());
  }, [pageSizes, pageIndex, searchText]);

  /////////===========================================================
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState({});

  const toggleAllSelected = (e) => {
    const { checked } = e.target;
    setAllSelected(checked);

    userOrder &&
      setSelected(
        userOrder.reduce(
          (selected, { id }) => ({
            ...selected,
            [id]: checked,
          }),
          {}
        )
      );
  };
  const toggleSelected = (id) => (e) => {
    if (!e.target.checked) {
      setAllSelected(false);
    }

    setSelected((selected) => ({
      ...selected,
      [id]: !selected[id],
    }));
  };

  const selectedCount = Object.values(selected).filter(Boolean).length;

  const isAllSelected = selectedCount === userOrder?.length;

  const isIndeterminate = selectedCount && selectedCount !== userOrder.length;
  //=====================================================
  const [result, setResult] = React.useState(false);
  const handleDeleteProduct = (id) => {
    try {
      setOpen(true);
      if (result === 1) {
        dispatch(deleteProduct(id));
      }
    } catch (error) {}
  };

  return (
    <div className=' md:px-10 mx-auto w-full bg-white'>
      <ModalConfirm
        open={open}
        content='Bạn có chắc chắn không ?'
        onClose={() => setOpen(!open)}
        result={async () => {
          const id = getObjKey(selected, true);
          await dispatch(deleteProduct(id));
          await dispatch(getProductList());
          userOrder &&
            setSelected(
              userOrder.reduce(
                (selected, { id }) => ({
                  ...selected,
                  [id]: false,
                }),
                {}
              )
            );
        }}
      />
      <ModalViewOrder isModalOpen={showModal} onHide={handleShow} />
      <div className='flex flex-wrap mt-4 '>
        <div className='w-full '>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 rounded"
            }
          >
            <div className='rounded-t mb-0  border-0 '>
              <div className='flex flex-wrap items-center p-2 '>
                <div className='relative w-full max-w-full flex-grow flex-1'>
                  <h3 className={"font-semibold text-lg "}>ĐƠN HÀNG</h3>
                </div>
              </div>
            </div>
            <div className='w-full md:flex md:justify-end my-2'>
              <div className='flex gap-x-4'>
                <div className='ml-3 w-20'>
                  {/* <div className='mb-2 block'>
                  <Label htmlFor='countries' value='Hiển thị' />
                </div> */}
                  <Select
                    required={true}
                    value={pageSizes}
                    onChange={(e) => {
                      setPageSizes(e.target.value);
                    }}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </Select>
                </div>
                <form className='flex w-full flex-row flex-wrap items-center lg:ml-auto mr-3'>
                  <div className='relative flex w-full flex-wrap items-stretch'>
                    <span className='z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
                      <BiSearchAlt />
                    </span>
                    <input
                      type='text'
                      value={searchText}
                      placeholder='Tìm kiếm tại đây...'
                      onChange={(e) => setSearchText(e.target.value)}
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='block w-full overflow-auto md:h-80'>
              {isLoading && <Loading />}
              <Table hoverable={true}>
                <Table.Head className='bg-blue-500'>
                  <Table.HeadCell>Xem chi tiết</Table.HeadCell>
                  <Table.HeadCell>ID</Table.HeadCell>

                  <Table.HeadCell>Phương thức</Table.HeadCell>
                  <Table.HeadCell>Địa chỉ</Table.HeadCell>
                  <Table.HeadCell>Số điện thoại</Table.HeadCell>
                  <Table.HeadCell>Tổng tiền</Table.HeadCell>
                  <Table.HeadCell>Ngày đặt</Table.HeadCell>
                  <Table.HeadCell>Ngày giao dự kiên</Table.HeadCell>
                  <Table.HeadCell>Trạng thái</Table.HeadCell>

                  {/* <Table.HeadCell>
                    <span className='sr-only'>Edit</span>
                  </Table.HeadCell> */}
                </Table.Head>
                <Table.Body className='divide-y'>
                  {userOrder &&
                    userOrder.map((order) => (
                      <Table.Row
                        key={order.id}
                        className='bg-white dark:border-gray-700 dark:bg-gray-800'
                      >
                        <Table.Cell>
                          <Button
                            onClick={async () => {
                              await dispatch(getOrderSelected(order));
                              handleShow();
                            }}
                          >
                            <HiOutlineEye />
                          </Button>
                        </Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                          {order.id}
                        </Table.Cell>

                        <Table.Cell>{order?.methor_payment}</Table.Cell>
                        <Table.Cell>{order?.address}</Table.Cell>
                        <Table.Cell>
                          {order.phone}

                          {/* {order.orderToSizes[0]?.size.name} */}
                        </Table.Cell>
                        <Table.Cell>{order?.totalPrice}</Table.Cell>
                        <Table.Cell>{formatTime(order?.created_at)}</Table.Cell>
                        <Table.Cell>
                          {formatTime(order?.estimatedDeliveryDate)}
                        </Table.Cell>
                        <Table.Cell>
                          <SelectV2
                            defaultValue={order?.status}
                            style={{ width: 120 }}
                            onChange={(value) => {
                              dispatch(
                                updateStatus({
                                  id: order?.id,
                                  data: { status: value },
                                })
                              ).then(() => dispatch(getInfor()));
                            }}
                            options={[
                              {
                                value: 1,
                                label: "Chờ xác nhận",
                                disabled: true,
                              },
                              {
                                value: 2,
                                label: "Đã xác nhận",
                                disabled: true,
                              },
                              {
                                value: 3,

                                label: "Đang giao",
                                disabled: true,
                              },
                              {
                                value: 4,

                                label: "Đã giao",
                                disabled: true,
                              },
                              {
                                value: 5,

                                label: "Hoàn tất",
                                disabled: true,
                              },
                              {
                                value: 0,
                                label: "Hủy",
                                disabled:
                                  order?.status > 1 || order?.status === 0,
                              },
                            ]}
                          />
                          {/* ) : (
                            <Popover
                              content={
                                <Button>
                                  <GrFormEdit />
                                </Button>
                              }
                            >
                              <Button>{getStatus(order.status)}</Button>
                            </Popover>
                          )} */}
                        </Table.Cell>
                        {/* <Table.Cell>
                        <a
                          href='/tables'
                          className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                        >
                          Edit
                        </a>
                      </Table.Cell> */}
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </div>
            <div className='flex justify-end'>
              <Pagination
                // onShowSizeChange={onShowSizeChange}
                current={pageIndex + 1}
                onChange={(page) => setPageIndex(page - 1)}
                total={totalOrders}
                pageSize={pageSizes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
