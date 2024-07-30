import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';

export const Addmenu = () => {

  const [formData,setformData] = useState({menuName:"" , category:"",price:""});

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
      name:formData.menuName,
      category:formData.category,
      price:formData.price
    }
    await axios.post("http://localhost:8000/api/v1/additem",allData)
    .then((res) => {
      console.log("menu added successfully")
      toast.success("Menu Added Successfully")
    })
    .catch((error)=> {
      console.log(error)
    })
  }
  return (
    <div className='w-[1000px]'>
      <form className="flex flex-col gap-5  w-[400px]  bg-richblack-700 px-10 py-10 rounded-[20px]" onSubmit={submithandler}>
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
          <button type="submit " className='w-full bg-orange-600 h-[30px] rounded-[10px] mt-6'>create menu</button>
      </form>
    </div>
  )
}
