import React from 'react'

function Enrollment() {
  return (
    <div>
        <div className = 'h-40 flex flex-col justify-center pl-6 lg:h-96 lg:pl-24'>
            <p className = 'font-semibold lg:text-xl lg:font-light'>OUR COURSES</p>
            <h1 className = 'font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl '>Open For Enrollment</h1>
        </div>
        <div className = 'lg:flex lg:items-center'>
            <img src="./enrollment.png" className = 'lg:w-[37rem] object-contain lg:mr-6 xl:w-[57rem] 2xl:w-[67rem]' alt="" />
            <div className = 'p-10 space-y-9'>
                <h3 className = 'text-4xl font-semibold '>Instagram Carousel Design</h3>
                <p className = 'text-sm font-light'>From writing and design, to maximizing engagement with carousels and Reels, Learn Chris Do's exact process for make attention-grabbing Instagram content meant to grow your industry authority.</p>
                <p className = 'text-3xl font-light text-gray-800'><span className = 'line-through'>$199</span> $149</p>
                <button className = 'bg-[#1A27C9] text-white px-12 py-4 uppercase hover:bg-[#032599]'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Enrollment