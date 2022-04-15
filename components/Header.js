import React from 'react'
import { MenuAlt3Icon } from "@heroicons/react/outline"
function Header() {
  return (
    <header className = 'bg-[#0C0E0F] text-white flex justify-between p-2 sm:p-3 md:p-4 lg:p-5 xl:p-7 2xl:p-10 items-center'>
        <div className = 'flex space-x-5 items-center'>
            <h1 className ='font-extrabold pl-4 text-3xl cursor-pointer'>thefutur</h1>
            <nav className = 'hidden md:inline-flex md:space-x-8 lg:space-x-9 text-lg pl-8'>
                <p className ='cursor-pointer'>courese & Tools</p>
                <p className ='cursor-pointer'>Content</p>
                <p className ='cursor-pointer'>Our Mission</p>
            </nav>
        </div>
        <div className = 'flex space-x-10 items-center'>
            <p className = 'hidden md:inline-flex'>Login</p>
            <MenuAlt3Icon className = 'w-10 font-extralight'/>
        </div>
    </header>
  )
}

export default Header