import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <motion.h2
        variants={childVariants}
        className="text-3xl md:text-4xl font-poppins font-bold mb-4"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={childVariants}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={childVariants}
        className={`h-1 w-20 gradient-bg rounded-full mt-4 ${
          centered ? 'mx-auto' : ''
        }`}
      ></motion.div>
    </motion.div>
  );
};

export default SectionTitle;