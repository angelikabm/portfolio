import React from 'react'
import { motion } from 'framer-motion'
import logo1 from "../public/images/logo-javascript.png";
import logo2 from "../public/images/logo-html5.png";
import logo3 from "../public/images/logo-css3.png";
import logo4 from "../public/images/logo-bootstrap.png";
import logo5 from "../public/images/logo-expressjs.png";
import logo6 from "../public/images/logo-git.png";
import logo7 from "../public/images/logo-gitlab-ci-cd.png";
import logo8 from "../public/images/logo-mongodb.png";
import logo9 from "../public/images/logo-nodejs.png";
import logo10 from "../public/images/logo-react.png";
import logo11 from "../public/images/logo-postman.png";
import logo12 from "../public/images/logo-sublime-text-3.png";
import logo13 from "../public/images/logo-nextjs.png";
import logo14 from "../public/images/logo-tailwind-css.png";
import Image from 'next/image';

export default function Skills() {
  return (
    <div className="relative flex min-h-screen items-center justify-evenly custom-img p-2 overflow-auto scrollbar-hide">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80" />
      
      <motion.h3
        initial={{ 
          x: -200,
          opacity: 0, 
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute text-7xl md:text-9xl text-gray-100 font-ws dark:text-white z-[2] place-self-start pt-11">
        Skills
      </motion.h3>

      <motion.div
        initial={{ 
          x: 200,
          opacity: 0, 
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
            className='grid grid-cols-3 gap-2 pt-32 px-8 md:pt-48 md:grid-cols-5 lg:grid-cols-7 md:px-16 lg:px-40 lg:pt-32 justify-evenly z-[2]'>
                <Image src={logo1} alt=''/>
                <Image src={logo2} />
                <Image src={logo3} />
                <Image src={logo4} />
                <Image src={logo5} />
                <Image src={logo6} />
                <Image src={logo7} />
                <Image src={logo8} />
                <Image src={logo9} />
                <Image src={logo10} />
                <Image src={logo11} />
                <Image src={logo12} />
                <Image src={logo13} className='p-4'/>
                <Image src={logo14} className='p-3'/>
        </motion.div>
    </div>
  )
}