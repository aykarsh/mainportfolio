import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      year: "Education",
      items: [
        {title: "Senior Secondary High School", subtitle: "The Choice School | 2019-2023" },
        {title: "B.Tech Computer Science and Engineering", subtitle:"SRM Institute of Science and Technology | 2023-2027" }
      ]
    },
    {
      year: "",
      items: [
      ]
    },
    {
      year: "Experience",
      items: [
        {title:"Front End Developer | Participant ", subtitle:"EthGlobal New Delhi (26-28 September 2025) (ReactJs, TailwindCSS, Framer Motion)" },
        {title:"Full Stack Developer | Participant ", subtitle:"Build On Stacks (SRM-KTR Hackathon) (NextJs, TailwindCSS, Framer Motion)" },
        {title:"Web3 Backend | Participant ", subtitle:"Hackverse 25 (Solidity)" }
      ]
    }
  ];

  return (
    <motion.section 
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
        Education & Experience
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {experiences.map((section, sectionIndex) => (
          <motion.div 
            key={sectionIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 + sectionIndex * 0.15, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-8">{section.year}</p>
            <div className="space-y-8">
              {section.items.map((item, itemIndex) => (
                <motion.div 
                  key={itemIndex}
                  className="text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 italic">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
