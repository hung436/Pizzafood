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
            <div className='overflow-x-auto w-full'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-2@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Hart Hagerty</div>
                          <div className='text-sm opacity-50'>
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-3@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Brice Swyre</div>
                          <div className='text-sm opacity-50'>China</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Carroll Group
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Tax Accountant
                      </span>
                    </td>
                    <td>Red</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-4@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Marjy Ferencz</div>
                          <div className='text-sm opacity-50'>Russia</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Rowe-Schoen
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Office Assistant I
                      </span>
                    </td>
                    <td>Crimson</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-5@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Yancy Tear</div>
                          <div className='text-sm opacity-50'>Brazil</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Wyman-Ledner
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Community Outreach Specialist
                      </span>
                    </td>
                    <td>Indigo</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className='overflow-x-auto w-full'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-2@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Hart Hagerty</div>
                          <div className='text-sm opacity-50'>
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-3@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Brice Swyre</div>
                          <div className='text-sm opacity-50'>China</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Carroll Group
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Tax Accountant
                      </span>
                    </td>
                    <td>Red</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-4@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Marjy Ferencz</div>
                          <div className='text-sm opacity-50'>Russia</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Rowe-Schoen
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Office Assistant I
                      </span>
                    </td>
                    <td>Crimson</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>

                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <td>
                      <div className='flex items-center space-x-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img
                              src='/tailwind-css-component-profile-5@56w.png'
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>Yancy Tear</div>
                          <div className='text-sm opacity-50'>Brazil</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Wyman-Ledner
                      <br />
                      <span className='badge badge-ghost badge-sm'>
                        Community Outreach Specialist
                      </span>
                    </td>
                    <td>Indigo</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
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
