import React from 'react'
import html from './../assets/imgs/html.png'
import css from './../assets/imgs/css.png'
import js from './../assets/imgs/js.png'
import tailwind from './../assets/imgs/tailwind.png'
import react from './../assets/imgs/react.png'
import nodeJs from './../assets/imgs/nodeJs.png'
import mysql from './../assets/imgs/mysql.png'
import windev from './../assets/imgs/windev.png'

const Skills = () => {
  return (
    <>
        <div className="skills container mx-auto">
            <h1 className='text-black text-2xl md:text-5xl text-center pt-9 font-bold'><span className='text-[#ffc400] '>My</span> Skills</h1>
            <div className="box-skillsexport  p-24 flex flex-wrap gap-24 justify-center items-center">
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={html} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="HTML" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={css} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="CSS" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={js} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="JS" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={tailwind} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="TAILWIND" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={react} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="TAILWIND" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={nodeJs} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="TAILWIND" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={mysql} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="TAILWIND" />
                </div>
                <div className="box-iconsSkills  hover:scale-105 duration-300">
                    <img src={windev} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px]' alt="TAILWIND" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills;