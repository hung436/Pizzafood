import React from "react";
import { Button, Spinner } from "flowbite-react";
const Loading = () => {
  return (
    <div>
      <div className='flex flex-row gap-3 justify-center items-center h-screen bg-blueGray-300'>
        {/* <Button>
          <Spinner aria-label='Spinner button example' />
          <span className='pl-3'>Loading...</span>
        </Button> */}
        <Button color='gray'>
          <Spinner aria-label='Alternate spinner button example' />
          <span className='pl-3'>Loading...</span>
        </Button>
      </div>
    </div>
  );
};

export default Loading;
