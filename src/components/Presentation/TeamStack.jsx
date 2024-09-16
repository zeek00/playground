import React from 'react'
import { Link } from 'react-router-dom'

const TeamStack = ({data}) => {
  return (
    <>
        <h3 className='mt-8 text-sm p-2'>Your teams</h3>
        {data && data.map((item,index)=>(
            <Link to={item.link} key={index} className="flex items-center rounded p-2 gap-4 cursor-pointer text-gray-400 hover:bg-gray-900 hover:text-white">
                <span className="bg-gray-900 w-8 h-8 flex border border-slate-600 items-center justify-center rounded-xl text-xs">{item.name.charAt(0)}</span>
                <h3 className="text-lg">{item.name}</h3>
            </Link>
        ))}
      
    </>
  )
}

export default TeamStack
