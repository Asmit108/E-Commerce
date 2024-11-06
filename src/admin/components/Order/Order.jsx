import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, MenuItem } from '@mui/material';
import { cancelOrder, confirmOrder, deleteOrder, deliverOrder, getAllOrders, shipOrder } from '../../../State/Order/Action';
import './Order.css'

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(store => store); // Update with your actual state path
  const role=localStorage.getItem("role")
  useEffect(() => {
    dispatch(getAllOrders()); // Fetch orders when component mounts
  }, [dispatch, order.order]);

  const handleChange = (orderId, newStatus) => {
    if (newStatus === 'CONFIRMED') {
      dispatch(confirmOrder(orderId))
    }
    else if (newStatus == 'SHIPPED') {
      dispatch(shipOrder(orderId))
    }
    else if (newStatus == 'DELIVERED') {
      dispatch(deliverOrder(orderId))
    }
    else if (newStatus == 'CANCELLED') {
      dispatch(cancelOrder(orderId))
    }
  };

  const handleDelete = (orderId) => {
    dispatch(deleteOrder(orderId))
  }

  return (
    <>
    {(role=='ADMIN')?(
    <div className='order-container'>
    <table className='order-table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Id</th>
          <th>User</th>
          <th>Order Date</th>
          <th>Delivery Date</th>
          <th>Payment Method</th>
          <th>Transaction Id</th>
          <th>Payment Status</th>
          <th>Total Price</th>
          <th>Discount</th>
          <th>Total Discounted Price</th>
          <th>Order Status</th>
          <th>Total Items</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {order.orders?.map((order, index) => (
          <tr key={order._id}>
            <td>{index + 1}</td>
            <td>{order._id}</td>
            <td>{order.user}</td>
            <td>{order.orderDate}</td>
            <td>{order.deliveryDate ?order.deliveryDate : 'N/A'}</td>
            <td>{order.paymentDetails?.paymentMethod}</td>
            <td>{order.paymentDetails?.transactionIdt}</td>
            <td>{order.paymentDetails?.paymentStatus}</td>
            <td>{order.totalPrice}</td>
            <td>{order.totalDiscountedPrice}</td>
            <td>{order.discount}</td>
            <td> <Select
              value={order.orderStatus}
              onChange={(e) => handleChange(order._id, e.target.value)}
            >
              <MenuItem value="PLACED">PLACED</MenuItem>
              <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>
              <MenuItem value="SHIPPED">SHIPPED</MenuItem>
              <MenuItem value="DELIVERED">DELIVERED</MenuItem>
              <MenuItem value="CANCELLED">CANCELLED</MenuItem>
            </Select></td>
            <td>{order.totalItem}</td>
            <td><button onClick={() => handleDelete(order._id)} className='handle-button'>DELETE</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    ):(<div>Access Denied...</div>)}
    </>
  )
}
{/* {order.orders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>{order.user}</TableCell>
            <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
            <TableCell>{order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString() : 'N/A'}</TableCell>
            <TableCell>{order.paymentDetails?.paymentMethod}</TableCell>
            <TableCell>{order.paymentDetails?.transactionId}</TableCell>
            <TableCell>{order.paymentDetails?.paymentStatus}</TableCell>
            <TableCell>{order.totalPrice}</TableCell>
            <TableCell>{order.totalDiscountedPrice}</TableCell>
            <TableCell>{order.discount}</TableCell>
            <TableCell>
              <Select
                value={order.orderStatus}
                onChange={(e) => handleChange(order._id, e.target.value)}
              >
                <MenuItem value="PLACED">PLACED</MenuItem>
                <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>
                <MenuItem value="SHIPPED">SHIPPED</MenuItem>
                <MenuItem value="DELIVERED">DELIVERED</MenuItem>
                <MenuItem value="CANCELLED">CANCELLED</MenuItem>
              </Select>
            </TableCell>
            <TableCell>{order.totalItem}</TableCell>
            <TableCell><button onClick={() => handleDelete(order._id)}>DELETE</button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
        </TableContainer >
    );
}; */}

export default Order;
