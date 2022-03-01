import React from 'react';
import { CartProvider } from '@/context/CartContext';
import MainHeader from '@/components/main-header';
import Footer from '@/components/footer';
import InlineCart from '@/components/inline-cart';

const Layout = (props) => {
  return (
    <CartProvider>
      <InlineCart />
      <MainHeader />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </CartProvider>
  );
};

export default Layout;