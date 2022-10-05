import React from "react";
import { Carousel } from "flowbite-react";
function Slide({ ImageLink }) {
  return (
    <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel>
        {ImageLink.map((value, index) => (
          <img key={index} src={value} alt='...' />
        ))}
      </Carousel>
    </div>
  );
}

export default Slide;
