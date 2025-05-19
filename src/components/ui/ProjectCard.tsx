import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 right-4 flex space-x-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-800 hover:text-primary-600 transition-colors shadow-md"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-800 hover:text-primary-600 transition-colors shadow-md"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;