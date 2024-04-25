import React from 'react'
import { FaLinkedin,FaFacebook,FaInstagram,FaTwitter,FaGithub} from "react-icons/fa";

 const Footer = () => {
  return (
    <>
        <section className='bg-[#252525]'>
            <h1 className='text-4xl text-white font-bold text-center pt-28 pb-2'>Let's Work Together</h1>
            <p className='text-gray-400 w-full md:w-[50%] pt-6 pb-6 max-w-80 text-center m-auto'>I'm available for freelance work. Have any projects in your mind? Just feel free to <span>contact me</span></p>
            <div className="btn text-center ">
                <button className='text-2xl px-6 py-2 border text-white font-semibold border-[#ffc400] rounded-full hover:bg-[#ffc400] duration-500'>CONTACT ME</button>
                <div className="iconsFooter flex flex-wrap justify-center items-center gap-4 pt-9">
                    <FaGithub className="text-white cursor-pointer hover:text-[#ffc400]  duration-500" size={30} />
                    <FaFacebook className="text-white cursor-pointer hover:text-[#ffc400]  duration-500" size={30} />
                    <FaTwitter className="text-white cursor-pointer hover:text-[#ffc400]  duration-500" size={30} />
                    <FaInstagram className="text-white cursor-pointer hover:text-[#ffc400]  duration-500" size={30} />
                    <FaLinkedin className="text-white cursor-pointer hover:text-[#ffc400]  duration-500" size={30} />

                </div>
            </div>
            <hr className='container mx-auto mt-4' />
            <div className="copyRight mt-4 pb-4">
                <p className='text-gray-400 text-center'> &copy;2024  EL KAOUN OUSSAMA | ALL RIGHT RESERVED</p>
            </div>
        </section>
    </>
  )
}
export default Footer