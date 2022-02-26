import React from 'react';
import MainHeader from '../main-header';
import Footer from '../footer';

const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;