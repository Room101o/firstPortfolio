import React from 'react'
import aboutImg from './../assets/imgs/aboutMe.png'
const About = () => {
  return (
    <>
        <div id='about' className="box-about container mx-auto ">
            <h1 className='titleAbout text-black text-4xl font-bold text-center mt-9 '>ABOUT <span className='spanTitle'>ME</span></h1>
            
            <div className="progressBox text-center md:text-start md:flex justify-center gap-10 pt-9  items-center">
              <div className="imgAbout w-full">
                <img className='w-[300px] h-[300px] md:w-[700px] md:h-[700px]' src={aboutImg} alt="About Me" />
              </div>
            {/* Paragraphe */}
              <div className="box-paragraphe w-full h-auto p-7 ">
                <p className='text-gray-400 max-w-full font-semibold'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid hic sed saepe, amet facere ipsa iusto distinctio eos recusandae, deleniti excepturi vel assumenda. Soluta harum, officiis excepturi architecto minima possimus?
                  Illo reprehenderit ex blanditiis doloribus dignissimos tempore asperiores. Temporibus placeat voluptas quam, odit deserunt, sequi enim sunt fugiat perspiciatis quidem voluptates fuga laboriosam quia esse quos obcaecati ratione dolorem. Illo.
                  Eaque quisquam, molestias neque nemo, qui dolor minima doloremque magni ad obcaecati incidunt laborum. Iure quis nam nesciunt sint necessitatibus debitis sunt assumenda. Dolor perspiciatis ab magni, dolorem quidem asperiores!
                  , aperiam dolore quae provident accusamus, necessitatibus laboriosam quisquam inventore distinctio, totam nemo voluptatum ex at quasi repellendus commodi iste! Architecto fuga ratione ipsum.
                  Repellat aperiam quibusdam delectus officiis, cum quam blanditiis perferendis quo magnam illum nam minus, mollitia, incidunt voluptas natus optio provident et. Ipsum, debitis quaerat dolor libero ipsa obcaecati dignissimos unde.
                  Mollitia nesciunt animi voluptates, esse possimus facilis veritatis modi laborum quibusdam magni perferendis quo molestias dolorum consequuntur optio repellat praesentium maiores? A unde libero autem, tempora odio laborum saepe repudiandae.
                </p>
              </div>
            </div>
            
        </div>
    </>
  )
}


export default About;