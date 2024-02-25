import React from 'react';
import About from '~/components/About';
import Footer from '~/components/Footer';
import Navigation from '~/components/Navigation';

const about: React.FC = () => {
  return (
    <>
        <Navigation/>
        <About />
        <Footer/>
    </>
  );
};

export default about;
