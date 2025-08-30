import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const Checkout = lazy(() => import('./components/Checkout.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));

function Loading() {
  return <div className="container"><p>Loading…</p></div>;
}

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/home" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
