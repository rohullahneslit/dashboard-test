import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {SharedLayout} from '../components'
import DashBoard from '../pages/DashBoard'
import {Analytics, Orders, Products, NotFound, Cart, Customer, Login} from '../pages'
import AuthCheck from '../utils/AuthCheck'

const Router = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <AuthCheck isLoggedIn={isLoggedIn}>
                <DashBoard />
              </AuthCheck>
            }
          />
          <Route path="analytics" element={<Analytics />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="customer" element={<Customer />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
