import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    alert('Thank you! Your email has been received.');
    setEmail('');
  };

  return (
    <motion.section 
      id="contact"
      ref={ref}
      className="py-20 border-t-2 border-gray-300"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-12 font-serif leading-relaxed">
          I'd love to hear from you. Send me an email and let's connect.
        </p>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <textarea
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Type your email message here..."
              rows="8"
              className="w-full px-8 py-6 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors font-serif text-lg resize-none bg-white shadow-sm"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="px-12 py-4 bg-gray-900 text-white font-serif text-lg rounded-lg hover:bg-gray-800 transition-colors shadow-md"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send Email
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
