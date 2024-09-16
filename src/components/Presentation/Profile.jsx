import React, {useState} from 'react'
import { FiBell } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import img from '../../assets/omarlittle.jpg'
import Popup from './Popup';




const Profile = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    };
    
  return (
    <>
        <div className='flex items-center text-slate-400'>
            <span className='text-xl p-8 cursor-pointer'>
                <FiBell />
            </span>

            <div className="h-6 pr-8 line border-l border-slate-400">
                
            </div>

            <div className='flex items-center cursor-pointer' onClick={handleClick}>
                <span className='block w-8 h-8 '>
                    <img className='w-full h-full object-cover rounded-full' src={img} alt="picture" />
                </span>
                <h3 className='text-black pl-3'>Omar Little</h3>
                <span className='pl-3'> <MdKeyboardArrowDown /> </span>
            </div>
        
        </div>
        {open && (
            <div className='absolute right-10 top-12'>
                <Popup/>
            </div>
            )}
    </>

  )
}

export default Profile
