import React, { useEffect, useLayoutEffect } from "react";
import { AiOutlineUserAdd, AiTwotoneExperiment } from "react-icons/ai";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { SiProducthunt } from "react-icons/si";

// components

import CardStats from "../Cards/CardStats.jsx";
import generalApi from "../../../../api/General.js";
import { useState } from "react";

export default function HeaderStats({ data }) {
  return (
    <>
      {/* Header */}
      <div className='relative  md:pt-32 pb-32 pt-12'>
        <div className='px-4 md:px-10 mx-auto w-full'>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Doanh Thu'
                  statTitle={data?.revenue}
                  statArrow='up'
                  // statPercent='3.48'
                  // statPercentColor='text-emerald-500'
                  // statDescripiron='So với tháng trước'
                  statIconName={<BsFillCalendarEventFill />}
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Người dùng mới'
                  statTitle={data?.user}
                  statArrow='up'
                  statPercent=''
                  statPercentColor=''
                  statDescripiron=''
                  statIconName={<AiOutlineUserAdd />}
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Sản phẩm'
                  statTitle={data?.product}
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron='Since yesterday'
                  statIconName={<SiProducthunt />}
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Đơn hàng'
                  statTitle={data?.order}
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName={<AiTwotoneExperiment />}
                  statIconColor='bg-lightBlue-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
