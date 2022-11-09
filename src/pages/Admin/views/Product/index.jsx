import {
  Badge,
  Checkbox,
  Label,
  Select,
  Table,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import Paginate from "../../../../components/Paginate/Paginate";

import Modal from "../../components/Modal/ModalProduct";
import { getProductList } from "../../../../app/Reducer/productSlice";
import { dispatch } from "../../../../app/Store/store";
import { useNavigate } from "react-router-dom";

function Product() {
  const [showModal, setShowModal] = React.useState(false);
  const [showOption, setShowOption] = React.useState(false);
  const [productList, setProductList] = React.useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  // const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleShow = (option) => {
    setShowModal(!showModal);
    option ? setShowOption(false) : setShowOption(true);
  };
  useEffect(() => {
    async function getProduct() {
      const { payload } = await dispatch(getProductList());
      setProductList(payload);
    }
    getProduct();
    console.log("get", productList);
  }, []);
  const onChangeToggleSwitch = () => {};
  /////////===========================================================
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(productList.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;

    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  console.log(isCheck);
  return (
    <div className=' md:px-10 mx-auto w-full'>
      <Modal showModal={showModal} hideShow={handleShow} option={showOption} />
      <div className='flex flex-wrap mt-4 '>
        <div className='w-full '>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-300 "
            }
          >
            <div className='rounded-t mb-0 py-3 border-0 '>
              <div className='flex flex-wrap items-center p-3'>
                <div className='relative w-full max-w-full flex-grow flex-1'>
                  <h3 className={"font-semibold text-lg "}>QUẢN LÝ SẢN PHẨM</h3>
                </div>
                <div className='text-xs text-bold text-white space-x-2 flex'>
                  <button
                    className='bg-green-500 px-2 py-1 rounded flex space-x-1 justify-center items-center'
                    onClick={() => navigate("/admin/product/create")}
                  >
                    <BsPlusCircle size={25} />
                    <span>Tạo mới</span>
                  </button>
                  <button
                    className='bg-yellow-300 px-2 py-1 rounded flex space-x-1 justify-center items-center'
                    onClick={() => handleShow(1)}
                  >
                    <RiEditBoxLine size={25} />
                    <span>Cập nhật</span>
                  </button>
                  <button className='bg-red-500 px-2 py-1 rounded flex space-x-1 justify-center items-center'>
                    <MdOutlineDeleteOutline size={25} /> <span>Xóa</span>
                  </button>
                  <button className='bg-blue-500 px-2 py-1 rounded flex space-x-1 justify-center items-center'>
                    <AiFillPrinter size={25} /> <span>In</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:flex md:justify-end my-5'>
              <div className='flex gap-x-4'>
                <div className='ml-3 w-20'>
                  {/* <div className='mb-2 block'>
                  <Label htmlFor='countries' value='Hiển thị' />
                </div> */}
                  <Select id='countries' required={true}>
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
                      placeholder='Tìm kiếm tại đây...'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='block w-full overflow-x-auto '>
              <Table hoverable={true}>
                <Table.Head>
                  <Table.HeadCell className='!p-4'>
                    <Checkbox
                      name='selectAll'
                      id='selectAll'
                      onClick={handleSelectAll}
                      checked={isCheckAll}
                    />
                  </Table.HeadCell>
                  <Table.HeadCell>ID</Table.HeadCell>
                  <Table.HeadCell>Tên</Table.HeadCell>
                  <Table.HeadCell>Mục</Table.HeadCell>
                  <Table.HeadCell>Tiêu đề</Table.HeadCell>
                  <Table.HeadCell>Size</Table.HeadCell>
                  <Table.HeadCell>Giảm giá</Table.HeadCell>
                  <Table.HeadCell>Giá</Table.HeadCell>
                  <Table.HeadCell>Số lượng</Table.HeadCell>
                  <Table.HeadCell>
                    <span className='sr-only'>Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className='divide-y'>
                  {productList.map((product) => (
                    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                      <Table.Cell className='!p-4'>
                        <Checkbox
                          id={product.id}
                          onClick={handleClick}
                          checked={isCheck.includes(product.id)}
                        />
                      </Table.Cell>
                      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                        {product.id}
                      </Table.Cell>
                      <Table.Cell>{product.name}</Table.Cell>
                      <Table.Cell>{product.category.name}</Table.Cell>
                      <Table.Cell>{product.title}</Table.Cell>
                      <Table.Cell>
                        <div className='flex flex-wrap items-center gap-2'>
                          {product.productToSizes?.map((item) => (
                            <Tooltip
                              content={item.price}
                              style={"auto"}
                              placement='right'
                            >
                              <Badge>{item.size.name}</Badge>
                            </Tooltip>
                          ))}
                        </div>

                        {/* {product.productToSizes[0]?.size.name} */}
                      </Table.Cell>
                      <Table.Cell>{product.promotionPrice}</Table.Cell>
                      <Table.Cell>{product.price}</Table.Cell>
                      <Table.Cell>{product.quantity}</Table.Cell>
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
            <div className='flex justify-end items-center'>
              <Paginate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
