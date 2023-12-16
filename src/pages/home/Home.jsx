import React from 'react';
import { About, Hero, Menu, Reservation, Team, Testimonials } from '../../components';
import { Footer } from '../../common';

const Home = () => {
  return (
    <>
      <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
        <Hero />
        <About />
        <Menu />
        <Team />
        <Testimonials />
        <Reservation />
        <Footer />
        <div className='h-[380px] md:h-[370px]'></div>
      </div>
    </>
  )
}

export default Home;
