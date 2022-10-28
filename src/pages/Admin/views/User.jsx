import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import Table from "../../../components/Table/Table";
function User({ color }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],

    []
  );
  const data = [];
  // const data = [
  //   {
  //     name: "Nguyen Van A",
  //     age: 26,
  //     friend: {
  //       name: "Do Van C",
  //       age: 23,
  //     },
  //   },
  //   {
  //     name: "Dao Thi B",
  //     age: 22,
  //     friend: {
  //       name: "Ngo Trung V",
  //       age: 24,
  //     },
  //   },
  //   {
  //     name: "Tran Duc C",
  //     age: 25,
  //     friend: {
  //       name: "Ngo Thanh E",
  //       age: 25,
  //     },
  //   },
  //   {
  //     name: "Le Tien N",
  //     age: 27,
  //     friend: {
  //       name: "Cao Cong G",
  //       age: 24,
  //     },
  //   },
  //   {
  //     name: "Pham Hoang M",
  //     age: 26,
  //     friend: {
  //       name: "Lai Hai D",
  //       age: 25,
  //     },
  //   },
  //   {
  //     name: "Duong Van L",
  //     age: 23,
  //     friend: {
  //       name: "Le Hoang M",
  //       age: 23,
  //     },
  //   },
  // ];

  return (
    <div>
      {" "}
      <div className='flex flex-wrap mt-4'>
        <div className='w-full mb-12 px-4'>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
            }
          >
            <div className='rounded-t mb-0 px-4 py-3 border-0'>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                  <h3 className={"font-semibold text-lg "}>
                    QUẢN LÝ NGƯỜI DÙNG
                  </h3>
                </div>
                <div className='text-sm text-bold space-x-2'>
                  <button className='bg-green-500 px-2 py-1 rounded '>
                    <BsPlusCircle />
                    Tạo mới
                  </button>
                  <button className='bg-yellow-500 px-2 py-1 rounded '>
                    <RiEditBoxLine />
                    Cập nhật
                  </button>
                  <button className='bg-red-500 px-2 py-1 rounded '>
                    <MdOutlineDeleteOutline /> Xóa
                  </button>
                </div>
              </div>
            </div>
            <div className='block w-full overflow-x-auto'>
              {/* Projects table */}
              <Table data={data} columns={columns} defaultPageSize={5} />
              {/* <table className='items-center w-full bg-transparent border-collapse'>
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      <div className='flex items-center h-5'>
                        {/* <input
                          id="checkbox-all"
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label> */}
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
