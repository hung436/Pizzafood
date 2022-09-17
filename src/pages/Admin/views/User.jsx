import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { RiEditBoxLine } from 'react-icons/ri';

function User({ color }) {
  return (
    <div>
      {' '}
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div
            className={
              'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded '
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className={'font-semibold text-lg '}>
                    QUẢN LÝ NGƯỜI DÙNG
                  </h3>
                </div>
                <div className="text-sm text-bold space-x-2">
                  <button className="bg-green-500 px-2 py-1 rounded ">
                    <BsPlusCircle />
                    Tạo mới
                  </button>
                  <button className="bg-yellow-500 px-2 py-1 rounded ">
                    <RiEditBoxLine />
                    Cập nhật
                  </button>
                  <button className="bg-red-500 px-2 py-1 rounded ">
                    <MdOutlineDeleteOutline /> Xóa
                  </button>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                        (color === 'light'
                          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      <div className="flex items-center h-5">
                        {/* <input
                          id="checkbox-all"
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label> */}
                      </div>
                    </th>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                        (color === 'light'
                          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      ID
                    </th>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left '
                        //     (color === 'light'
                        //       ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        //       : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      Họ và tên
                    </th>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                        (color === 'light'
                          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      Tên đăng nhập
                    </th>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                        (color === 'light'
                          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      Mật khẩu
                    </th>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                        (color === 'light'
                          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      Địa chỉ
                    </th>
                    <th
                      className={
                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                        (color === 'light'
                          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                      }
                    >
                      Roles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      1
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Huỳnh Thanh Hưng
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      ttldhung
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      đasdasdasda
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      144 Tân phú Tân Thành Bù đốp bình phước
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Admin
                    </td>
                  </tr>
                </tbody>
              </table>
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
