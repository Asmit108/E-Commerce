import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../admin/components/Product/Product'
import Order from '../admin/components/Order/Order'
import Customer from '../admin/components/Customer/Customer'
import AddProduct from '../admin/components/AddProduct/AddProduct'
import Dashboard from '../admin/components/Dashboard/Dashboard'
import Sidebar from '../admin/components/Sidebar/Sidebar'

const AdminRouters = () => {
    return (
        <div>
            <Sidebar/>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/' element={<Dashboard/>}></Route> 
                <Route path='/products' element={<Product />}></Route>
                <Route path='/customers' element={<Customer />}></Route>
                <Route path='/orders' element={<Order />}></Route>
                <Route path='/add_products' element={<AddProduct/>}></Route>
            </Routes>
        </div>
    )
}

export default AdminRouters
