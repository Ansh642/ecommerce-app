import React from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const navigate =  useNavigate();

  return (
    <div className='flex flex-col items-center justify-center gap-3' style={{minHeight:"70vh"}}>
      <p className='text-richblack-800 text-[90px] font-black'>404</p>
      <p className='text-richblack-800 text-3xl'>Oops! Page Not Found</p>
      <button onClick={()=>navigate('/')} className='border-[1px] hover:scale-105 border-richblack-800 px-2 py-1 mt-3 text-lg'>Go back</button>
    </div>
  )
}
