import React from 'react'
import '../../styles/layout.scss'
import { 
    FiHome, 
    FiUsers, 
    FiFolder, 
    FiCalendar, 
    FiFile, 
    FiPieChart,
    FiSettings } from "react-icons/fi"
;
import ItemStack from './ItemStack';
import TeamStack from './TeamStack';
import { Link } from 'react-router-dom';
import PostsRoutes from '../../routes/route';
import logo from '../../assets/logo.png';



const data = [
    {logo: FiHome, text: 'Home', link:'home'},    
    {logo: FiUsers, text: 'Team', link:'team'},
    {logo: FiFolder, text: 'Projects', link:'projects'},
    {logo: FiCalendar, text: 'Calendar', link:'calendar'},
    {logo: FiFile, text: 'Documents', link:'documents'},
    {logo: FiPieChart, text: 'Reports', link:'reports'}
];

export const teams = [  
    {name:'DevOps', link:'teams/devops'}, 
    {name:'Frontend', link:'teams/frontend'}, 
    {name:'Backend', link:'teams/backend'} 
];

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col h-full ">
        <span className='h-14 flex items-center'>
            <img src={logo} className="w-12 h-12" />
        </span>

        <ItemStack data={data}/>

        <TeamStack data={teams} />

        <div className="mt-auto mb-5">
            <Link to={PostsRoutes.sidelinks.settings()} className='flex items-center cursor-pointer rounded p-2 gap-4 text-gray-400 hover:bg-gray-900 hover:text-white'>
                <span className="text-2xl">
                    <FiSettings />
                </span>
                <h3 className='text-lg '>Settings</h3>
            </Link>
        </div>
    </div>


  )
}

export default Sidebar
