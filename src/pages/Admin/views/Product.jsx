import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import Paginate from "../../../components/Paginate/Paginate";
import Modal from "../components/Modal/ModalProduct";
function Product() {
  const [showModal, setShowModal] = React.useState(false);
  const [showOption, setShowOption] = React.useState(false);
  const handleShow = (option) => {
    setShowModal(!showModal);
    option ? setShowOption(false) : setShowOption(true);
  };
  return (
    <div>
      <Modal showModal={showModal} hideShow={handleShow} option={showOption} />
      <div className='flex flex-wrap mt-4 '>
        <div className='w-full mb-12 px-4'>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white "
            }
          >
            <div className='rounded-t mb-0 px-4 py-3 border-0 '>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
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
            <div className='block w-full overflow-x-auto '>
              {/* Projects table */}
              <table className='items-center w-full bg-transparent border-collapse '>
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      <div className='flex items-center h-5'></div>
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      ID
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Tên sản phẩm
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Hình ảnh
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Danh mục
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Giá
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Giảm giá
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Chi tiết
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Số lượng
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Hiển thị
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      <div className='flex items-center h-5'>
                        <input
                          type='checkbox'
                          className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                        />
                        <label htmlFor='checkbox' className='sr-only'>
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      1
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Huỳnh Thanh Hưng
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      ttldhung
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      144 Tân phú Tân Thành Bù đốp bình phước
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Admin
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      <div className='flex items-center h-5'>
                        <input
                          type='checkbox'
                          className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                        />
                        <label htmlFor='checkbox' className='sr-only'>
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      1
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Huỳnh Thanh Hưng
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      ttldhung
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      144 Tân phú Tân Thành Bù đốp bình phước
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Admin
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      <div className='flex items-center h-5'>
                        <input
                          type='checkbox'
                          className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                        />
                        <label htmlFor='checkbox' className='sr-only'>
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      1
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Huỳnh Thanh Hưng
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      ttldhung
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      144 Tân phú Tân Thành Bù đốp bình phước
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Admin
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      <div className='flex items-center h-5'>
                        <input
                          type='checkbox'
                          className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                        />
                        <label htmlFor='checkbox' className='sr-only'>
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      1
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Huỳnh Thanh Hưng
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      ttldhung
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      144 Tân phú Tân Thành Bù đốp bình phước
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Admin
                    </td>
                  </tr>
                  <tr>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      <div className='flex items-center h-5'>
                        <input
                          type='checkbox'
                          className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                        />
                        <label htmlFor='checkbox' className='sr-only'>
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      1
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Huỳnh Thanh Hưng
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      ttldhung
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      144 Tân phú Tân Thành Bù đốp bình phước
                    </td>
                    <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                      Admin
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <Paginate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
