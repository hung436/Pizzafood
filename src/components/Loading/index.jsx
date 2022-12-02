import React from "react";
import { Button, Spinner } from "flowbite-react";
import loading from "../../assets/img/loading.apng";
import { useEffect } from "react";
const Loading = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='flex flex-row gap-3 justify-center items-center h-screen '>
        {/* <Button>
          <Spinner aria-label='Spinner button example' />
          <span className='pl-3'>Loading...</span>
        </Button> */}

        {/* <lord-icon
            src='https://cdn.lordicon.com/ememvspi.json'
            trigger='loop'
            colors='primary:#f24c00,secondary:#ffc738'
            style={{
              width: "250px",
              height: "250px",
            }}
          ></lord-icon> */}
        <img src={loading} alt='' className='w-48' />
      </div>
    </div>
  );
};

export default Loading;
