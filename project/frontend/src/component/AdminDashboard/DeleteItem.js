import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

export const DeleteItem = (props) => {

   

    let deleteData = props.deleteData;
    let setIsDelete = props.setIsDelete


    const [formData,setformData] = useState({menuName:deleteData.name , category:deleteData.category,price:deleteData.price});

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
      console.log(deleteData._id)
        const itemId = deleteData._id
      await axios.delete(`http://localhost:8000/api/v1/deleteitem/${itemId}`)
      .then((res) => {
        console.log("menu deleted successfully")
        console.log(res)
        setIsDelete(null)
      })
      .catch((error)=> {
        console.log(error)
      })
    }

  return (
        <div className=' w-[400px]  bg-richblack-700 px-10 pb-10 rounded-[20px] pt-[10px]'>
        <div className='my-[20px] text-center text-[23px] text-orange-600 font-semibold flex items-center justify-center gap-6'>
            <h1 >Delete Menu </h1> 
            <MdDelete className='h-[20px] w-[20px] text-white' />
        </div>
       
            <form onSubmit={submithandler} className='flex flex-col gap-5 '>
                <label>
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
                <button  className='w-full bg-red-600 h-[30px] rounded-[10px] mt-6' onClick={() => setIsDelete(null)}> cancel</button>
                <button type="submit " className='w-full bg-orange-600 h-[30px] rounded-[10px] mt-6'>Delete Item</button>
               </div>
            </form>
        </div>
  )
}
