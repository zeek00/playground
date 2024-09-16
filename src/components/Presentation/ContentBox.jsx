import React from 'react'
import { Outlet } from "react-router-dom";



const ContentBox = () => {
  return (
    <div className="content border border-dotted rounded-lg bg-slate-950 text-white border-slate-400 w-full h-full max-w-[98%] max-h-[90%] flex items-center justify-center m-auto">
      <Outlet />
      
    </div>


  )
}

export default ContentBox
