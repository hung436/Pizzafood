import React from "react";
import { Bar } from "react-chartjs-2";
// components

import CardLineChart from "../components/Cards/CardLineChart.jsx";
import CardBarChart from "../components/Cards/CardBarChart.jsx";
import CardPageVisits from "../components/Cards/CardPageVisits.jsx";
import CardSocialTraffic from "../components/Cards/CardSocialTraffic.jsx";
import HeaderStats from "../components/Headers/HeaderStats.jsx";
import generalApi from "../../../api/General.js";
import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  const [data, setData] = useState();

  const getGeneral = async () => {
    try {
      const { data } = await generalApi.getGeneral();
      setData(data);
    } catch (error) {}
  };
  useEffect(() => {
    getGeneral();
  }, []);
  return (
    <>
      <HeaderStats data={data} />
      <div className=' md:px-10 mx-auto w-full '>
        <div className='flex flex-wrap'>
          <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
            <CardLineChart />
          </div>
          <div className='w-full xl:w-4/12 px-4'>
            <CardBarChart />
          </div>
        </div>
        {/* <div className='flex flex-wrap mt-4'>
          <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
            <CardPageVisits />
          </div>
          <div className='w-full xl:w-4/12 px-4'>
            <CardSocialTraffic />
          </div>
        </div> */}
      </div>
    </>
  );
}
