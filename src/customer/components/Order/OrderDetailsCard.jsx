import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Grid } from '@mui/material'
import { blue, deepPurple, green } from '@mui/material/colors'
import React from 'react'

const OrderDetailsCard = () => {
  return (
    <div className='shadow-lg rounded-md border mt-4 h-[8rem] p-3 hover:shadow-2xl' style={{backgroundColor:'#bbdefb'}}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w=[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Brand</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    $1999
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
