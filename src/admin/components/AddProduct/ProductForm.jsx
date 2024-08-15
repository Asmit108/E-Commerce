import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../State/Product/Action';
import './ProductForm.css'; // Assuming you have some CSS styles

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountedPrice: '',
    discountPersent: '',
    quantity: '',
    brand: '',
    color: '',
    sizes: '',
    imageUrl: '',
    topLavelCategory: '',
    secondLavelCategory: '',
    thirdLavelCategory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sizesArray = formData.sizes.split(',').map(size => ({
      name: size.trim(),
      quantity: formData.quantity // assuming quantity is the same for all sizes
    }));
    const reqData = {
      ...formData,
      sizes: sizesArray
    };
    dispatch(createProduct(reqData));
  };

  return (
    <div className='product-form-container'>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type='text' name='title' value={formData.title} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <label>Description:</label>
        <textarea name='description' value={formData.description} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <label>Price:</label>
        <input type='number' name='price' value={formData.price} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <label>Discounted Price:</label>
        <input type='number' name='discountedPrice' value={formData.discountedPrice} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} />

        <label>Discount Percent:</label>
        <input type='number' name='discountPersent' value={formData.discountPersent} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} />

        <label>Quantity:</label>
        <input type='number' name='quantity' value={formData.quantity} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <label>Brand:</label>
        <input type='text' name='brand' value={formData.brand} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} />

        <label>Color:</label>
        <input type='text' name='color' value={formData.color} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} />

        <label>Sizes (comma separated):</label>
        <input type='text' name='sizes' value={formData.sizes} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} />

        <label>Image URL:</label>
        <input type='text' name='imageUrl' value={formData.imageUrl} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} />

        <label>Top Level Category:</label>
        <input type='text' name='topLavelCategory' value={formData.topLavelCategory} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <label>Second Level Category:</label>
        <input type='text' name='secondLavelCategory' value={formData.secondLavelCategory} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <label>Third Level Category:</label>
        <input type='text' name='thirdLavelCategory' value={formData.thirdLavelCategory} style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}  onChange={handleChange} required />

        <button type='submit'>Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
