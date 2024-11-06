import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts, updateProduct } from '../../../State/Product/Action';
import './Product.css';

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(store => store); // Adjust based on your state structure
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [newDiscountedPrice, setNewDiscountedPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const role=localStorage.getItem("role")
  useEffect(() => {
    const data={
      category:'',
      color:[],
      sizes:[],
      minPrice:0,
      maxPrice:0,
      minDiscount:0,
      sort:'',
      pageNumber:1,
      pageSize:500,
      stock:''
    }
    dispatch(findProducts(data));
  }, [dispatch, product.product]);

  const handleUpdate = (product) => {
    setCurrentProduct(product);
    setNewPrice(product.price);
    setNewDiscountedPrice(product.discountedPrice);
    setNewQuantity(product.quantity);
    setModalOpen(true);
  };

  const handleDelete = (product) => {
    const reqData={
      productId:product._id
    }
    dispatch(deleteProduct(reqData))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqData = {
      productId: currentProduct._id,
      data: {
        price: newPrice,
        discountedPrice: newDiscountedPrice,
        quantity: newQuantity
      }
    };
    dispatch(updateProduct(reqData));
    setModalOpen(false);
  };

  return (
    <>
    {(role=='ADMIN')?(
    <div className='product-container'>
      {product.products && product.products.length > 0 && (
        <table className='product-table'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discounted Price</th>
              <th>Discount Percentage</th>
              <th>Quantity</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Sizes</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.discountedPrice}</td>
                <td>{product.discountPersent}</td>
                <td>{product.quantity}</td>
                <td>{product.brand}</td>
                <td>{product.color}</td>
                <td>{product.sizes.map(size => `${size.name} (${size.quantity})`).join(', ')}</td>
                <td><img src={product.imageUrl} alt={product.title} width="50" /></td>
                <td><button onClick={() => handleUpdate(product)} className='handle-button'>UPDATE</button></td>
                <td><button onClick={() => handleDelete(product)} className='handle-button'>DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {modalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
              <label>
                New Price:
                <input type='number' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} required />
              </label>
              <label>
                New Discounted Price:
                <input type='number' value={newDiscountedPrice} onChange={(e) => setNewDiscountedPrice(e.target.value)} />
              </label>
              <label>
                New Quantity:
                <input type='number' value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} required />
              </label>
              <button type='submit'>Submit</button>
              <button type='button' onClick={() => setModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
    ):(<div>Access Denied...</div>)}
    </>
  );
};

export default Product;
