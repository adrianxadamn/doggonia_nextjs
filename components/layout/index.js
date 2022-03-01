import React from 'react';
import MainHeader from '../main-header';
import Footer from '../footer';

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