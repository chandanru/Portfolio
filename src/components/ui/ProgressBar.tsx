import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar = ({ label, percentage }: ProgressBarProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: { 
        duration: 1,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-bar-fill"
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;