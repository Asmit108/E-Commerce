import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()

    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6' style={{ color: 'gray' }}>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >About</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Blog</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Press</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Jobs</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Partners</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6' style={{ color: 'gray' }}>Connect</Typography>
                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Careers</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Facebook</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Instagram</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >LinkedIn</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >Twitter</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h-6' style={{ color: 'gray' }}>Help</Typography>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom onClick={()=>navigate('/refund')}>Refund and Cancellation</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom >API Status</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6' style={{ color: 'gray' }}>Solution</Typography>
                    <div>
                        <Button  className='pb-5' variant='h-1' gutterBottom >Contact us:</Button>
                        <small><a href="mailto:asmitmbi100@gmail.com">asmitmbi100@gmail.com</a></small>
                    </div>

                    <div>
                        <Button  className='pb-5' variant='h-1' gutterBottom >Address:</Button>
                        <small>Gandhi Chowk, Madhubani, Bihar</small>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom onClick={()=>navigate('/privacy')}>Privacy</Button>
                    </div>
                    
                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom onClick={()=>navigate('/terms')}>Terms and Conditions</Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h-6' gutterBottom onClick={()=>navigate('/shipping')}>Shipping Policy</Button>
                    </div>



                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component='p' align='center'>
                        &copy; 2023 My Company. All rights reserved
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                        Attached with Privacy Policy
                    </Typography>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer




