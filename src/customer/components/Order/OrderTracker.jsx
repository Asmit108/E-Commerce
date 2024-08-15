import { Step, StepLabel, Stepper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Delivered"
];

const getStatusStep = (status) => {
  switch (status) {
    case 'PLACED':
      return 0;
    case 'CONFIRMED':
      return 1;
    case 'SHIPPED':
      return 2;
    case 'DELIVERED':
      return 3;
    default:
      return 0;
  }
};

const OrderTracker = () => {
  const {order}=useSelector(store=>store)
  const dispatch=useDispatch()
  const [activeStep,setactiveStep]=useState(0)
  useEffect(()=>{
    setactiveStep(getStatusStep(order.order.orderStatus))
  },[dispatch,order.order])
  
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel sx={{ color: '#9155fD', fontSize: "1.5em" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default OrderTracker;
