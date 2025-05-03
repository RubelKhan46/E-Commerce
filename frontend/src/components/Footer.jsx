import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100 mt-36 h-96 flex flex-col justify-center sm:mx-8 md:mx-16 lg:mx-24">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <p className="font-bold mb-5 w-32 ml-32 sm:ml-32 text-3xl">
            STYLEFORGE
          </p>
          <p className="w-full md:w-1/2 sm:ml-32 text-gray-600 ml-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            neque consequatur eum in sequi perferendis aliquid velit ea iure
            voluptatum sed omnis ab natus, suscipit minus dolor! Fugit, totam
            adipisci.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Quick Links</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>123456789</li>
            <li>rubellmy37@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-16">
        <p>&copy; 2021 Styleforge. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
