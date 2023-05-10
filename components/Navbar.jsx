import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import M from "../public/images/A.gif";
import Image from 'next/image';
import { motion } from 'framer-motion';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div
        className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>        
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
              className='max-w-[1240px] ml-auto flex justify-end mt-5 mr-[-1.5rem] text-white'>
            <ul className='hidden sm:flex flex-col tracking-wide font-os'>

                <li className='p-5 rotate-90'>
                    <Link href='/about' className='hover:text-gray-400'>about</Link>
                </li>
                <li className='p-5 -mb-2 rotate-90'>
                    <Link href='/work' className='hover:text-gray-400'>work</Link>
                </li>
                <li className='p-5 -mb-2 rotate-90'>
                    <Link href='/skills' className='hover:text-gray-400'>skills</Link>
                </li>  
                <li className='p-5 rotate-90'>
                    <Link href='/contact' className='hover:text-gray-400'>contact</Link>
                </li>           
            </ul>
        
            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10 px-12'>
                {nav 
                ? 
                <AiOutlineClose size={20}/> 
                : 
                <AiOutlineMenu size={20}/>
                }
            </div>

            {/* Mobile Menu */}
            <div 
            className={
                nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }
            >
            <ul className='font-ws'>
                <li className='p-4 text-4xl hover:text-gray-400'> 
                    <Link href='/about'>About</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-400'>
                    <Link href='/work'>Work</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-400'>
                    <Link href='/skills'>Skills</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-400'>
                    <Link href='/contact'>Contact</Link>
                </li>
                
            </ul>
            </div>       
        </motion.div>
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
                 className='flex flex-col ml-4'>
                <Link href='/'>
                <Image src={M} alt='logo' className='rounded-full w-10 h-10 md:w-16 md:h-16 mt-[-1rem] md:mt-[-15rem]'/>
                </Link>
            </motion.div>
            <motion.p
            initial={{ 
                x: -200,
                opacity: 0, 
                }}
                transition={{
                duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
            className='bottom-4 fixed text-gray-300 text-[12px] md:text-[15px] tracking-wide font-os ml-4'>© 2023 Angelika Manalang. All Rights Reserved.
            </motion.p>             
            
    </div>
  )
}

export default Navbar