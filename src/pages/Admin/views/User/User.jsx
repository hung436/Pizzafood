import { Checkbox, Select, Table } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillPrinter, AiOutlineEdit } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserList } from "../../../../app/Reducer/userSlice";
import { dispatch } from "../../../../app/Store/store";
import Loading from "../../../../components/Loading";
import Paginate from "../../../../components/Paginate/Paginate";
import { Avatar, Button } from "antd";
function User() {
  const { isLoading, users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.log(users);

  //==========================
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
                    onClick={() => navigate("create")}
                  >
                    <BsPlusCircle size={25} />
                    <span>Tạo mới</span>
                  </button>
                  <button
                    className='bg-yellow-300 px-2 py-1 rounded flex space-x-1 justify-center items-center'
                    // onClick={() => handleShow(1)}
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

                    <th>Tên</th>
                    <th>Email</th>
                    <th>SĐT</th>
                    <th>Phân quyền</th>
                    <th>Hành động</th>
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
                          <div className='flex items-center space-x-3'>
                            <Avatar
                              style={{
                                backgroundColor: "red",
                                verticalAlign: "middle",
                              }}
                              size='large'
                              gap={4}
                            >
                              {user.name[0]}
                            </Avatar>
                            <div>
                              <div className='font-bold'>{user.name}</div>
                            </div>
                          </div>
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

                        <th>
                          <div className='flex items-center justify-center gap-x-2'>
                            <Button
                              primary
                              icon={<AiOutlineEdit />}
                              size={30}
                              onClick={() => navigate("update/" + user.id)}
                              className='flex item-center justify-center'
                            />
                            <Button
                              danger
                              icon={<IoMdRemoveCircleOutline />}
                              size={30}
                              className='flex item-center justify-center'
                            />
                          </div>
                        </th>
                      </tr>
                    ))}
                </tbody>
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
