import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stats = [
    { label: "Years of Experience", value: "8" },
    { label: "Satisfaction Score", value: "100%" },
    { label: "Clients on Worldwide", value: "+80" },
    { label: "Projects Done", value: "675" }
  ];

  return (
    <motion.section 
      className="pt-32 pb-20 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4"
      >
        Akarsh Narayanan
      </motion.h1>
      
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-3xl font-serif mb-2"
      >
        Full Stack Developer | Cybersecurity Enthusiast | Web3 Developer
      </motion.h2>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl md:text-2xl font-serif text-gray-700 mb-16"
      >
        Based in India
      </motion.p>

      {/* Profile Image Section with Stats */}
      <motion.div 
        variants={itemVariants}
        className="relative flex justify-center items-center mb-20 px-4"
      >
        {/* Profile Image */}
        <motion.div 
          className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-200 overflow-hidden shadow-2xl flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <img src="/images/Photo.jpeg" alt="Akarsh Narayanan" className="object-cover w-full h-full"/>
        </motion.div>

        {/* Stats on the Right Side */}
        <motion.div 
          className="hidden md:flex flex-col gap-8 ml-12 text-right"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Years of</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Experience</p>
            <p className="text-6xl font-serif leading-none">2+</p>
          </motion.div>

          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Projects</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Built</p>
            <p className="text-6xl font-serif leading-none">12</p>
          </motion.div>

          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Hackathons</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Attended</p>
            <p className="text-6xl font-serif leading-none">3</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Technology Logos */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 flex justify-center gap-8 md:gap-12 flex-wrap items-center"
      >
        {[
          { src: '/images/cppLogo.png', alt: 'C++ Logo' },
          { src: '/images/pythonLogo.png', alt: 'Python Logo' },
          { src: '/images/css.png', alt: 'CSS Logo' },
          { src: '/images/github.png', alt: 'GitHub Logo' },
          { src: '/images/html.png', alt: 'HTML Logo' }
        ].map((logo, index) => (
          <motion.div 
            key={index}
            className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center bg-white rounded-lg shadow-md p-3"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
