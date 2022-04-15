import React from 'react'

function Banner() {
  return (
    <div className = 'w-screen space-y-5 text-white lg:flex sm:ml-5'>
      <div className = 'lg:space-y-8 xl:ml-10'>
        <h1 className = 'font-extrabold text-2xl w-full pr-16 pl-3 pt-2 sm:text-3xl sm:w-[25rem] md:text-6xl md:w-[47rem] md:pl-7 xl:mt-32 2xl:mt-52 xl:text-7xl xl:w-[50rem] 2xl:text-8xl 2xl:w-[70rem] '>
        Courses, Coaching, and Community for Creatives
        </h1>
        <p className = 'font-extralight text-sm pl-3 pr-28 md:text-lg md:pl-7 xl:text-2xl lg:text-xl xl:w-[50rem] 2xl:w-[60rem] 2xl:text-3xl'>On a mission to help one billion people make a living doing what they love (without losing their soul). We’re like a private art school - minus the crippling debt.</p>
        <button className = 'bg-[#F6E05E] px-20 py-3 ml-4 my-4 uppercase text-[15.54px] hover:bg-[#F8D129] text-black font-[500] md:ml-7'>shop courses</button>
      </div>
        <div className='flex justify-center pr-10'>
          <video src="./The Futur - Business and Design Education, Revolutionized.mp4" className = 'overflow-hidden h-[30rem] object-cover rounded-3xl lg:w-[40rem] lg:h-[32rem] xl:w-[50rem] xl:h-[43rem] 2xl:h-[58rem] 2xl:w-[40rem]' autoPlay muted controls></video>
        </div>
    </div>
  )
}

export default Banner
