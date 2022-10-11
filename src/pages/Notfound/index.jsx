import React from 'react';
import pageFound from "./pageFound.jpg";
import "./indexs.css";

const NotFound = () => {
  return ( 
        <div className="pageNotFound">   
        <div className='pnfound'>
            <h1>Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are looking for might have been removed <br/> had its name changed or is temporarily unavailable</p>
        </div>        
            <img src={pageFound} alt={"pageFound"} height="50" weight="500"/>
            <div className='goto'>
              <a href="/">GO TO HOMEPAGE</a>
            </div>
        </div>  
  )
};

export default NotFound;
