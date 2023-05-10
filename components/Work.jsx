import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import port from "../public/images/portfolio.png";
import api from "../public/images/api.png";
import ecom from "../public/images/ecom.png";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Work() {
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
        Work
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
          className="grid grid-cols-1 gap-2 pt-32 px-8 md:pt-48 md:px-24 lg:grid-cols-3 lg:pt-32 lg:px-8 justify-evenly">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
          <div className="">
            <Image
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border border-white rounded-lg"
              src={port}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 border border-gray-500 rounded-lg"></div>
          <div className="absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-lg md:text-2xl font-ws text-white">
              Portfolio Website
            </h1>
            <p className="mb-3 text-sm tracking-wide italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-neutral-900 px-4 py-1 font-os">
              next.js, tailwindcss, framer motion, emailJS
            </p>
            <button className="rounded-full text-sm text-white shadow shadow-black/60">
            <Link href="/">
             <BsBoxArrowUpRight className="text-xl"/>
            </Link>
            </button>
            
          </div>
        </div>
        
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
          <div className="">
            <Image
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border border-white rounded-lg"
              src={api}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 border border-gray-500 rounded-lg"></div>
          <div className="absolute inset-8 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-2xl font-ws text-white">
              E-Commerce API
            </h1>
            
            <p className="mb-3 text-sm tracking-wide italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-neutral-900 px-4 py-1 font-os">
            javascript, node.js, express.js, mongoDB, postman
            </p>
            <button className="rounded-full text-sm text-white shadow shadow-black/60">
            <Link href="https://github.com/angelikabm/ecommerce-api" target="_blank">
             <BsBoxArrowUpRight className="text-xl"/>
            </Link>
            </button>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
          <div className="">
            <Image
              className="border border-gray-500 rounded-lg h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={ecom}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 border border-gray-500 rounded-lg"></div>
            <div className="absolute inset-8 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-2xl font-ws text-white">
                E-Commerce Website
              </h1>
              <p className="mb-3 text-sm tracking-wide italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-neutral-900 px-4 py-1 font-os">
              (MERN Stack) mongoDB, express.js, react.js, node.js
             </p>  
              <button className="rounded-full text-sm text-white shadow shadow-black/60">
              <Link href="https://ecommerce-livid-sigma-82.vercel.app/login" target="_blank">
              <BsBoxArrowUpRight className="text-xl"/>
              </Link>
              </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
