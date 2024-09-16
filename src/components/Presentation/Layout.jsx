import React from 'react'
import '../../styles/layout.scss'
import Sidebar from './Sidebar'
import Header from './Header'
import ContentBox from './ContentBox'

const Layout = () => {
  return (
    <div className='layout'>
        <div className="s bg-black">
         <Sidebar />
        </div>
        <div className="r bg-slate-50">
            <Header />
            <ContentBox />
        </div>
        
       
       
        
    </div>
  )
}

export default Layout
