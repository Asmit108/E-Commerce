import { Grid } from '@mui/material'
import React from 'react'
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';

const OrderCard = ({ order }) => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const handleClick=async()=>{
        await dispatch(getOrderById(order._id))
        navigate(`/account/order/${order._id}`)   
    }
    return (
        <div onClick={handleClick} className='shadow-lg rounded-md border mt-4 h-[8rem] p-3 hover:shadow-2xl' style={{ backgroundColor: '#bbdefb' }}>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <div className='ml-5 space-y-2'>
                            <p className=''>Order Placed On: {order.createdAt}</p>
                            <p className='opacity-50 text-xs font-semibold'>Status: {order.orderStatus}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    ${order.totalDiscountedPrice}
                </Grid>
                <Grid item xs={4}>
                    {order.orderStatus === 'DELIVERED' ? (
                        <p>
                            <span><AdjustRoundedIcon sx={{ color: 'green' }} /> Delivered on {order.deliveryDate}</span>
                        </p>
                    ) : (
                        <p>
                            <span><AdjustRoundedIcon sx={{ color: 'green' }} /> Expected Delivery on {order.deliveryDate}</span>
                        </p>
                    )}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard
