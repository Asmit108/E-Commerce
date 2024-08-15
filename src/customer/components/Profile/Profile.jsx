import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../State/Auth/Action';

const Profile = () => {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const user = auth.user;

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  return (
    <div>
    {user ? (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        {user.address?.length > 0 ? (
          <ul className="list-disc pl-5">
            {user.address.map((addr, index) => (
              <li key={index}>
                <p><strong>Street Address:</strong> {addr.streetAddress}</p>
                <p><strong>City:</strong> {addr.city}</p>
                <p><strong>State:</strong> {addr.state}</p>
                <p><strong>Zip Code:</strong> {addr.zipCode}</p>
                <p><strong>Mobile:</strong> {addr.mobile}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No address information available.</p>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        {user.paymentInformation?.length > 0 ? (
          <ul className="list-disc pl-5">
            {user.paymentInformation.map((payment, index) => (
              <li key={index}>
                <p><strong>Payment Method:</strong> {payment.paymentMethod}</p>
                <p><strong>Transaction ID:</strong> {payment.transactionId}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No payment information available.</p>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ratings</h2>
        {user.ratings?.length > 0 ? (
          <ul className="list-disc pl-5">
            {user.ratings.map((rating, index) => (
              <li key={index}>{rating}</li>
            ))}
          </ul>
        ) : (
          <p>No ratings available.</p>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        {user.reviews?.length > 0 ? (
          <ul className="list-disc pl-5">
            {user.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>):(<div></div>)}
    </div>
  );
};

export default Profile;
