import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

function Hero() {
   const [text, count] = useTypewriter({
        words: [
        "web developer",
    ],
    loop: true,
    delaySpeed: 3000,
    });

  return (
    <div
    className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]'/>
        <motion.div 
         initial={{ 
          x: -200,
          opacity: 0, 
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        className='p-5 text-[#F4F4F2] z-[2] mt-[5rem]'>
            <h2 className='text-7xl md:text-9xl font-ws'>Angelika</h2>
            <p className='py-5 text-lg text-right tracking-[4px] font-os'>
            <span className='text-gray-300'>{text}</span>
                <Cursor cursorColor="gray" /></p>
        </motion.div>
    </div>
  )
}

export default Hero