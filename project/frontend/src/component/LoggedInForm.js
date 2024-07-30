import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

export default function LoggedInForm(props) {

    let setIsLoggedIn = props.setIsLoggedIn;
    let setUserData = props.setUserData;

    let navigate = useNavigate();

    const [formData,setFormData] = useState({email:"" , password:""});
    const [showPass,setShowPass] = useState(false)

    function changeHandler(event)
    {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        }
        )
    }

    function submitHandler(event)
    {
        event.preventDefault();
        axios.post("http://localhost:8000/api/v1/login",formData)
        .then((res) => {
            setUserData(res.data.data);
            setIsLoggedIn(true);
            toast.success("logged in");
            if(res.data.data.accountType =="Admin")
            {
                navigate("/dashboard/allorder");
            }
            else
            {
                navigate("/dashboard/profile");
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
    <div className=''>
        <form onSubmit={submitHandler} 
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label htmlFor='email' className='w-full '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>email Address<span className='text-pink-200 text-[20px] '>*</span></p>
                <input 
                    required
                    type="email"
                    placeholder='Enter emial address'
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                />
            </label>

            <label htmlFor='password' className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>password<span className='text-pink-200 text-[20px] '>*</span></p>
                <input 
                required
                type= {showPass ? ("text") : ("password")}
                placeholder='password'
                name="password"
                id="password"
                value={formData.password}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full'
                />

                <span onClick={() => {
                    setShowPass(!showPass)
                }}
                className='absolute right-3 top-[40px] cursor-pointer' 
                >
                    {showPass ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot password
                    </p>
                </Link>
            </label>
            
           <button className=' bg-orange-600 rounded-[8px] font-medium text-black p-x-[8px] p-y-[12px] h-[30px] mt-6'> 
                Sign In
           </button> 


        </form>
    </div>
  )
}