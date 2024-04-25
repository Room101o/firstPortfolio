import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "./../assets/imgs/logoPortfolio.png";
import myPhoto from './../assets/imgs/myPhoto.png'
import { FaLinkedin,FaFacebook,FaInstagram,FaTwitter,FaGithub} from "react-icons/fa";
import { ReactTyped } from 'react-typed';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" header text-gray-400 h-[600px]   " id="home">
        <div className="flex justify-between items-center h-[100px] mx-auto">
          <img className="w-[270px] h-full" src={Logo} alt="" />
          <ul className="hidden md:flex">
            <li className="p-5 text-white">
              <a className="text-lg font-bold hover:border-b-4 duration-500 " href="#home">
                Home
              </a>
            </li>
            <li className="p-5 text-white">
              <a className="text-lg font-bold hover:border-b-4 duration-500" href="#about">
                About
              </a>
            </li>
            <li className="p-5 text-white">
              <a className="text-lg font-bold hover:border-b-4 duration-500" href="#services">
              Services
              </a>
            </li>
            <li className="p-5 text-white">
              <a className="text-lg font-bold hover:border-b-4 duration-500" href="#experience">
                Experience
              </a>
            </li>
            <li className="p-5 text-white">
              <a className="text-lg font-bold hover:border-b-4 duration-500" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div onClick={handleNav} className="block  md:hidden p-4">
            {nav ? (
              <AiOutlineClose className="text-white" size={30} />
            ) : (
              <AiOutlineMenu className="text-white" size={30} />
            )}
          </div>

          <div
            className={
              nav
                ? "fixed h-full left-0 top-0 w-[60%] z-10 bg-[#202121] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <ul className="p-8 text-2xl">
              <li className="p-2">
                <a href="#home" className="hover:border-b-4 duration-500">Home</a>
              </li>
              <li className="p-2">
                <a href="#about" className="hover:border-b-4 duration-500">About</a>
              </li>
              <li className="p-2">
                <a href="#Services.jsx" className="hover:border-b-4 duration-500">Services</a>
              </li>
              <li className="p-2">
                <a href="#experience" className="hover:border-b-4 duration-500">Experience</a>
              </li>
              <li className="p-2">
                <a href="#contact" className="hover:border-b-4 duration-500">Conatct</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="box-hero flex flex-col md:flex-row justify-center gap-5 items-center">
  <div className="box-info text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold text-white ">Hello, I'm</h1>
    
    <ReactTyped
          className="text-[#ffc400]  text-3xl md:text-5xl font-bold pt-5"
            strings={['EL KAOUN OUSSAMA']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
    
    
    <p className="text-gray-400 w-full md:w-[50%] pt-6 pb-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolore vero, soluta provident eius saepe?
    </p>
    <div className="btn-hero flex gap-3">
      <button className="text-lg border text-white bg-[#ffc400] font-semibold border-[#ffc400] rounded-full px-4 py-2">
         DOWNLOAD CV
      </button>
      <button className="text-lg border hover:bg-[#ffc400] duration-500 text-white font-semibold border-[#ffc400] rounded-full px-4 py-2">
        GET IN TOUCH
      </button>

    </div>
  </div>

  <div className="box-imageHero order-first md:order-last">
    <img className="myPicture w-[200px] md:w-full h-[200px] md:h-[400px]" src={myPhoto} alt="My Picture" />
  </div>
</div>

<div className="social-media flex justify-center pt-14 md:pt-28 gap-7 items-center">
  <FaGithub className="text-white cursor-pointer hover:text-[#ffc400] shadow-lg shadow-black duration-500" size={30} />
  <FaFacebook className="text-white cursor-pointer hover:text-[#ffc400] shadow-lg shadow-black duration-500" size={30} />
  <FaTwitter className="text-white cursor-pointer hover:text-[#ffc400] shadow-lg shadow-black duration-500" size={30} />
  <FaInstagram className="text-white cursor-pointer hover:text-[#ffc400] shadow-lg shadow-black duration-500" size={30} />
  <FaLinkedin className="text-white cursor-pointer hover:text-[#ffc400] shadow-lg shadow-black duration-500" size={30} />
</div>

      </div>
    </>
  );
};
export default NavBar;
