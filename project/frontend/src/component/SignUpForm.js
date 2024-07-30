import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { Form, useNavigate } from 'react-router-dom';


export default function SignUpForm(props){

    let setIsLoggedIn = props.setIsLoggedIn;
    let setUserData = props.setUserData;

    let [accountType,setAccountType] = useState("student");
    let navigate = useNavigate();

    const [FormData,setFromData] = useState({firstName:"" , lastName:"" , email:"" , password : "" ,confirmPassword:"",course:"",phoneNo:""})
    const [showPass1,setShowPass1] = useState(false);
    const [showPass2,setShowPass2] = useState(false);

    function changeHandler(event)
    {
        setFromData((prev)=> {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        if(FormData.password != FormData.confirmPassword)
        {
            toast.error('password does not match');
        }
        else
        {
            FormData.accountType="User";

            axios.post("http://localhost:8000/api/v1/registration",FormData)
            .then((res) => {
                console.log(res)
                toast.success("Account Created");
                navigate("/login");
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

  return (
    <div className='flex flex-col gap-5'>
    
        <form onSubmit={submitHandler} className=' mt-[30px] flex flex-col gap-4'>
            <div className='flex justify-between '>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>first name <span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        placeholder='enter first name'
                        value={FormData.firstName}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                </label>

                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>last name<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        placeholder='enter last name'
                        value={FormData.lastName}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                </label>
            </div>

            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>email<span className='text-pink-200 text-[20px] '>*</span></p>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder='enter email'
                    value={FormData.email}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                />
            </label>
            
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>phoneNo<span className='text-pink-200 text-[20px] '>*</span></p>
                <input
                    required
                    type="phoneNo"
                    name="phoneNo"
                    placeholder='enter phoneNo'
                    value={FormData.phoneNo}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                />
            </label>

            <div  className='flex justify-between'>
                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>create password<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type = {showPass1 ? ("text") : ("password")}
                        name="password"
                        placeholder='password'
                        value={FormData.password}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                    <span onClick={() => {setShowPass1(!showPass1)}}
                    className='absolute top-10 right-5 cursor-pointer' >
                            {
                                showPass1
                                ?
                                (
                                    <AiOutlineEyeInvisible   fontSize={20} fill="#AFB2BF"/>
                                )
                                :
                                (
                                    <AiOutlineEye  fontSize={20} fill="#AFB2BF" />
                                )
                            }
                    </span>
                </label>
                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm password<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type = {showPass2 ? ("text") : ("password")}
                        name="confirmPassword"
                        placeholder='confirm password'
                        value={FormData.confirmPassword}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                    <span onClick={() => {setShowPass2(!showPass2)}}
                    className='absolute top-10 right-3 cursor-pointer' 
                    >
                            {
                                showPass2
                                ?
                                (
                                    <AiOutlineEyeInvisible   fontSize={20} fill="#AFB2BF"/>
                                )
                                :
                                (
                                    <AiOutlineEye  fontSize={20} fill="#AFB2BF" />
                                )
                            }
                    </span>
                </label>

                

            </div>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Select course<span className='text-pink-200 text-[20px] '>*</span></p>
                <select className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]' onChange={changeHandler} name='course' value={FormData.course} placeholder='select course'>
                    <option>degree</option>
                    <option>deploma</option>
                    <option>junior college</option>
                </select>
            </label>

            <button className=' bg-orange-600 rounded-[8px] font-medium text-black p-x-[8px] p-y-[12px] h-[30px] mt-6 w-full'>Create Account</button>
        </form>
    </div>
  )
}
