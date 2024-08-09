import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Mail className="mr-2" />
            <a href="mailto:contact@rentalproperty.com">contact@rentalproperty.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" />
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
