import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { GrEdit } from "react-icons/gr";

export const UpdateModal = (props) => {

   

    let updateData = props.updateData;
    let setUpdateData = props.setUpdateData

    const [formData,setformData] = useState({menuName:updateData.name , category:updateData.category,price:updateData.price});

    function changeHandler(event)
    {
        setformData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        }
        )
    }
  
    async function submithandler (event) {
      event.preventDefault();
      console.log(formData)
      const allData = {
        itemId:updateData._id,
        name:formData.menuName,
        category:formData.category,
        price:formData.price
      }
      console.log(allData)
      await axios.put("http://localhost:8000/api/v1/updateitem",allData)
      .then((res) => {
        console.log("menu updated successfully")
        console.log(res)
        setUpdateData(null)
      })
      .catch((error)=> {
        console.log(error)
      })
    }

  return (
        <div className=' w-[400px]  bg-richblack-700 px-10 pb-10 rounded-[20px] pt-[10px]'>
        <div className='my-[20px] text-center text-[23px] text-orange-600 font-semibold flex items-center justify-center gap-6'>
            <h1 >Update Menu </h1> 
            <GrEdit className='h-[20px] w-[15px] text-white'  />
        </div>
       
            <form onSubmit={submithandler} className='flex flex-col gap-5 '>
                <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Enter menu <span className='text-pink-200 text-[20px] '>*</span></p>
                <input
                    required
                    type="text"
                    name="menuName"
                    placeholder='enter menu name'
                    value={formData.menuName}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                />
                </label>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Category<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type="text"
                        name="category"
                        placeholder='enter category'
                        value={formData.category}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                </label>

                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Price<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type="text"
                        name="price"
                        placeholder='enter price'
                        value={formData.price}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                </label>
               <div className='flex gap-6'>
                <button  className='w-full bg-red-600 h-[30px] rounded-[10px] mt-6' onClick={() => setUpdateData(null)}> cancel</button>
                <button type="submit " className='w-full bg-orange-600 h-[30px] rounded-[10px] mt-6'>create menu</button>
               </div>
            </form>
        </div>
  )
}
