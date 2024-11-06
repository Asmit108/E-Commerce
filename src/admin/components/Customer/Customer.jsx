import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../State/User/Action';
import { changeRole } from '../../../State/User/Action';
import './Customer.css'
import { MenuItem, Select } from '@mui/material';

const Customer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store); // useSelector ensures that when user changes page will rerender but note that
  //whenever the page rerenders, it will only update the parts that have changed
  const role=localStorage.getItem("role")
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, user.user]);

  const handleChange = (userId, newRole) => {
    const reqData = {
      userId: userId,
      newRole: newRole
    }
    dispatch(changeRole(reqData))
  }

  return (
    <>
      {(role == "ADMIN") ?(
        <div className='customer-container'>
          {user.users && user.users.length > 0 && (
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
                {user.users.map((userItem, index) => (
                  <tr key={userItem._id}>
                    <td>{index + 1}</td>
                    <td>{userItem._id}</td>
                    <td>{userItem.firstName}</td>
                    <td>{userItem.lastName}</td>
                    <td>{userItem.email}</td>
                    <td>
                      <Select
                        value={userItem.role}
                        onChange={(e) => handleChange(userItem._id, e.target.value)}
                      >
                        <MenuItem value="CUSTOMER">CUSTOMER</MenuItem>
                        <MenuItem value="ADMIN">ADMIN</MenuItem>
                      </Select>
                    </td>
                    <td>{userItem.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ):(<div>Access Denied...</div>)}
    </>
  );
};

export default Customer;
