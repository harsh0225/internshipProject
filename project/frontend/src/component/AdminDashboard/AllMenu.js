import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { UpdateModal } from './UpdateModal';
import { DeleteOrder } from '../Order/DeleteOrder';
import { DeleteItem } from './DeleteItem';

export const AllMenu = () => {

    const [data,setData] = useState();

    const [isUpdate,setIsUpdate] = useState(null);

    const [isDelete,setIsDelete] = useState(null);    

    let count = 0;

    function deleteHandler(data)  {
        console.log(data)
        setIsDelete(data)
       
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/getallitem")
        .then((res) => {
            console.log(res)
            setData(res.data.data);
            console.log(res.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[isUpdate,isDelete])

  return (
    <div className='relative'>
    <h1 className='text-[25px] pl-10 text-orange-600'>All Menu</h1>
    <div className="flex flex-col ml-[30px] mt-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
                <table className="min-w-full text-left text-sm font-light w-[1100px] ">
                <thead className="border-b border-r border-t border-l  font-medium dark:border-neutral-500">
                    <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className=" py-4">Item Name</th>
                    <th scope="col" className="py-4">category</th>
                    <th scope="col" className="px-6 py-4">price</th>
                    <th scope="col" className="px-6 py-4">edit</th>
                    <th scope="col" className="px-3 py-4">delete</th>
                    </tr>
                </thead>
                {
                    data?.map((data) => {
                        count=count+1
                        return (
                            <tbody>
                                <tr className="border-b border-r border-l dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{count}</td>
                                <td className="whitespace-nowrap px-1 py-4">{data.name}</td>
                                <td className="whitespace-nowrap px-1 py-4">{data.category}</td>
                                <td className="whitespace-nowrap px-6 py-4">{data.price}</td>
                                <td className="whitespace-nowrap px-6 py-4 "><button  onClick={() => {
                                    setIsUpdate(data)
                                }}><GrEdit className='h-[20px] w-[20px]'  /></button></td>
                                <td className="whitespace-nowrap px-3 py-4"><button
                                    onClick={() => deleteHandler(data)}
                                ><MdDelete className='h-[20px] w-[20px]' /></button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
                </table>
            </div>
        </div>
    </div>
    </div>
     <div className=" top-[20%] left-[35%] fixed z-[20]">
        {
            isUpdate && <UpdateModal updateData = {isUpdate} setUpdateData={setIsUpdate}/>
        }
     </div>

     {
       ( isDelete || isUpdate) && <div className=" fixed w-[100vw] h-[100vh] top-0 left-0 backdrop-blur-[5px] z-10"></div>
     }

     <div className=" top-[20%] left-[35%] fixed z-[20]">
     {
        isDelete && <DeleteItem deleteData = {isDelete} setIsDelete={setIsDelete}/>
     }
     </div>
    </div>
  )
}
