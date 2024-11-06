import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { createPayment } from '../../../State/Payment/Action'
import { getOrderById } from '../../../State/Order/Action'

const OrderSummary = ({address}) => {
    const navigate = useNavigate();
    const { cart } = useSelector(store => store);
    const { auth } = useSelector(store => store);
    const location=useLocation()
    const {order}=useSelector(store=>store)
    const dispatch = useDispatch();
    const searchParams=new URLSearchParams(location.search)
    const orderId=searchParams.get("orderId");
    // useEffect(() => {
    //   console.log(cart.cartItems);
    //   dispatch(getCart());
    // }, [cart.cartItems, auth.jwt]);

    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, [dispatch,orderId]);
    
    const handleCheckout=()=>{
        console.log(orderId)
        dispatch(createPayment(orderId))
    }
      

    return (
            <div>
                <div className='grid grid-cols-3 px-16 relative'>
                    <div className='col-span-2'>
                        <AddressCard address={order.order?.shippingAddress} />
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-60'> Price details</p>
                            <hr />
                            <div className='font-semibold'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>${order.order?.totalPrice}</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Discount</span>
                                    <span className='text-green-600'>-${order.order?.discount}</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3  font-bold'>
                                    <span>Subtotal</span>
                                    <span className='text-green-600'>${order.order?.totalDiscountedPrice}</span>
                                </div>
                            </div>
                            <button type="submit" onClick={handleCheckout}className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none">
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OrderSummary
