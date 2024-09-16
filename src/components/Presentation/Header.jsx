import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Profile from './Profile'

const Header = () => {
  return (
    <div className="header flex items-center border-b-2 border-black-100 h-14 shadow-sm ">
        <div className="search-box flex items-center">
            <span className='text-xl text-slate-400 p-4'> <FiSearch /> </span>
            <input className='outline-none bg-slate-50 placeholder:font-extralight placeholder:text-sm' type="search" placeholder='Search...' />
        </div>

        <div className="profile ml-auto mr-8">
            <Profile />
        </div>
    </div> 
    
  )
}

export default Header
