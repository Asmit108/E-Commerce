import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';
import { getOrderHistory } from '../../../State/Order/Action';
import { useDispatch, useSelector } from 'react-redux';

const orderStatusOptions = [
  { label: "Placed", value: "PLACED" },
  { label: "Delivered", value: "DELIVERED" },
  { label: "Cancelled", value: "CANCELLED" },
  { label: "Shipped", value: "SHIPPED" },
  { label: "Confirmed", value: "CONFIRMED" }
];

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(store => store);
  const { auth } = useSelector(store => store);
  const [status, setStatus] = useState("ALL"); // Use state to manage status

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch, order.order, auth.jwt]);

  const handleClick = (newStatus) => {
    if(status=='ALL'){
        setStatus(newStatus)
    }
    else{
        setStatus('ALL')
    }
    console.log(newStatus);
  };

  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
            <h1 className='font-bold text-lg'>Filter</h1>
            <div className='space-y-4 mt-10'>
              <h1 className='font-semibold'>ORDER STATUS</h1>
              {orderStatusOptions.map((option) => (
                <div className='flex items-center' key={option.value}>
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    onClick={() => handleClick(option.value)}
                  />
                  <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          {status === 'ALL' ? (
            order.orders?.map((order) => (
              <OrderCard order={order} key={order._id} />
            ))
          ) : (
            order.orders?.map((order) => (
              order.orderStatus === status ? <OrderCard order={order} key={order._id} /> : null
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
