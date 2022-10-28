import React from "react";
import { Button, Spinner } from "flowbite-react";
import loading from "../../assets/img/loading.apng";
const Loading = () => {
  return (
    <div>
      <div className='flex flex-row gap-3 justify-center items-center h-screen'>
        {/* <Button>
          <Spinner aria-label='Spinner button example' />
          <span className='pl-3'>Loading...</span>
        </Button> */}
        <Button color='gray'>
          {/* <lord-icon
            src='https://cdn.lordicon.com/ememvspi.json'
            trigger='loop'
            colors='primary:#f24c00,secondary:#ffc738'
            style={{
              width: "250px",
              height: "250px",
            }}
          ></lord-icon> */}
          <img src={loading} alt='' />
        </Button>
      </div>
    </div>
  );
};

export default Loading;
