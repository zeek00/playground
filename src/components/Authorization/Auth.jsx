import React from 'react'
import logo from '../../assets/logo.png'
import { Outlet} from 'react-router-dom'



const Auth = () => {
  

  return (
    <div className='m-auto my-0 bg-black w-full h-full justify-center text-center flex flex-col'>
        <img src={logo} className="m-auto my-0 w-20 h-20 " />
        <div className='max-w-[90%] m-auto my-0'>
            <Outlet/>        

        </div>
    </div>
  )
}

export default Auth
