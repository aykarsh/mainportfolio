import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream bg-opacity-95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.a 
              href="#works" 
              className="text-sm tracking-wider uppercase hover:opacity-60 transition-opacity"
              whileHover={{ y: -2 }}
            >
              Works
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-sm tracking-wider uppercase hover:opacity-60 transition-opacity"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          

          <motion.a 
              href="Akarsh Resume.pdf" 
              target="_blank"
              className="text-sm tracking-wider uppercase hover:opacity-60 transition-opacity"
              whileHover={{ y: -2 }}
            >
              Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a 
              href="#" 
              className="text-sm hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <a href="https://x.com/Akarsh594868" target="_blank"><img src="/images/twitter.png" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                </img></a>
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <a href="https://www.linkedin.com/in/akarsh-narayanan-707a10229/" target='_blank'><img src="/images/linkedIn.png" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              </img></a>
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm hover:opacity-60 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <a href="https://github.com/aykarsh" target='_blank'><img src="/images/github.png" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              </img></a>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
