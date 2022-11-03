import { Checkbox, Select, Table } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import Paginate from "../../../components/Paginate/Paginate";

function User({ color }) {
  const [showModal, setShowModal] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [productList, setProductList] = useState([]);
  const handleShow = (option) => {
    setShowModal(!showModal);
    option ? setShowOption(false) : setShowOption(true);
  };

  return (
    <div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full mb-12 px-4'>
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
                    onClick={() => handleShow(0)}
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
                      <BiSearchAlt2 />
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
                    <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Color</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className='sr-only'>Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className='divide-y'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='!p-4'>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                      Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href='/tables'
                        className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='!p-4'>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a
                        href='/tables'
                        className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='!p-4'>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                      Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a
                        href='/tables'
                        className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <div className='flex justify-end items-center'>
              <Paginate />
            </div>
          </div>
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </div>
  );
}

export default User;
