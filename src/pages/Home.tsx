import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import ParticleBackground from '../components/ui/ParticleBackground';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <ParticleBackground />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:pr-8"
            >
              <motion.p
                variants={itemVariants}
                className="text-primary-600 font-medium mb-4"
              >
                Hello, my name is
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4"
              >
                Chandan R U
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-poppins gradient-text mb-6"
              >
                AI/ML Engineer
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-lg mb-8 max-w-xl"
              >
                I build intelligent systems that learn, adapt, and solve complex
                problems. Specializing in machine learning, computer vision, and
                natural language processing to create innovative AI solutions.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex space-x-4 mt-8"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl animate-float">
                <img
                  src="https://images.pexels.com/photos/6156597/pexels-photo-6156597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Chandan R U"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent"></div>
              </div>
              <div className="absolute -z-10 w-64 h-64 rounded-full gradient-bg blur-3xl opacity-20 -bottom-10 -right-10"></div>
              <div className="absolute -z-10 w-64 h-64 rounded-full gradient-bg blur-3xl opacity-20 -top-10 -left-10"></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#featured-projects"
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowRight size={20} className="transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Featured Projects"
            subtitle="Here are some of my latest and most notable projects in AI and machine learning."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.slice(0, 3).map((project, index) => (
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
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn btn-primary inline-flex items-center"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in working with me?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects, consulting work, and full-time positions.
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary-700 hover:bg-gray-100"
              >
                Get in Touch
              </Link>
              <a
                href="/resume.pdf"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;