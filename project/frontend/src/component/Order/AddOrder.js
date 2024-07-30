import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const AddOrder = (props) => {
    let userData = props.userData
    let orderData = props.orderData
    let setOrderData = props.setOrderData;
    console.log(orderData)

    const [quantity,setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity+1);
    }
    
    const decrement = () => {
        if(quantity > 0)
        {
            setQuantity(quantity-1)
        }
    }

    async function handleSubmit(){

        const allData = {
            itemId:orderData._id,
            quantity:quantity,
            email:userData.email
        }

        console.log(allData)

        try{
            await axios.post("http://localhost:8000/api/v1/addorder",allData)
            .then((res) => {
                console.log(res)
                setOrderData(null);
                toast.success("order created successfully")
            })
            .catch((error) => {
                console.log(error)
            })
        }
        catch(error)
        {

        }
    }


    return (
    <div className='w-[350px] h-[450px] bg-richblack-800 rounded-xl  '>
        <div className='flex flex-col justify-between items-center py-[50px] h-full  mx-auto'>
            <h1 className='text-[28px] text-orange-600 '>Order Your Fav Food</h1>
            <div className='flex flex-col justify-evenly h-[250px] mx-[20px]]'>
                <p className='text-[18px] '>Food Name - <span className='text-[19px] text-yellow-50'>{orderData.name}</span></p>
                <p className='text-[18px]'>Category - <span className='text-[18px] text-yellow-50'>{orderData.category}</span></p>
                <div className='text-[18px] flex gap-8 '>
                    <p>Quantity - <span className='text-[22px] text-yellow-50'>{quantity}</span></p>
                    <div className='flex gap-6'>
                        <p className='w-[35px] h-[35px] text-center bg-orange-600 rounded-full cursor-pointer text-[20px]' onClick={() => {if(quantity > 0){setQuantity(quantity-1)}}}>-</p>
                        <p className='w-[35px] h-[35px] text-center bg-orange-600 rounded-full cursor-pointer text-[20px]' onClick={increment}>+</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-8  '>
                <div className='text-white bg-orange-600 w-[100px] h-[35px] text-center rounded-xl text-[18px] cursor-pointer flex justify-center items-center' onClick={() => setOrderData(null)}>cancel</div>
                <div className='text-black bg-yellow-50 w-[100px] h-[35px] text-center rounded-xl text-[16px] cursor-pointer flex justify-center items-center' onClick={handleSubmit}>Order Now</div>
            </div>
        </div>
    </div>
  )
}
