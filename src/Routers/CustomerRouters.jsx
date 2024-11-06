import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/Navigation/Navigation'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Profile from '../customer/components/Profile/Profile'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
import Privacy from '../customer/Policy/Privacy'
import Terms from '../customer/Policy/Terms'
import Refund from '../customer/Policy/Refund'
import Shipping from '../customer/Policy/Shipping'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/privacy' element={<Privacy />}></Route>
                <Route path='/shipping' element={<Shipping />}></Route>
                <Route path='/terms' element={<Terms />}></Route>
                <Route path='/refund' element={<Refund />}></Route>
                <Route path='/register' element={<HomePage />}></Route>
                <Route path='/login' element={<HomePage />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
                <Route path='/payments/success' element={<PaymentSuccess />}></Route>
            </Routes>
            <div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters
