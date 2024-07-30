import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const UserOrders = (props) => {

    let count = 0;
    const [data,setData] = useState([]);
    let userData = props.userData
    useEffect(() => {
         console.log(userData._id)

         axios.post("http://localhost:8000/api/v1/getuserorderdetail",{userId:userData._id})
         .then((res) => {
           // console.log(res.data.data.orders);
            setData(res.data.data.orders);
         })
         .catch((error) => {
            console.log(error)
         })
    },[data]);

  return (
    <div>
    <h1 className='text-[25px] pl-10 text-orange-600'>All Menu</h1>
    <div className="flex flex-col ml-[30px] mt-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
                <table className="w-[1100px] text-left text-sm font-light ">
                <thead className="border-b border-r border-t border-l  font-medium dark:border-neutral-500">
                    <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Item Name</th>
                    <th scope="col" className="px-6 py-4">category</th>
                    <th scope="col" className="px-6 py-4">price</th>
                    <th scope="col" className="px-6 py-4">quantity</th>
                    <th scope="col" className="px-6 py-4">total</th>
    
                    </tr>
                </thead>
                {
                  
                    data?.map((data) => {
                        { console.log(data)}
                        count=count+1;
                        let total = data.item.price * data.quantity 
                        return (
                            <tbody>
                                <tr className="border-b border-r border-l dark:border-neutral-500">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">{count}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{data.item.name}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{data.item.category}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{data.item.price}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{data.quantity }</td>
                                  <td className="whitespace-nowrap px-6 py-4">{total}</td>
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