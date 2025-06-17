import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg max-w-xl mx-auto">
            A passionate team building creative digital experiences for tomorrow’s world.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://bhp.co.uk/wp-content/uploads/2022/07/Charities-promotions-aspect-ratio-460-300-768x501.jpg"
            alt="Our team"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-4">About Our Company</h2>
          <p className="text-gray-700 mb-4">
            We are a creative studio focused on building innovative web and mobile solutions. With a team of designers,
            developers, and thinkers, we transform ideas into reality with clean code and beautiful design.
          </p>
          <p className="text-gray-700">
            Our mission is simple: create digital experiences that are fast, accessible, and delightful to use.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-orange-600 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: 'Innovation',
                desc: 'We think forward and embrace the latest tech to deliver fresh ideas.',
              },
              {
                title: 'Integrity',
                desc: 'We build trust through honesty, quality work, and strong partnerships.',
              },
              {
                title: 'Excellence',
                desc: 'We always strive for the highest quality in everything we create.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
