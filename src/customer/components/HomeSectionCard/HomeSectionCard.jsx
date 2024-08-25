import React from 'react'
import './HomeSectionCard.css'
import { useNavigate } from 'react-router-dom'

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className='homeSectionCard w-[15rem] m-3 transition-all cursor-pointer' onClick={() => navigate(`/product/${product._id}`)}>
      <div className='h-[20rem] '>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
      </div>

      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p className=''>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>{product.price}</p>
          <p className='line-through opacity-50'>{product.discountedPrice}</p>
          <p className='text-green-600 font-semibold'>{product.discountPersent}% Discount</p>
        </div>

      </div>
    </div>
  )
}

export default HomeSectionCard
