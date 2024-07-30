import React from 'react'
import { Link } from 'react-router-dom'

export const UserSidebar = () => {
  return (
    <div>  
        <div className='h-[100vh] border-r-[1px] border-richblack-50 w-[200px]  '>
        <ul className='flex flex-col max-auto px-[20px] gap-4 pt-4    '>
        <Link to="/dashboard/profile">
            <li className='cursor-pointer bg-richblack-700 w-[150px] h-[30px] text-center rounded-xl'>Profile</li>
        </Link>
        <div className='w-[200px] h-[0.5px] bg-white ml-[-30px]'></div>
        <Link to={"/dashboard/userorders"}>
          <li className='cursor-pointer bg-richblack-700 w-[150px] h-[30px] text-center rounded-xl'>Your Orders</li>
        </Link>
        <div className='w-[200px] h-[0.5px] bg-white ml-[-30px]'></div>
        
        </ul>
    </div>
  </div>
  )
}
