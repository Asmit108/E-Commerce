import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
    return (
        <div>
            <div>
                <AddressCard />
            </div>
            <div>
                <div className='grid grid-cols-3 px-16 relative'>
                    <div className='col-span-2'>
                        {[1, 1, 1, 1].map((item) => <CartItem />)}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-60'> price details</p>
                            <hr />
                            <div className='font-semibold'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>$4967</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Discount</span>
                                    <span className='text-green-600'>-$567</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3  font-bold'>
                                    <span>Subtotal</span>
                                    <span className='text-green-600'>$4890</span>
                                </div>
                            </div>
                            <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none">
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
