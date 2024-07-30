import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>  
        <div className='h-[100vh] border-r-[0.5px] border-richblack-50 w-[200px]  '>
        <ul className='flex flex-col max-auto px-[30px] gap-4 pt-4    '>
        <Link to="/dashboard/allorder">
            <li className='cursor-pointer bg-richblack-700 w-[150px] h-[30px] text-center rounded-xl' >Orders</li>
        </Link>
        <div className='w-[200px] h-[0.5px] bg-white ml-[-30px]'></div>
        <Link to={"/dashboard/allmenu"}>
          <li className='cursor-pointer bg-richblack-700 w-[150px] h-[30px] text-center rounded-xl'>Menu</li>
        </Link>
        <div className='w-[200px] h-[0.5px] bg-white ml-[-30px]'></div>
        <Link to={"/dashboard/addmenu"}>
          <li className='cursor-pointer bg-richblack-700 w-[150px] h-[30px] text-center rounded-xl'>Add Menu</li>
        </Link>
        <div className='w-[200px] h-[0.5px] bg-white ml-[-30px]'></div>
        </ul>
    </div>
  </div>
  )
}
