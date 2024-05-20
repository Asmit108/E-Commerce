import { BorderColor } from '@mui/icons-material'
import React from 'react'

const AddressCard = () => {
    return (
        <div className='p-5' style={{backgroundColor:'#bbdefb'}}>
            <div className='space-y-3 lg:rounded-md border shadow-lg pl-10' sx={{BorderColor:'black'}}>
                <p className='font-semibold'>Ram Kapoor</p>
                <p>Mumbai,Gokuldhaam,Campus, 40001</p>
                <div className='space-y-1'>
                    <p className='font-semibold'>Phone Number</p>
                    <p>9876543233</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
