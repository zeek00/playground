import React from 'react'
import { Link } from 'react-router-dom'
import PostsRoutes from '../../routes/route'


const AuthForm = ({ route, authType, title, fields, forgot}) => {
    

  return (
    <>
        {
            route && (
                <div className=' '>
                    <h2 className='m-5 text-2xl font-bold'>{title}</h2>
                    <form className='flex flex-col align-center'>
                        {fields.map(field=>(
                            <div className='flex flex-col align-center w-full h-full  m-auto ' key={field.name}>
                                
                                {field.type !== 'password' && (
                                    <div className='flex flex-col my-2'>
                                        <label className='text-left text-xs sm:text-base md:text-base lg:text-lg xl:text-lg my-3' htmlFor={field.name}>{field.label}</label>
                                        <input
                                        className='bg-gray-900 border border-slate-700 rounded p-1.5 focus:outline-none focus:border focus:border-yellow-500 focus:ring-1focus:ring-yellow-500'
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        required={field.required}
                                        autoComplete={field.label}
                                        />
                                    </div>
                                )}

                                {field.type === 'password' &&(
                                    <div className="flex flex-col my-2">
                                        <span className='flex items-center text-xs sm:text-base md:text-base lg:text-lg xl:text-lg'>
                                            <label className='text-left my-3' htmlFor={field.name}>{field.label}</label>
                                            {field.type === 'password' && <Link to={'/forgot'} className='text-yellow-500 ml-auto mr-2 cursor-pointer'>{forgot}</Link>}
                                        </span>
                                        <input
                                        className='bg-gray-900 border border-slate-700 rounded p-1.5 focus:outline-none focus:border focus:border-yellow-500 focus:ring-1focus:ring-yellow-500'
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        required={field.required}
                                        autoComplete={'new-password'}
                                        />
                                    </div>
                                )}

                            </div>

                        ))}
                        <button className="bg-yellow-500 text-sm my-6 rounded w-full h-full m-auto p-2 hover:bg-yellow-400" type="submit">{authType}</button>


                    </form>
                    
        
                </div>
            )
        }
        
    </>

  )
}

export default AuthForm
