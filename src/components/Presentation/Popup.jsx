import React from 'react'
import { Link } from 'react-router-dom'

const Popup = () => {
  return (
    <>
    <div className='w-32 bg-white shadow rounded flex flex-col font-light'>
        <Link className='w-full hover:bg-slate-100 p-2'>Your profile</Link>
        <Link to={'/'} className='hover:bg-slate-100 p-2'>Sign out</Link>
    </div>
      
    </>
  )
}

export default Popup
