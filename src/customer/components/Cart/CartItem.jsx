import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { BorderColor } from '@mui/icons-material';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
                </div>
                <div>
                    <div className='ml-5 space-y-1'>
                        <p className='font-semibold'>Men Slim Mid Rise Jeans</p>
                        <p className='opacity-70'>Size: L,White</p>
                        <p className='opacity-70 mt-2'>Seller: Chritaso 2fashion</p>
                    </div>
                    <div className='flex space-x-5 items-center text-gray-900 pt-4 pl-[1.18rem]'>
                        <p className='font-semibold'>$199</p>
                        <p className='opacity-50 line-through'>$211</p>
                        <p className='text-green-600 font-semibold'>5% OFF</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-7 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:'red'}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-8 border rounded'>3 </span>
                    <IconButton sx={{color:'green'}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{color:'blue'}}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
