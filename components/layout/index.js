import React from 'react';
import MainHeader from '@/components/main-header';
import Footer from '@/components/footer';

const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;