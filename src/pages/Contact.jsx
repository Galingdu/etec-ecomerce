import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg">We’d love to hear from you. Reach out anytime!</p>
        </motion.div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-600">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-600">Contact Details</h2>
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>123 Orange Street, Phnom Penh, Cambodia</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>hello@yourcompany.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaPhone className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+855 12 345 678</p>
            </div>
          </div>
        </motion.div>
      </section>

     
    </div>
  );
};

export default Contact;
