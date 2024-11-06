import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import OrderTracker from '../Order/OrderTracker'
import { updatePaymentInformation } from '../../../State/Payment/Action'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation, useParams } from 'react-router-dom'
import './PaymentSuccess.css'


const PaymentSuccess = () => {
    const { order } = useSelector(store => store)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const paymentId = queryParams.get('razorpay_payment_id');
        const data = {
            paymentId: paymentId,
            orderId: order.order?.orderId
        }
        console.log(data)
        dispatch(updatePaymentInformation(data))
        console.log(order)
    }, [dispatch]);

    return (
        <div>
            <div className="payment-success-container">
                <h1>Payment Successfull!</h1>
                <p>Thank you for your purchase. Your payment has been successfully processed.</p>
            </div>
            <div>
                <OrderTracker />
            </div>
            <div>
                {order.order?.orderItems?.map((item) => <OrderItem item={item} />)}
            </div>
        </div>
    )
}

export default PaymentSuccess
