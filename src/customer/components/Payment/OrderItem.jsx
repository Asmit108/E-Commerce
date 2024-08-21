import React from 'react'

const OrderItem = ({item}) => {
  return (
       <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl} alt="" />
                </div>
                <div>
                    <div className='ml-5 space-y-1'>
                        <p className='font-semibold'>{item?.product?.title}</p>
                        <p className='opacity-70'>Size: {item?.size}</p>
                        <p className='opacity-70 mt-2'>Seller: {item?.product?.brand}</p>
                    </div>
                    <div className='flex space-x-5 items-center text-gray-900 pt-4 pl-[1.18rem]'>
                        <p className='font-semibold'>₹{item?.discountedPrice}</p>
                        <p className='opacity-50 line-through'>₹{item?.price}</p>
                        <p className='text-green-600 font-semibold'>{item?.product?.discountPersent}% OFF</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OrderItem
