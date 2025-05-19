import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

const TimelineItem = ({ period, title, company, description, index }: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={`flex md:contents ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
    >
      <div
        className={`col-start-1 col-end-2 md:mx-auto relative ${
          index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
        }`}
      >
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 rounded-full gradient-bg absolute top-0 -mt-3"></div>
      </div>
      <div
        className={`bg-white shadow-md rounded-lg p-6 my-4 md:my-8 md:w-5/12 ${
          index % 2 === 0 ? 'mr-auto' : 'ml-auto'
        }`}
      >
        <span className="font-semibold text-sm text-primary-600 block mb-1">
          {period}
        </span>
        <h3 className="font-bold text-lg">{title}</h3>
        <h4 className="font-medium text-gray-600 mb-2">{company}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;