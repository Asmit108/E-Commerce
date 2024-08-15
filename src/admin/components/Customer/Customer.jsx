import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../State/Auth/Action';
import './Customer.css'
const Customer = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(store=>store); // Adjust based on your state structure

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch,auth.users]);

  return (
    <div className='customer-container'>
    
      {auth.users && auth.users.length > 0 && (
        <table className='customer-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {auth.users.map((userItem, index) => (
            <tr key={userItem._id}>
              <td>{index + 1}</td>
              <td>{userItem._id}</td>
              <td>{userItem.firstName}</td>
              <td>{userItem.lastName}</td>
              <td>{userItem.email}</td>
              <td>{userItem.role}</td>
              <td>{userItem.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Customer;
