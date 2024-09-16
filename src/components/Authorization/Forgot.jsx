import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Forge from './Forge';

const Forgot = () => {
    const [childData, setChildData] = useState('Begin');
    const handleData = (data)=>{
        setChildData(data)

    } 
    return (
    
        <div className='m-auto my-0 bg-black w-full h-full justify-center text-center flex flex-col'>
            <img src={logo} className="m-auto my-0 w-20 h-20 " />
            <h2 className='m-5 text-2xl font-bold'>Forgot your Password?</h2>
            <div className='m-auto my-0 flex flex-col'>
                <label className='text-left text-xs sm:text-base md:text-base lg:text-lg xl:text-lg my-3' htmlFor={'forgot'}>Email</label>
                <input type="email" name="" id="forgot" className='bg-gray-900 border border-slate-700 rounded p-1.5 focus:outline-none focus:border focus:border-yellow-500 focus:ring-1focus:ring-yellow-500' />
            </div>
            <p>this is data from child: {childData} </p>

            <Forge dataBackToParent={handleData} />
          
        </div>
            
        
    )
}

export default Forgot
