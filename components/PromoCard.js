import React from 'react'

function PromoCard({icon, title, desc, btn}) {
  return (
    <div className = 'relative bg-white px-5 py-10 m-5 hover:shadow-2xl transition-all duration-200 ease-in-out lg:w-[30rem] lg:h-[36rem] lg:p-10 '>
        <div className = 'space-y-7 lg:space-y-10 flex flex-col justify-end'>
          <h2 className = 'text-4xl font-bold mt-10 lg:mt-20 lg:text-5xl'>{title}</h2>
          <p className = 'text-sm font-light lg:text-lg lg:font-normal'>{desc}</p>
          <button className = 'bg-black text-white text-lg px-10 py-3 shadow-lg uppercase cursor-pointer hover:bg-[#2B2C2D]'>{btn}</button>
        </div>
        <div className = 'absolute top-[-15%] left-16 bg-white p-6 w-20 h-20 rounded-full shadow-xl lg:top-[-10%] lg:p-5 lg:w-32 lg:h-32'>
          <img src={icon} alt="" />
        </div>
    </div>
  )
}

export default PromoCard