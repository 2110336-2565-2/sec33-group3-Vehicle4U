'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../ui/SideBar'
import NavBar from '../ui/NavBar'
import '../app/globals.css'
import Elehome from '../ui/elehome';
import React, { useEffect, useState } from "react";
import { Montserrat } from '@next/font/google';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const montserratBold = Montserrat({ 
  weight: '700',
  subsets: ['latin'] })
const montserrat = Montserrat({ 
    weight: '400',
    subsets: ['latin'] })

export default function Home() {
  const [isActive, setActive] = useState("false");
  const handleClick = () => {
    console.log('hello world');
    setActive(!isActive);
  };

    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

  return(
    <>
      <div className="wrapper d-flex align-items-stretch">
			<SideBar children={isActive}/>

        {/* <!-- Page Content  --> */}
      <div id="content">
        <NavBar show={handleClick} />
        <div className="p-4 p-md-5">
          <h1 style={{marginBottom: "0px"}} className={montserratBold.className}>Welcome to Muse Connect</h1>
          <h2 style={{marginBottom:"20px", color:"#26A74C"}} className={montserrat.className}>Music connects us.</h2>
          {/* textDecorationLine:"underline", textDecorationColor:"#26A74C"} */}
          <Elehome/>
          <h4 onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{marginTop:"15px",textDecoration:"underline", width:"fit-content"}}
          className={montserrat.className}
          >
          Get in {isHovering? "Touchy" : "touch"}</h4>
          {isHovering && (
            <h4 
            style={{fontSize:"15px"}}
            className={montserrat.className}>Muse Connect - Chula Engineering | ♫⋆｡♪ ₊˚♬ ﾟWe are based in Bangkok, Thailand</h4>
          )}
        </div>
      </div>
		</div>
    </>
        
  )
}