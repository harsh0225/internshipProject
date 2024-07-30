import React from 'react'
import logo from "../assets/pngwi.png";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export default function Navbar(props){

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    let setUserData = props.setUserData
    let userData = props.userData



  return (
    <div className='w-[100vw] border-b-[0.5px] border-richblack-100'>
    <div className='flex justify-between  w-11/12 max-w-[1160px] py-3 mx-auto '>
    <Link to="/" className='flex items-center justify-center gap-[20px]'>
        <img src={logo} alt="Noimage" width={40}  loading="lazy"  className='invert'/> 
        <h1 className='text-[25px]'>Phoenix Canteen</h1>
    </Link>

    <nav className='flex items-center'>
        <ul className={`flex gap-[30px] text-richblack-100 items-center`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
    </nav>

  {  /* login - signup - logout - Dashboard */}
  <div className='flex items-center gap-x-4 '>

    {
        !isLoggedIn && 
        <Link to="/login">
            <button 
            className='bg-orange-600 text-white py-[8px] px-[12px] rounded-[30px] border-[1px] border-richblack-700'
            >Login</button>
        </Link>
    }

    { 
        !isLoggedIn && 
        <Link to="/signup">
            <button
            className='bg-orange-600 text-white py-[8px] px-[12px] rounded-[30px] border-[1px] border-richblack-700'
            >Sign up</button>
        </Link>
    }

    {
        isLoggedIn &&
        <Link to="/logout">
            <button onClick={() => {
                setIsLoggedIn(false)
                toast.success("logged out")
                setUserData(null)
            }}
            className='bg-orange-600 text-white py-[8px] px-[12px] rounded-[30px] border-[1px] border-richblack-700'
            >Logout</button>
        </Link>
    }

    {
        isLoggedIn &&
        <Link to={`${userData.accountType == "Admin" ? "/dashboard/allorder" : "/dashboard/profile"}`}>
            <button
            className='bg-orange-600 text-white py-[8px] px-[12px] rounded-[30px] border-[1px] border-richblack-700'
            >Dashboard</button>
        </Link>
    }

  </div>
</div>
    </div>
  )
}
