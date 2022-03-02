import React from 'react';
import Head from 'next/head';
import { CartProvider } from '@/context/CartContext';
import MainHeader from '@/components/main-header';
import Footer from '@/components/footer';
import InlineCart from '@/components/inline-cart';

const Layout = (props) => {
  const handle = props.children.props.handle;
  const pageSpecificClass = `page--${handle}`;

  return (
    <CartProvider>
      <Head>
        <title>Doggonia Sandbox Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
             async
             rel="stylesheet"
             href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <InlineCart />
      <MainHeader />
      <div className={`container ${pageSpecificClass}`}>
        {props.children}
      </div>
      <Footer />
    </CartProvider>
  );
};

export default Layout;