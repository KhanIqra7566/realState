import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full text-white" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        
        <div className="mb-6 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-20 mb-4" />
          <p className="text-white-400 max-w-sm">
            We believe that a home is more than just four walls—it’s where your life unfolds.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="text-white-400 space-y-2">
            <li><a href="#Header" className="hover:text-blue-300">Home</a></li>
            <li><a href="#About" className="hover:text-blue-300">About us</a></li>
            <li><a href="#Service" className="hover:text-blue-300">Service</a></li>
            <li><a href="#Contact" className="hover:text-blue-300">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Location</h3>
          <div className="flex items-center text-white-400 mb-2">
            <FaMapMarkerAlt className="mr-2 text-white-900" />
            <span>123 Main Street, City, Country</span>
          </div>
          <div className="flex items-center text-white-400 mb-2">
            <FaEnvelope className="mr-2 text-white-900" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center text-white-400 mb-4">
            <FaPhone className="mr-2 text-white-900" />
            <span>+1 234 567 890</span>
          </div>
        </div>

      </div>

      <div className="text-center text-white-500 mt-6 border-t border-gray-700 pt-4 md:pb-4">
        Copyright 2025 © Real State. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
