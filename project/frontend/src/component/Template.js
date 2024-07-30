import React from 'react';
import SignUpForm from './SignUpForm.js';
import LoggedInForm from "./LoggedInForm.js";
import frameImg from "../assets/frame.png";
import {FcGoogle} from "react-icons/fc"


export const Template = (props) => {
    let title = props.title;
    let desc1 = props.desc1;
    let desc2 = props.desc2;
    let image = props.image;
    let formtype = props.formtype;
    let setIsLoggedIn = props.setIsLoggedIn;
    let setUserData = props.setUserData;


  return (
    <div className=' w-11/12  flex items-center max-w-[1160px] py-12  gap-y-0 mx-auto'>
         <div className='w-11/12 max-w-[450px] mx-0'>
            <h1
            className='text-richblack-5 font-semibold text-[1.75rem] leading-[2.375rem]'
            >{title}</h1>
            <p  className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic '>{desc2}</span>
            </p>
            {
                formtype === "loggedIn" 
                ?
                (
                    <LoggedInForm setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
                ) 
                :
                (
                    <SignUpForm setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
                )
            }

            <div className='flex  w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <span className='text-richblack-700 font-medium leading-[1.735rem]'>  OR  </span>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <div className='flex w-full justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-100  px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <button>
                    <span>Sign Up with google</span>
                </button>
            </div>
         </div>

         <div className='relative w-11/12 max-w-[450px] mx-auto mr-0'>
                <img 
                    src={frameImg} 
                    alt="pattern" 
                    width={558}
                    height={504}
                    loading='lazy'
                    className=''
                />
                <img
                    src={image}
                    alt="girl"
                    width={558}
                    height={490}
                    className='absolute top-4 right-4'
                />
         </div>
    </div>
  )
}
