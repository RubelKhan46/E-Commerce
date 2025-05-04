import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral-800 mt-36 h-96 flex flex-col justify-center sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-10 my-10 text-sm">
        <div>
          <p className="font-bold mb-5 w-32 sm:ml-32 text-3xl text-slate-50">
            STYLEFORGE
          </p>
          <p className="w-full md:w-1/2 sm:ml-30 text-slate-300 ml-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            neque consequatur eum in sequi perferendis aliquid velit ea iure
            voluptatum sed omnis ab natus, suscipit minus dolor! Fugit, totam
            adipisci.
          </p>
        </div>
        <div>
          <p className="text-xl text-slate-50 font-medium mb-5">Information</p>
          <ul className="flex text-slate-300 flex-col gap-1">
            <li>About</li>
            <li>Store Location</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p className="text-xl text-slate-50 font-medium mb-5">Quick Links</p>
          <ul className="flex text-slate-300 flex-col gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl text-slate-50 font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-slate-300">
            <li>123456789</li>
            <li>rubellmy37@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="border-slate-600 mx-8" />
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white text-2xl">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white text-2xl">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white text-2xl">
          <FaInstagram />
        </a>
      </div>
      <div className="text-center text-white mt-8">
        <p>&copy; 2025 Styleforge. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
