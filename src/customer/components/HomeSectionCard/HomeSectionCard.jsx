import React from 'react'

const HomeSectionCard= ({product})=> {
  return (
    <div className='cursor-poiner flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
           
          <div className='w-[10rem] h-[13rem] ' border='black'>
            <img className='object-cover object-top w-full h-full' src={product.imageUrl}/>
          </div>

          <div className='p-4'>
            <h3 className='text-lg font-medium textgry'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
          </div>
    </div>
  )
}

export default HomeSectionCard
