import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Biography = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      className="py-8 grid md:grid-cols-3 gap-12"
      initial={{ opacity: 0, y:50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Biography</p>
        <p className="font-serif leading-relaxed">
          Student in SRM, with a strong foothold in full stack development and 
          a passion to learn new things.</p>
      </motion.div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">My Details</p>
        <p className="font-serif leading-relaxed mb-2">Kerala, India</p>
        <p className="font-serif leading-relaxed mb-2">akarshnarayanan1312@gmail.com</p>
      </motion.div>

      <motion.div 
        className="text-right"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Services</p>
        <p className="font-serif leading-relaxed mb-2">Web Design</p>
        <p className="font-serif leading-relaxed mb-2">Full Stack Developer</p>
        <p className="font-serif leading-relaxed mb-2">Cybersecurity Enthusiast</p>
        <p className="font-serif leading-relaxed mb-2">BlockChain Enthusiast</p>
      </motion.div>
    </motion.section>
  );
};

export default Biography;
