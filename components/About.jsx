import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex flex-col md:flex-row items-center min-h-screen bg-fixed bg-center bg-cover custom-img justify-evenly p-8 md:p-0 overflow-auto scrollbar-hide">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80" />

      <div className="z-[2] items-center justify-center flex flex-col md:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dazdsbfy1/image/upload/v1678070505/1673947744174_fplwgi.jpg"
          className="w-70 h-70 rounded-full md:w-[500px] md:h-[500px]"
        />
      </div>
     
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
        className="flex flex-col items-center md:items-start z-[2] md:justify-center"
      >
        <h2 className="text-7xl md:text-9xl text-gray-100 font-ws">
          About
        </h2>
        <h3 className="text-md md:text-2xl max-w-md py-6 font-os text-gray-400">
          I am a web developer based in Cavite, Philippines.
        </h3>
        <p className=" text-gray-200 text-sm tracking-wide font-os md:text-base max-w-lg">
          In a quest for constant learning and improving my technical skills, I
          take advantage of online resources from different learning platforms
          like OpenEDG, and freeCodeCamp. I also completed an intensive I.T.
          coding bootcamp where I earned my{" "}
          <a
            href="https://share.zertify.zuitt.co/certificate/0f3e8f02-2261-4c35-b90f-7c71752ec75f/"
            target="_blank"
          >
            <span className="text-gray-400 underline hover:text-gray-500">
              web development certificate.
            </span>
          </a>
        </p>
        <div className=" mt-8">
           <Link href="https://www.canva.com/design/DAFihWmL4sw/8gz7ev2PjaZNQ3_eSqbAbw/view?utm_content=DAFihWmL4sw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" 
            target="_blank"
            className="bg-black/80 text-white py-2 px-4 hover:bg-gray-500">
            View Resume
          </Link>  
        </div>
      </motion.div>
    </div>
    
  );
}
