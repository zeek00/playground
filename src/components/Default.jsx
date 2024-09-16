import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import { Link } from 'react-router-dom'
import PostsRoutes from '../routes/route'

function Default() {
    const [count, setCount] = useState(0)
    console.log(
      PostsRoutes.layout()
    )
  return (
    <div className='m-auto justify-center bg-slate-900 w-full h-full max-w-[100%] max-h-[100%] text-center flex flex-col'>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite mx-auto" alt="Vite logo" />
        </a>
        <Link to={PostsRoutes.form.auth()} target="_blank">
          <img src={reactLogo} className="logo react mx-auto" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <p className="p-2 text-slate-500 read-the-docs">
        User Dashboard layout with Tailwind
      </p>
      <div className="flex justify-center items-center">
        <Link className='p-1 bg-slate-950 text-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:bg-blue-500 w-[fit-content] h-[fit-content]' to={PostsRoutes.layout()}>To Layout</Link>
        <Link className='p-1 bg-slate-950 text-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:bg-blue-500 w-[fit-content] h-[fit-content]' to={PostsRoutes.games()}>Games</Link>
        <Link className='p-1 bg-slate-950 text-slate-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:bg-blue-500 w-[fit-content] h-[fit-content]' to={PostsRoutes.form.signin()}>Sign in</Link>

      </div>
    </div>
  )
}

export default Default
