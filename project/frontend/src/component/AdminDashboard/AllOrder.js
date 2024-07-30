import React, { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import axios from 'axios';


export const AllOrder = () => {

    const [data,setData] = useState([]);
    let count = 0;

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/getallorder")
        .then((res) => {
            setData(res.data.data)
            console.log(res.data.data)
         })
         .catch((error) => {
            console.log(error)
         })
    },[])

  return (

    <div>
    <h1 className='text-[25px] pl-10 text-orange-600'>All Orders</h1>
    <div className="flex flex-col ml-[30px] mt-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
                <table className="min-w-full text-left text-sm font-light w-[1100px] ">
                <thead className="border-b border-r border-t border-l  font-medium dark:border-neutral-500">
                    <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Fist Name</th>
                    <th scope="col" className="px-6 py-4">last Name</th>
                    <th scope="col" className="px-6 py-4">Item Name</th>
                    <th scope="col" className="px-6 py-4">Quantity</th>
                    <th scope="col" className="px-6 py-4">Price / item </th>
                    <th scope="col" className="px-6 py-4">Total</th>
                    </tr>
                </thead>
                {
                    data.map((data) => {
                        count=count+1
                        let total = data.item.price * data.quantity 
                        return (
                            <tbody>
                                <tr className="border-b border-r border-l dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{count}</td>
                                <td className="whitespace-nowrap px-6 py-4">{data.cust.firstName}</td>
                                <td className="whitespace-nowrap px-6 py-4">{data.cust.lastName}</td>
                                <td className="whitespace-nowrap px-6 py-4">{data.item.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{data.quantity}</td>
                                <td className="whitespace-nowrap px-6 py-4">{data.item.price}</td>
                                <td className="whitespace-nowrap px-6 py-4">{total}</td>
                                <button className='whitespace-nowrap px-6 py-4'>create bill</button>
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
     
    </div>
  )
}
