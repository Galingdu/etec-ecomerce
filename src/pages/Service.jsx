// src/pages/Services.jsx
import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaCode className="text-orange-500 text-4xl mb-4" />,
    description: 'We build fast, modern, and secure websites tailored to your business needs.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPaintBrush className="text-orange-500 text-4xl mb-4" />,
    description: 'Clean and user-friendly designs that enhance user experience and engagement.',
  },
  {
    title: 'Mobile App',
    icon: <FaMobileAlt className="text-orange-500 text-4xl mb-4" />,
    description: 'Cross-platform mobile apps that deliver performance and style.',
  },
  {
    title: 'SEO Optimization',
    icon: <FaSearch className="text-orange-500 text-4xl mb-4" />,
    description: 'Improve your search engine rankings and get more organic traffic.',
  },
];

const Services = () => {
  return (
    <div className="bg-white text-gray-800 lg:h-[100vh]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We offer a range of digital services to help your business thrive online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
