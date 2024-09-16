import React from 'react'
import { Link } from 'react-router-dom'

const ItemStack = ({data}) => {
  return (
    <>
        {data && data.map((content, index)=>(
            <Link to={content.link} className={`flex items-center rounded p-2 gap-4 cursor-pointer ${index === 0 ? 'bg-gray-900 mt-8 text-white' : ' text-gray-400 hover:bg-gray-900 hover:text-white'}`} key={index}>
                <span className="text-2xl">
                    <content.logo />
                </span>
                <h3 className='text-lg'>{content.text}</h3>
            </Link>
           
        ))}
    </>
    
  )
}

export default ItemStack
