import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import OrderDetailsCard from './OrderDetailsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action'; // Adjust the path as necessary

const OrderDetails = () => {
    const { orderId } = useParams(); // Get the order ID from URL parameters
    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderById(orderId)); // Fetch the order details by ID
        }
    }, [dispatch, orderId]);

    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-10'>Delivery Address</h1>
                {order.order?.shippingAddress ? (
                    <AddressCard address={order.order.shippingAddress} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className='py-20'>
                {order.order ?
                    (<OrderTracker />) :
                    (<p>Loading...</p>)}
            </div>
            <div>
                {order.order?.orderItems ? (
                    order.order.orderItems.map((item) => (
                        <OrderDetailsCard key={item._id} item={item} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default OrderDetails;
