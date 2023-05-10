import React, { useRef } from "react";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import Link from 'next/link';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!fullname || !email || !message) {
      Swal.fire({
        text: "Please fill in all fields.",
        showConfirmButton: false,
        timer: 1500,
        color: '[#6b7280]'
      });

    }else {
    emailjs.sendForm('service_s1xxhd8', 'template_67z9npb', form.current, 'ZEZ6bRH6IWk5ow3Vw')
      .then((result) => {
        Swal.fire({
          text: 'Thank you! Your message was successfully sent.',
          showConfirmButton: false,
          timer: 1800,
          color: '[#6b7280]'
        });
      }, (error) => {
          console.log(error.text);
      });
    };
  };


  return (
    <div className="relative flex flex-col md:flex-row items-center min-h-screen bg-fixed bg-center bg-cover custom-img justify-evenly overflow-auto scrollbar-hide">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80" />
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
          className="flex flex-col items-center justify-center z-[2]">
        <h2 className="text-7xl md:text-9xl text-gray-100 font-ws">Contact</h2>
        <p className="text-center md:text-start text-sm p-4 font-os md:text-md text-gray-200 tracking-wide">
          Please let me know if you have any comments or questions.
        </p>
       
        <ul className="flex flex-row gap-8 text-gray-200 self-center">
          <li className='text-4xl pt-4 cursor-pointer hover:scale-110 hover:text-gray-500'>
          <Link href='https://www.linkedin.com/in/angelikabm/' target='_blank'><CiLinkedin/></Link>
          </li>
          <li className='text-4xl pt-4 cursor-pointer hover:scale-110 hover:text-gray-500'>
          <Link href='https://twitter.com/' target='_blank'><CiTwitter/></Link>  
          </li>
          <li className='text-4xl pt-4 cursor-pointer hover:scale-110 hover:text-gray-500'>
          <Link href='https://www.instagram.com/_ngelika/' target='_blank'><CiInstagram/></Link>
          </li>
        </ul>
       
        
      </motion.div>

      <motion.form
        initial={{ 
          x: 200,
          opacity: 0, 
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col text-gray-200 text-md max-w-sm lg:max-w-md z-[2] px-4"
          ref={form} onSubmit={sendEmail}>
        <label className="mt-6"></label>
        <input
          type="text"
          name="user_name"
          id="fullname"
          placeholder="Name"
          className="border-b py-3 border-gray-500 outline-none bg-transparent"
        />

        <label className="mt-6"></label>
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="Email"
          className="border-b py-3 border-gray-500 outline-none bg-transparent"
        />

        <label className="mt-6"></label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="border-b py-3 border-gray-500 outline-none bg-transparent"
        />

        <div className=" mt-8">
           <button
            type="submit"
            value="Send"
            className="bg-black/80 text-white py-2 px-8 hover:bg-gray-500">
            Send
          </button>  
        </div>
      </motion.form>
    </div>
  );
}
