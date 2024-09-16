import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import PostsRoutes from '../../routes/route'

const Game = () => {
    
  return (
    <div className='m-auto justify-center bg-slate-900 w-full h-full max-w-[100%] max-h-[100%] text-center flex flex-col'>
        <div className="links p-2">
            <Link to={PostsRoutes.game.guessthehex()}>{PostsRoutes.game.guessthehex().toUpperCase()}</Link>

        </div>
        <div className='flex flex-col bg-slate-950 my-0 w-80 h-96 m-auto border border-red-500 '>
            <Outlet/>
        </div>
    </div>
    
  )
}

export default Game
