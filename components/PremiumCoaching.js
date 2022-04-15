import React from 'react'

export default function PremiumCoaching() {
  return (
    <div className = 'py-40 px-10 flex flex-col-reverse lg:flex-row'>
        <div className = 'space-y-10 flex-[50%]'>
            <h1 className  ='text-8xl font-extrabold'>Premium Coaching Like No Other</h1>
            <p className = 'text-4xl font-light'>Accelerate your business growth and gain access to a business advisory board of experts.</p>
            <p className = 'text-4xl font-light'>Access weekly, live group coaching from Chris Do and his team of subject-matter leaders along with other like-minded creatives and entrepreneurs from around the globe in our community-backed learning portal.</p>
            <div className = 'flex space-x-40 ml-20'>
                <div className = 'space-y-6'>
                    <p className = 'text-6xl pb-5 font-bold border-b-4'>+650</p>
                    <p className = 'font-light text-3xl uppercase'>Pro Group Members</p>
                </div>
                <div className = 'space-y-6'>
                    <p className = 'text-6xl pb-5 font-bold border-b-4'>+650</p>
                    <p className = 'font-light text-3xl uppercase'>Pro Group Members</p>
                </div>
            </div>
            <button className = 'bg-[#1A27C9] text-white px-20 py-5 uppercase font-light hover:bg-[#14349c] '>Join The Pro Group</button>
        </div>
        <div classNames = 'flex-[50%]'>
            <img src="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/614102de7c709e0aec8580f5_progroup-badge-min.png" alt="" />
        </div>
    </div>
  )
}
