import { BorderColor } from '@mui/icons-material'
import React from 'react'

const AddressCard = ({address}) => {
    console.log(address);
    return (
        <div className='p-5' style={{backgroundColor:'#bbdefb'}}>
            <div className='space-y-3 lg:rounded-md border shadow-lg pl-10' sx={{BorderColor:'black'}}>
                <p className='font-semibold'>Name: {address.firstName} {address.lastName} </p>
                <p className='font-semibold'>Address: {address.streetAddress}</p>
                <p className='font-semibold'>Phone Number: {address.mobile}</p>
            </div>
        </div>
    )
}

export default AddressCard
