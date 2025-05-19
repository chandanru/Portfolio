import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects, categories } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      <section className="py-32">
        <div className="container-custom">
          <SectionTitle
            title="My Projects"
            subtitle="A collection of AI and machine learning projects I've worked on."
            centered
          />

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrl={project.imageUrl}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;