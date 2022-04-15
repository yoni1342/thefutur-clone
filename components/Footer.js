import React from 'react'

function Footer() {
  return (
    <footer className = 'text-white justify-between items-center p-20'>
          <div>
            <h2 className = 'lg:text-6xl pb-4 text-3xl'>Be the first to know</h2>
            <button className ='bg-[#F9D230] px-10 py-5 text-black uppercase'>Join our newsletter</button>
          </div>
        <div className = 'mx-40 my-10  justify-between flex flex-col lg:flex-row lg:space-x-40 space-y-10 lg:space-y-0'>
            <div className = 'space-y-5 '>
              <h3 className = 'font-semibold text-2xl cursor-pointer'>Learn</h3>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Pricing</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Logo Design</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Lead Genetation</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Design</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Branding</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>View All</p>
            </div>
            <div className = 'space-y-5 '>
              <h3 className = 'font-semibold text-2xl cursor-pointer'>Shop</h3>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Business Skills</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Creative Skills</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Business Resource</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Private Coaching</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Merchandise</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Shop All</p>
            </div>
            <div className = 'space-y-5 '>
              <h3 className = 'font-semibold text-2xl cursor-pointer'>Collaborate</h3>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Advertise With Us</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Become An Affiliate</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Hire Us To Speak</p>
              <p className ='text-lg font-light hover:text-[#F9D230] cursor-pointer'>Work With Us</p>
            </div>
          </div>
    </footer>
  )
}

export default Footer