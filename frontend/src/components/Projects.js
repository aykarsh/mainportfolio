import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TrueTicket",
      category: "Web 3",
      image: "/images/TrueTicket.png"
    },
    {
      title: "CertiFi",
      category: "Web 3",
      image: "placeholder2"
    },
    {
      title: "zkRisk",
      category: "Web 3",
      image: "/images/html.png"
    },
    {
      title: "GroundAI",
      category: "AI Chatbot",
      image: "/images/html.png"
    }
  ];

  return (
    <motion.section 
      id="works"
      ref={ref}
      className="py-20 border-t-2 border-gray-300"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-serif text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        My Latest Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg overflow-hidden shadow-lg mb-4"
              whileHover={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl">
                  <img src={project.image} alt={project.title} />
                </span>
              </div>
              <motion.div 
                className="absolute bottom-6 right-6 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
              >
                <span className="text-xs text-center px-2">{project.category}</span>
              </motion.div>
            </motion.div>
            <motion.h3 
              className="font-serif text-2xl text-left group-hover:opacity-60 transition-opacity"
            >
              {project.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
