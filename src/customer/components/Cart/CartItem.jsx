import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { BorderColor } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({item,isUpdateAllowed}) => {
    const dispatch=useDispatch();
    const handleremove=async()=>{
        const data={
            cartItemId:item._id
        }
        await dispatch(removeCartItem(data));
    }
    const handleupdate=async(quantity)=>{
        console.log(quantity);
        if(quantity==0){
            await handleremove();
        }
        const reqData={
            cartItemId:item._id,
            data:{
                quantity:quantity
            }
        }
         console.log(2);
         await dispatch(updateCartItem(reqData));
         console.log("returned");
    }

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl} alt="" />
                </div>
                <div>
                    <div className='ml-5 space-y-1'>
                        <p className='font-semibold'>{item?.product?.title}</p>
                        <p className='opacity-70'>Size: {item?.size}</p>
                        <p className='opacity-70 mt-2'>Seller: {item?.product?.brand}</p>
                    </div>
                    <div className='flex space-x-5 items-center text-gray-900 pt-4 pl-[1.18rem]'>
                        <p className='font-semibold'>₹{item?.discountedPrice}</p>
                        <p className='opacity-50 line-through'>₹{item?.price}</p>
                        <p className='text-green-600 font-semibold'>{item?.product?.discountPersent}% OFF</p>
                    </div>
                </div>
            </div>
            {isUpdateAllowed?
            <div className='flex items-center space-x-7 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:'red'}} onClick={()=>handleupdate(item?.quantity-1)}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-8 border rounded'>{item?.quantity} </span>
                    <IconButton sx={{color:'green'}} onClick={()=>handleupdate(item?.quantity+1)}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{color:'blue'}} onClick={handleremove}>Remove</Button>
                </div>
            </div>:
               <div className='py-1 px-8 border rounded mt-10'>{item?.quantity} </div>}
        </div>
    )
}

export default CartItem
