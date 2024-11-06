import React from 'react';
import ProductForm from './ProductForm';

const Product = () => {
  const role=localStorage.getItem("role")
  return (
    <>
    {(role=='ADMIN')?(
    <div>
      <h1 className='pt-[2rem] pl-[42rem] font-bold text-bold text-lg text-color:green' >Create New Product</h1>
      <ProductForm />
    </div>
    ):(<div>Access Denied...</div>)
    }
    </>
  );
};

export default Product;
