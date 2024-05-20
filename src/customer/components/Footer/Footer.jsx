import React from 'react'
import {Grid,Typography} from '@mui/material'
import { Button } from '@mui/material'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:'black' ,color:'white',py:3}}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h-6'>Company</Typography>
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
                <Typography className='pb-5' variant='h-6'>Connect</Typography>
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
                <Typography className='pb-5' variant='h-6'>Documentation</Typography>
                <div>
                <Button className='pb-5' variant='h-6' gutterBottom >Guides</Button>
                </div>

                <div>
                <Button className='pb-5' variant='h-6' gutterBottom >API Status</Button>
                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h-6'>Solution</Typography>
                <div>
                <Button className='pb-5' variant='h-4' gutterBottom >Marketing</Button>
                </div>

                <div>
                <Button className='pb-5' variant='h-6' gutterBottom >Analytics</Button>
                </div>

                <div>
                <Button className='pb-5' variant='h-6' gutterBottom >Commerce</Button>
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




