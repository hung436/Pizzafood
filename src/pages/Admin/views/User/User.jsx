import { Select, Table } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { getObjKey } from "../../../../utils";

import { useNavigate } from "react-router-dom";
import { getUserList } from "../../../../app/Reducer/userSlice";
import { dispatch } from "../../../../app/Store/store";
import Loading from "../../../../components/Loading";

import { Avatar, Pagination } from "antd";
function User() {
  const { isLoading, users, totalUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState({});

  //Paginate
  const [pageSizes, setPageSizes] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  //========================== Checkbox =================================
  const toggleAllSelected = (e) => {
    const { checked } = e.target;
    setAllSelected(checked);

    users &&
      setSelected(
        users.reduce(
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

  const isAllSelected = selectedCount === users.length;

  const isIndeterminate = selectedCount && selectedCount !== users.length;
  return (
    <div>
      {isLoading && <Loading />}
      <div className='flex flex-wrap mt-4 bg-white'>
        <div className='w-full mb-12 px-4'>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 rounded "
            }
          >
            <div className='rounded-t mb-0 py-2 border-0 '>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full max-w-full flex-grow flex-1'>
                  <h3 className={"font-semibold text-lg "}>QUẢN LÝ SẢN PHẨM</h3>
                </div>
                <div className='text-xs text-bold text-white space-x-2 flex'>
                  <button
                    className='bg-green-500 px-2 py-1 rounded flex space-x-1 justify-center items-center'
                    onClick={() => navigate("create")}
                  >
                    <BsPlusCircle size={25} />
                    <span>Tạo mới</span>
                  </button>
                  <button
                    className={`px-2 py-1 rounded flex space-x-1 justify-center items-center ${
                      selectedCount !== 1 ? "bg-slate-400" : "bg-yellow-300"
                    }`}
                    onClick={() => {
                      const id = getObjKey(selected, true);
                      navigate("update/" + id);
                    }}
                    disabled={selectedCount !== 1}
                  >
                    <RiEditBoxLine size={25} />
                    <span>Cập nhật</span>
                  </button>
                  <button
                    disabled={selectedCount < 1}
                    className={`bg-red-500 px-2 py-1 rounded flex space-x-1 justify-center items-center ${
                      selectedCount < 1 ? "bg-slate-400" : "bg-red-500"
                    }`}
                    onClick={() => {
                      // handleDeleteProduct();
                    }}
                  >
                    <MdOutlineDeleteOutline size={25} /> <span>Xóa</span>
                  </button>
                  <button className='bg-blue-500 px-2 py-1 rounded flex space-x-1 justify-center items-center'>
                    <AiFillPrinter size={25} /> <span>In</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:flex md:justify-end py-2'>
              <div className='flex gap-x-4'>
                <div className=' w-20'>
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
            {/* Table */}
            <div className='overflow-x-auto w-full'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input
                          type='checkbox'
                          checked={allSelected || isAllSelected}
                          className='checkbox'
                          onChange={toggleAllSelected}
                          indeterminate={isIndeterminate}
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </label>
                    </th>

                    <th>Họ và Tên</th>
                    <th>Email</th>
                    <th>SĐT</th>
                    <th>Phân quyền</th>
                    <th>Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.length > 0 &&
                    users.map((user) => (
                      <tr>
                        <th>
                          <label>
                            <input
                              type='checkbox'
                              className='checkbox'
                              checked={selected[user.id] || allSelected}
                              onChange={toggleSelected(user.id)}
                            />
                          </label>
                        </th>
                        <td>
                          <div className='font-bold'>{user.name}</div>
                        </td>
                        <td>
                          <br />
                          <span className='badge badge-ghost badge-sm'>
                            {user.email}
                          </span>
                        </td>
                        <td>{user.phone}</td>
                        <td>
                          <span className='badge badge-ghost badge-sm'>
                            {user.role}
                          </span>
                        </td>

                        <td>{user.address}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className='flex justify-end'>
              <Pagination
                current={pageIndex + 1}
                onChange={(page) => setPageIndex(page - 1)}
                total={totalUser}
                pageSize={pageSizes}
              />
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
