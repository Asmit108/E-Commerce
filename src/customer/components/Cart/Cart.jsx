import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(store => store);
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart.cartItems);
    dispatch(getCart());
  }, [cart.cartItems, auth.jwt]);
   
  return (
    <div>
      {cart?.cart?.cartItems?.length > 0 ? (
        <div className='grid grid-cols-3 px-16 relative'>
          <div className='col-span-2'>
            {cart.cart?.cartItems?.map((item) => <CartItem item={item} isUpdateAllowed={true}/>)}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
              <p className='uppercase font-bold opacity-60'>Price Details</p>
              <hr />
              <div className='font-semibold'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>${cart?.cart?.totalPrice}</span>
                </div>
                <div className='flex justify-between pt-3'>
                  <span>Discount</span>
                  <span className='text-green-600'>-${cart?.cart?.discount}</span>
                </div>
                <div className='flex justify-between pt-3'>
                  <span>Delivery Charge</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 font-bold'>
                  <span>Subtotal</span>
                  <span className='text-green-600'>${cart?.cart?.totalDiscountedPrice}</span>
                </div>
              </div>
              <button
                onClick={() => navigate(`/checkout?step=2`)}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-xl font-semibold'>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
