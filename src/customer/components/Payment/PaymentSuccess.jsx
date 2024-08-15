import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import OrderTracker from '../Order/OrderTracker'
import { updatePaymentInformation } from '../../../State/Payment/Action'

const PaymentSuccess = () => {
    const { order } = useSelector(store => store)
    useEffect(()=>{
      dispatch(updatePaymentInformation)
    },[dispatch,order.order])
    return (
        <div>
            <div className="payment-success-container">
                <h1>Payment Successfull!</h1>
                <p>Thank you for your purchase. Your payment has been successfully processed.</p>
            </div>
            <div>
                <OrderTracker/>
            </div>
            <div>
                {order.order?.orderItems?.map((item) => <OrderItem item={item} />)}
            </div>
        </div>
    )
}

export default PaymentSuccess
