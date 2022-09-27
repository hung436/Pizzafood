import React from "react";

export default function Modal({ showModal, hideShow, option }) {
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative md:w-auto mx-auto max-w-3xl w-full h-screen'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-xl font-semibold font-font-sans'>
                    {option ? "TẠO MỚI" : "CẬP NHẬT"}
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-60 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={hideShow}
                  >
                    <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    sasa
                  </p> */}
                  <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4'>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Danh mục
                      </label>
                      <select className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-whit rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                      </select>
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Tên sản phẩm
                      </label>
                      <input
                        type='text'
                        className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Giá
                      </label>
                      <input
                        type='number'
                        className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'
                        min='1'
                        step='any'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Giảm giá
                      </label>
                      <input
                        type='text'
                        className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'
                      />
                    </div>
                    <div className='flex flex-col md:col-span-3'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Chi tiết
                      </label>
                      <input
                        type='text'
                        className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Hiển thị
                      </label>
                      <input type='checkbox' className='outline-0 -0' />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      ></label>
                      <input
                        type='text'
                        className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor=''
                        className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200  last:mr-0 mr-1'
                      >
                        Tên sản phẩm
                      </label>
                      <input
                        type='text'
                        className='px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none  w-full'
                      />
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={hideShow}
                  >
                    Đóng
                  </button>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    // onClick={() => setShowModal(false)}
                  >
                    Tạo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
