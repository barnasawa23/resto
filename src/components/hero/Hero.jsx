import React from 'react';
import { heroData } from '../../data';

import Header from '../../common/header/Header';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../../variants';
import { Link } from 'react-router-dom';

const Hero = () => {

  // destructure a herodata
  const { pretitle, title, subtitle, btnText, btnText2 } = heroData;
  return (
    <>
      <section className='min-h-[980px] bg-hero bg-cover bg-right'>
        {/* header component */}
        <Header />
        <div className='container mx-auto min-h-[980px] flex justify-center items-center'>
          {/* text */}
          <motion.div 
            variants={staggerContainer(0.3, 1)}
            initial='hidden'
            whileInView={'show'}
            className='text-center flex flex-col items-center'
          >
            {/* pretitle */}
            <motion.div 
              variants={fadeIn('down', 'tween', 0.2, 1.1)}
              className='text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'
            >
              {pretitle}
            </motion.div>

            {/* title */}
            <motion.h1 
              variants={fadeIn('down', 'tween', 0.3, 1.1)}
              className='h1 mb-5'
            >
              {title}
            </motion.h1>
            {/* subtitle */}
            <motion.p 
              variants={fadeIn('down', 'tween', 0.4, 1.1)}
              className='text-white max-w-[540px] mb-8'
            >
              {subtitle}
            </motion.p>
            {/* button */}
            <motion.div
              variants={fadeIn('down', 'tween', 0.5, 1.1)}
              className='flex flex-col sm:flex-row gap-4'
            >
              <button className='btn'>
                <Link to="/">
                  {btnText}
                </Link>
              </button>

              <button className='btn2'>
                <Link to="https://mthresto.netlify.app">
                  {btnText2}
                </Link>
              </button>

            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
