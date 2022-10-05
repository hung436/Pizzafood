import React from "react";
import { Carousel } from "flowbite-react";
function Slide({ ImageLink }) {
  return (
    <div className='md:h-56 h-40  xl:h-80 2xl:h-96'>
      <Carousel>
        {ImageLink.map((value, index) => (
          <img
            className='md:h-[400px] h-40'
            key={index}
            src={value}
            alt='...'
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slide;
