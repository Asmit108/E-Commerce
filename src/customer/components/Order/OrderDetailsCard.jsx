import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Grid } from '@mui/material'
import { blue, deepPurple, green } from '@mui/material/colors'
import React from 'react'

const OrderDetailsCard = ({item}) => {
  return (
    <div className='shadow-lg rounded-md border mt-4 h-[8rem] p-3 hover:shadow-2xl' style={{backgroundColor:'#bbdefb'}}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w=[5rem] h-[5rem] object-cover object-top' src={item.product.imageUrl} alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>{item.product.brand}</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: {item.size}</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: {item.product.color}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                ₹{item.price}
                </Grid>
                <Grid>
                    <Box sx={{color:deepPurple[500]}} className='pt-12'>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                            <span>Rate & Review Product</span>
                    </Box>
                </Grid>
        </Grid>
    </div>
  )
}

export default OrderDetailsCard
